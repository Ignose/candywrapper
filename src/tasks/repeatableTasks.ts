import { CombatStrategy } from "grimoire-kolmafia";
import {
  autosellPrice,
  availableAmount,
  canAdventure,
  chew,
  cliExecute,
  cupOf13sTier,
  eatsilent,
  equip,
  Familiar,
  fullnessLimit,
  getCampground,
  getClanLounge,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  handlingChoice,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  Item,
  itemDropsArray,
  lastChoice,
  Location,
  mallPrice,
  maximize,
  Monster,
  myAdventures,
  myClass,
  myDaycount,
  myFullness,
  myHp,
  myInebriety,
  myLevel,
  myMaxhp,
  myMp,
  myPrimestat,
  mySpleenUse,
  print,
  restoreHp,
  restoreMp,
  retrieveItem,
  runChoice,
  Skill,
  spleenLimit,
  storageAmount,
  takeStorage,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $monsters,
  $phylum,
  $skill,
  $skills,
  $stat,
  AprilingBandHelmet,
  AsdonMartin,
  CombatLoversLocket,
  CupOfThirteens,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  maxBy,
  PocketProfessor,
  set,
  Snapper,
  sum,
  uneffect,
} from "libram";

import { args } from "../args";
import { Task } from "../structure";

import {
  cheapestItem,
  getGarden,
  getNextFreeKill,
  maxBase,
  pantogram,
  pantogramReady,
  stooperDrunk,
  totallyDrunk,
} from "./utils";

function famCheck(fam: Familiar): boolean {
  return have(fam) && fam.experience < 400;
}

const bestFam = (): Familiar =>
  [
    $familiar`Cooler Yeti`,
    $familiar`Pocket Professor`,
    $familiar`Chest Mimic`,
    $familiar`Grey Goose`,
  ].find(famCheck) ?? $familiar`Grey Goose`;

const bestSeaFam =
  get("screechCombats") > 0 ? $familiar`Patriotic Eagle` : $familiar`Red-Nosed Snapper`;

const doSmol = args.smol ? true : false;

export function postRunQuests(): Task[] {
  return [
    {
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
      do: () => cliExecute(`/whitelist ${args.clan}`),
    },
    {
      name: "Set Garbo Pref",
      completed: () => get("_garbo_beSelfish", false),
      do: () => set("_garbo_beSelfish", true),
    },
    {
      name: "Breakfast",
      completed: () => get("breakfastCompleted"),
      do: () => cliExecute("breakfast"),
      tracking: "Breakfast",
    },
    {
      name: "Radio",
      ready: () => have($item`Allied Radio Backpack`) && get("_alliedRadioDropsUsed", 0) < 3,
      completed: () => get("_alliedRadioDropsUsed", 0) >= 3,
      do: () => {
        const visitRadio = () => visitUrl(`inventory.php?action=requestdrop&pwd`);
        visitRadio();
        if (!handlingChoice() || lastChoice() !== 1563) visitRadio();
        runChoice(1, `request=radio`);
      },
      limit: { tries: 3 },
    },
    {
      name: "Harvest Garden",
      completed: () =>
        getGarden() === $item`none` ||
        getGarden() === $item`packet of mushroom spores` ||
        getCampground()[getGarden().name] === 0,
      do: () => cliExecute("garden pick"),
      tracking: "Dailies",
      limit: { tries: 3 },
    },
    {
      name: "Apriling",
      ready: () => AprilingBandHelmet.canChangeSong(),
      completed: () => have($effect`Apriling Band Celebration Bop`),
      do: (): void => {
        AprilingBandHelmet.conduct($effect`Apriling Band Celebration Bop`);
      },
      limit: { tries: 1 },
    },
    {
      name: "SIT Course",
      ready: () => have($item`S.I.T. Course Completion Certificate`),
      completed: () => get("_sitCourseCompleted", false),
      choices: {
        1494: 2,
      },
      do: () => use($item`S.I.T. Course Completion Certificate`),
    },
    {
      name: "Restore HP",
      completed: () => myHp() > 0.5 * myMaxhp(),
      do: () => restoreHp(0.95 * myMaxhp()),
      tracking: "Other",
    },
    {
      name: "Implement Glitch",
      ready: () => have($item`[glitch season reward name]`),
      completed: () => get("_glitchItemImplemented"),
      do: () => use($item`[glitch season reward name]`),
    },
    {
      name: "Unlock Guild",
      ready: () =>
        myClass() === $class`Seal Clubber` &&
        Math.min(
          ...$items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) =>
            availableAmount(it),
          ),
        ) < 20 &&
        doSmol,
      completed: () => guildStoreAvailable() || myAdventures() === 0 || stooperDrunk(),
      do: () => cliExecute("guild"),
      choices: {
        //sleazy back alley
        108: 4, //craps: skip
        109: 1, //drunken hobo: fight
        110: 4, //entertainer: skip
        112: 2, //harold's hammer: skip
        21: 2, //under the knife: skip
        //haunted pantry
        115: 1, //drunken hobo: fight
        116: 4, //singing tree: skip
        117: 1, //knob goblin chef: fight
        114: 2, //birthday cake: skip
        //outskirts of cobb's knob
        113: 2, //knob goblin chef: fight
        111: 3, //chain gang: fight
        118: 2, //medicine quest: skip
      },
      outfit: () => ({
        familiar: bestFam(),
        modifier: `${maxBase()}, ${
          myPrimestat() === $stat`Muscle` ? "100 combat rate 20 max" : "-100 combat rate"
        }, 250 bonus carnivorous potted plant`,
      }),
      combat: new CombatStrategy()
        .macro(
          () =>
            Macro.step("pickpocket")
              .externalIf(
                have($skill`Curse of Weaksauce`),
                Macro.trySkill($skill`Curse of Weaksauce`),
                Macro.tryItem($item`electronics kit`),
              )
              .tryItem($item`porquoise-handled sixgun`)
              .trySkill($skill`Sing Along`)
              .attack()
              .repeat(),
          getTodaysHolidayWanderers(),
        )
        .macro(() =>
          Macro.step("pickpocket")
            .trySkill($skill`Sing Along`)
            .tryItem($item`porquoise-handled sixgun`)
            .attack()
            .repeat(),
        ),
      tracking: "Other",
    },
    {
      name: "Stock Up on MMJs",
      ready: () =>
        guildStoreAvailable() &&
        (myClass().primestat === $stat`Mysticality` ||
          (myClass() === $class`Accordion Thief` && myLevel() >= 9)),
      completed: () => availableAmount($item`magical mystery juice`) >= 500,
      acquire: [
        {
          item: $item`magical mystery juice`,
          num: 500,
        },
      ],
      do: () => false,
      tracking: "Other",
    },
    {
      name: "Buy Seal Summoning Supplies",
      ready: () => myClass() === $class`Seal Clubber` && guildStoreAvailable(),
      completed: () =>
        Math.min(
          ...$items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) =>
            availableAmount(it),
          ),
        ) >= 40,
      acquire: $items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) => ({
        item: it,
        num: 500,
      })),
      do: () => false,
      tracking: "Other",
    },
    {
      name: "Wardrobe-o-matic",
      ready: () => myLevel() >= 15 && have($item`wardrobe-o-matic`),
      completed: () => get("_wardrobeUsed", false),
      do: (): void => {
        use($item`wardrobe-o-matic`);
        cliExecute("set _wardrobeUsed = true");
      },
      limit: { tries: 1 },
    },
  ];
}

let duffo = false;
const loungeItems = getClanLounge();
const hasClanFloundry = loungeItems["Clan Floundry"] === 1;
const hasCarpe = loungeItems["carpe"] !== undefined && loungeItems["carpe"] >= 1;

export function preRunQuests(): Task[] {
  return [
    {
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
      do: () => cliExecute(`/whitelist ${args.clan}`),
      choices: {
        1507: 1,
      },
    },
    {
      name: "Get Floundry item",
      ready: () => have($item`Clan VIP Lounge key`) && !args.carpe && hasClanFloundry && hasCarpe,
      completed: () => get("_floundryItemCreated"),
      do: (): void => {
        if (getClanLounge()) retrieveItem($item`carpe`);
      },
      limit: { tries: 1 },
    },
    {
      name: "Unpack Duffel Bag",
      completed: () => duffo,
      do: () => {
        visitUrl("inventory.php?action=skiduffel&pwd");
        duffo = true;
      },
    },
    {
      name: "Pantogramming",
      ready: () => pantogramReady() && args.casual,
      completed: () => pantogram(),
      do: () => pantogram(),
      tracking: "Farming Prep",
    },
    {
      name: "Trip Scrip",
      ready: () => args.ih8u || args.smol || args.robot,
      completed: () =>
        get("_roninStoragePulls").includes(`${$item`Shore Inc. Ship Trip Scrip`.id}`) ||
        storageAmount($item`Shore Inc. Ship Trip Scrip`) === 0,
      do: () => takeStorage($item`Shore Inc. Ship Trip Scrip`, 1),
      tracking: "Farming Prep",
    },
    {
      name: "LGR Seed",
      ready: () =>
        have($item`lucky gold ring`) &&
        have($item`one-day ticket to Dinseylandfill`) &&
        !args.garboascend.includes("penguin") &&
        !(args.cs || args.zooto),
      completed: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
      do: () => use($item`one-day ticket to Dinseylandfill`),
      tracking: "Farming Prep",
    },
    {
      name: "Break Stone",
      ready: () => !args.safepvp,
      completed: () => hippyStoneBroken() || !args.pvp,
      do: (): void => {
        visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
        visitUrl("peevpee.php?place=fight");
      },
    },
  ];
}

export function noBarf(): Task[] {
  return [
    {
      name: "CONSUME ALL",
      ready: () => holiday().includes("Halloween") || args.crimbo || args.chrono,
      completed: () =>
        myFullness() >= fullnessLimit() &&
        mySpleenUse() >= spleenLimit() &&
        myInebriety() >= inebrietyLimit(),
      do: () => cliExecute("CONSUME ALL"),
      tracking: "Organs",
    },
    {
      name: "PProf Penguin Chain",
      ready: () =>
        ((args.garbo.includes("penguin") &&
          args.garbo.includes(`target="black crayon penguin"`) &&
          myDaycount() === 0) ||
          (args.garboascend.includes("penguin") &&
            args.garboascend.includes(`target="black crayon penguin"`) &&
            myDaycount() > 0)) &&
        CombatLoversLocket.canReminisce($monster`Black Crayon Flower`) &&
        PocketProfessor.have() &&
        PocketProfessor.lecturesDelivered() < 3,
      prepare: () => {
        if (!have($item`Pocket Professor memory chip`)) {
          retrieveItem(1, $item`Pocket Professor memory chip`);
        }

        useFamiliar($familiar`Pocket Professor`);
        maximize(
          `10 familiar weight, -tie, 5.25 Meat Drop, -"equip Amulet of Perpetual Darkness", -"equip Buddy Bjorn", -"equip Roman Candelabra", -"equip Spooky Putty ball", -"equip Spooky Putty leotard", -"equip Spooky Putty mitre", -"equip Spooky Putty snake", -"equip broken champagne bottle", -"equip cheap sunglasses", -"equip dice-shaped backpack", -"equip papier-masque", -"equip papier-mitre", -"equip smoke ball", -"equip stinky fannypack", 100 "bonus pantogram pants", 124.26 "bonus June cleaver", 135 "bonus Crown of Thrones", 180 "bonus Mr. Screege's spectacles", 222.92 "bonus mafia thumb ring", 253.61 "bonus can of mixed everything", 284 "bonus lucky gold ring", 6.25 "bonus Powerful Glove", 700 "bonus mafia pointer finger ring"`,
          false,
        );
        $skills`Empathy of the Newt, Leash of Linguini`.forEach((sk) => useSkill(sk));
        $items`Pocket Professor memory chip, tearaway pants`.forEach((it) => equip(it));
      },
      completed: () => PocketProfessor.currentlyAvailableLectures() === 0,
      do: () => CombatLoversLocket.reminisce($monster`Black Crayon Flower`, ""),
      combat: new CombatStrategy().macro(
        Macro.externalIf(
          PocketProfessor.currentlyAvailableLectures() > 0,
          Macro.trySkill($skill`lecture on relativity`)
            .trySkill($skill`Sing Along`)
            .trySkill($skill`Bowl Straight Up`)
            .trySkill($skill`Tear Away your Pants!`)
            .trySkillRepeat($skill`Saucestorm`),
          Macro.trySkill($skill`Sing Along`)
            .trySkill($skill`Bowl Straight Up`)
            .trySkill($skill`Tear Away your Pants!`)
            .trySkillRepeat($skill`Saucestorm`),
        ),
      ),
      tracking: "Garbo",
    },
    {
      name: "Pantogramming",
      ready: () => pantogramReady(),
      completed: () => pantogram(),
      do: () => pantogram(),
      tracking: "Farming Prep",
    },
    {
      name: "Garbo Nobarf",
      ready: () => holiday().includes("Halloween") || args.crimbo || args.chrono,
      completed: () => myInebriety() > inebrietyLimit() || get("_monsterHabitatsRecalled") >= 3,
      do: (): void => {
        cliExecute(`garbo nodiet nobarf target="sausage goblin"`);
      },
      tracking: "Garbo",
    },
  ];
}

export function garboWeen(): Task[] {
  return [
    {
      name: "Freecandy time",
      ready: () => holiday().includes("Halloween"),
      completed: () => myAdventures() / 5 < 1,
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        if (have($familiar`Trick-or-Treating Tot`)) cliExecute("familiar Trick-or-Treating Tot");
        else if (have($familiar`Red-Nosed Snapper`)) cliExecute("familiar snapper");
        cliExecute(`freecandy ${myAdventures()}`);
      },
      clear: "all",
      tracking: "Freecandy",
      limit: { tries: 1 }, //this will run again after installing CMC, by magic
    },
    {
      name: "Super Nightcap",
      ready: () => have($item`Drunkula's wineglass`) && holiday().includes("Halloween"),
      completed: () => totallyDrunk(),
      do: () => cliExecute(`CONSUME NIGHTCAP`),
      tracking: "Organs",
    },
    {
      name: "Freecandy Drunk",
      ready: () => holiday().includes("Halloween"),
      completed: () => Math.floor(myAdventures() / 5) === 0,
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        useFamiliar($familiar`Red-Nosed Snapper`);
        cliExecute(`freeCandy ${myAdventures()}`);
      },
      clear: "all",
      tracking: "Freecandy",
      limit: { tries: 1 }, //this will run again after installing CMC, by magic
    },
  ];
}

export function chrono(): Task[] {
  return [
    {
      name: "Chrono",
      ready: () => args.chrono && canAdventure($location`The Primordial Stew`),
      completed: () => myAdventures() === 0 && myInebriety() >= inebrietyLimit(),
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        cliExecute(`${args.chronoscript}`);
      },
      clear: "all",
      tracking: "Chrono",
      limit: { tries: 1 }, //this will run again after installing CMC, by magic
    },
    {
      name: "Super Nightcap",
      ready: () =>
        have($item`Drunkula's wineglass`) &&
        args.chrono &&
        canAdventure($location`The Primordial Stew`) &&
        myDaycount() > 1,
      completed: () => totallyDrunk(),
      do: () => cliExecute(`CONSUME NIGHTCAP`),
      tracking: "Organs",
    },
    {
      name: "Chrono Drunk",
      ready: () => args.chrono && canAdventure($location`The Primordial Stew`) && myDaycount() > 1,
      completed: () => myAdventures() === 0,
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        cliExecute(`${args.chronoscript}`);
      },
      clear: "all",
      tracking: "Chrono",
      limit: { tries: 1 }, //this will run again after installing CMC, by magic
    },
  ];
}

export function crimbo(): Task[] {
  return [
    {
      name: "Crimbo Time",
      ready: () => args.crimbo,
      completed: () => {
        if (myDaycount() === 1) return myAdventures() === 0 || myInebriety() > inebrietyLimit();
        else return myAdventures() === 0;
      },
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        cliExecute(`${args.crimboscript}`);
      },
      clear: "all",
      tracking: "Crimbo",
      limit: { tries: 1 },
    },
    {
      name: "Super Nightcap",
      ready: () => have($item`Drunkula's wineglass`) && args.crimbo && myDaycount() > 1,
      completed: () => totallyDrunk(),
      do: () => cliExecute(`CONSUME NIGHTCAP`),
      tracking: "Organs",
    },
    {
      name: "Crimbo Drunk",
      ready: () => args.crimbo && myDaycount() > 1,
      completed: () => myAdventures() === 0 || myDaycount() === 1,
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        cliExecute(`${args.crimboscript}`);
      },
      clear: "all",
      tracking: "Crimbo",
      limit: { tries: 1 },
    },
  ];
}

export function cupOf13sDrink(): Task[] {
  return [
    {
      name: "Drink Cup of 13s",
      ready: () => get("_cupOf13sJewels", 0) >= 13 && myInebriety() < inebrietyLimit() && args.cs,
      completed: () => get("_cupOf13sJewels", 0) < 13,
      do: () => {
        const combination = cheapestCupOf13sCombination();
        if (combination === null) {
          throw "Cup of 13s died";
        }
        const item1 = combination[0];
        const item2 = combination[1];
        const item3 = combination[2];

        print(`Using items ${item1}, ${item2}, and ${item3} for cup of 13s`);

        combination.forEach((i) => retrieveItem(i, 2));
        CupOfThirteens.drink(item1, item2, item3);
      },
    },
  ];
}

export function sWordSetup(): Task[] {
  if (!CombatLoversLocket.have() || !CombatLoversLocket.reminiscesLeft()) {
    return [];
  } else
    return [
      {
        name: "Set up S Word",
        ready: () => have($familiar`Sword of S Words`),
        completed: () => get("swordOfSWordsMonster", Monster.none) === getSWordMonster(),
        do: () => CombatLoversLocket.reminisce(getSWordMonster()),
        outfit: () => {
          return {
            pants: $item`Greatest American Pants`,
            familiar: $familiar`Sword of S Words`,
          };
        },
        combat: new CombatStrategy().macro(
          Macro.trySkill($skill`%fn, kill a lot of these guys`).runaway(),
        ),
      },
    ];
}

function getSWordMonster(): Monster {
  // eslint-disable-next-line libram/verify-constants
  const goodMonsters = $monsters`giant flamingo statue, Sloppy Seconds Burger, strong wind`;

  return maxBy(goodMonsters, (monster) =>
    sum(itemDropsArray(monster), ({ drop, rate }) => (rate / 100) * mallPrice(drop)),
  );
}

export function sealClubberFishySetup(): Task[] {
  if (myClass() !== $class`Seal Clubber`) return [];
  else
    return [
      {
        name: "Set up Screech",
        ready: () =>
          get("screechCombats") <= 0 &&
          !get("banishedPhyla").includes("fish") &&
          get("beGregariousFightsLeft") <= 0,
        completed: () => get("banishedPhyla").includes("fish"),
        do: () => $location`The Briniest Deepests`,
        outfit: () => {
          return {
            modifier: "cold res",
          };
        },
        combat: new CombatStrategy().macro(
          Macro.trySkill($skill`%fn, Release the Patriotic Screech!`)
            .trySkillRepeat(combatSkill())
            .repeat(),
        ),
      },
      {
        name: "Set up Greg",
        ready: () => mySpleenUse() < spleenLimit() - 2,
        prepare: () => {
          retrieveItem($item`Extrovermectin™`);
          chew($item`Extrovermectin™`);
        },
        completed: () =>
          have($effect`Fishy`, 300) ||
          mySpleenUse() >= spleenLimit() ||
          get("beGregariousFightsLeft") > 0,
        do: () => CombatLoversLocket.reminisce($monster`cockroach`),
        combat: new CombatStrategy().macro(
          Macro.trySkill($skill`Be Gregarious`)
            .trySkillRepeat(combatSkill())
            .repeat(),
        ),
      },
    ];
}

export function fixScreech(): Task[] {
  return [
    {
      name: "Fix screech",
      ready: () =>
        (get("banishedPhyla").includes("construct") || get("banishedPhyla").includes("fish")) &&
        get("screechCombats") <= 0 &&
        args.sea,
      completed: () =>
        !get("banishedPhyla").includes("construct") && !get("banishedPhyla").includes("fish"),
      do: $location`Pandamonium Slums`,
      outfit: {
        familiar: $familiar`Patriotic Eagle`,
        pants: $item`Greatest American Pants`,
      },
      combat: new CombatStrategy().macro(
        Macro.trySkill($skill`%fn, Release the Patriotic Screech!`).runaway(),
      ),
    },
  ];
}

export function pompeii(): Task[] {
  return [
    {
      name: "Pompeii (bastille)",
      ready: () => !get("_pompeiiRun", false),
      completed: () => get("_pompeiiRun", false),
      do: () => {
        cliExecute("pompeii");
        set("_pompeiiRun", true);
      },
    },
  ];
}

export function pregamePasta(): Task[] {
  return [
    {
      name: "Pregame Legendary Pasta",
      ready: () => getWorkshed() === $item`portable Mayo Clinic`,
      completed: () => true,
      do: () => {
        // eslint-disable-next-line libram/verify-constants
        const legendaryPasta = $items`Pesto alla Marziano, Arrattabbattabiata, Frutti di Scatoletta, Orzo di Riso, Pasta Grimavera, Linguini Ubriacapa, Gnocci Domani, Formica e Pepe, Tubetto Gelatto`;
        const cheapestPasta = cheapestItem(legendaryPasta);
        const deepDish = $item`Deep Dish of Legend`;
        retrieveItem($item`Mayoflex`);
        use($item`Mayoflex`);
        retrieveItem(cheapestPasta);
        eatsilent(cheapestPasta, 1);
        runChoice(5);
        retrieveItem($item`Mayozapine`);
        use($item`Mayozapine`);
        retrieveItem(deepDish);
        eatsilent(deepDish);
      },
    },
  ];
}

export function seaPearls(): Task[] {
  return SEA_PEARL_ZONES.map((zone) => ({
    name: zone.name,
    ready: () =>
      canSeaPearl() &&
      !get(zone.prop) &&
      myAdventures() >= 10 - get(`${zone.prop}Progress`, 0) / 10,
    completed: () => get(zone.prop, false),
    prepare: () => seaPearlPrepare(),
    do: () => zone.location,
    outfit: () => getSeaPearlOutfit(zone.modifier),
    combat: new CombatStrategy().macro(buildSeaPearlMacro()),
    clear: "all",
    tracking: "Sea Pearl",
    limit: { turns: 10 },
  }));
}

function canSeaPearl(): boolean {
  return (
    get("isMerkinGladiatorChampion") &&
    (mallPrice($item`unblemished pearl`) / 10 >= get("valueOfAdventure") ||
      myInebriety() > inebrietyLimit() + 1)
  );
}

function seaPearlPrepare(): void {
  const goodphylum = $phylum`fish`;
  if (Snapper.getTrackedPhylum() !== goodphylum) {
    Snapper.trackPhylum(goodphylum);
  }
  if (mallPrice($item`shadow brick`) < get("valueOfAdventure")) {
    retrieveItem($item`shadow brick`, 13);
  }
  if (!have($effect`Fishy`) && mallPrice($item`cuppa Gill tea`) < get("valueOfAdventure") * 30) {
    retrieveItem($item`cuppa Gill tea`);
    use($item`cuppa Gill tea`);
  }
  if (AsdonMartin.installed() && !have($effect`Driving Waterproofly`)) {
    AsdonMartin.drive(AsdonMartin.Driving.Waterproofly);
  }
  if (!have($effect`Feeling Peaceful`) && get("_feelPeacefulUsed") < 3) {
    useSkill($skill`Feel Peaceful`);
  }
  if (!have($effect`Astral Shell`)) {
    useSkill($skill`Astral Shell`);
  }
  if (!have($effect`Elemental Saucesphere`)) {
    useSkill($skill`Elemental Saucesphere`);
  }
  if (have($effect`The Colors...`)) {
    uneffect($effect`The Colors...`);
  }
  if (myHp() < 1000 && myMaxhp() > 1000) {
    restoreHp(1000);
  }
  if (myMp() < 50) {
    restoreMp(50);
  }
}

function combatSkill(): Skill {
  if (myPrimestat() === $stat`Muscle`) {
    return $skill`Lunging Thrust-Smack`;
  } else return $skill`Saucegeyser`;
}

function cheapestCupOf13sCombination(): [Item, Item, Item] | null {
  const items = Item.all().filter(
    (item) =>
      !item.name.includes("Loathing Idol") &&
      cupOf13sTier(item) > 3 &&
      autosellPrice(item) < 250 &&
      mallPrice(item) <= 500,
  );

  let best: [Item, Item, Item] | null = null;
  let bestPrice = Infinity;

  for (let i = 0; i < items.length; i++) {
    const item1 = items[i];
    const tier1 = cupOf13sTier(item1);

    for (let j = i; j < items.length; j++) {
      const item2 = items[j];
      const tier2 = cupOf13sTier(item2);

      for (let k = j; k < items.length; k++) {
        const item3 = items[k];
        const tier3 = cupOf13sTier(item3);

        if (tier1 + tier2 + tier3 !== 13) continue;

        const price = mallPrice(item1) + mallPrice(item2) + mallPrice(item3);

        if (price < bestPrice) {
          bestPrice = price;
          best = [item1, item2, item3];
        }
      }
    }
  }

  return best;
}

function buildSeaPearlMacro(): Macro {
  const macro = Macro.if_(`monsterphylum plant`, Macro.trySkill($skill`Tear Away your Pants!`)).if_(
    `!monsterphylum ${$phylum`fish`}`,
    Macro.trySkill($skill`Sea *dent: Talk to Some Fish`),
  );
  const freeKill = getNextFreeKill();

  if (freeKill) {
    if (freeKill.do instanceof Skill) {
      macro.trySkill(freeKill.do);
    } else if (freeKill.do instanceof Item) {
      macro.tryItem(freeKill.do);
    }
  }

  return macro.trySkillRepeat(combatSkill()).repeat();
}

function getSeaPearlOutfit(elementModifier: string) {
  const needsScuba = !have($effect`Driving Waterproofly`);
  const isUnderwaterFam = bestFam().underwater;

  return {
    familiar: bestSeaFam,
    modifier: elementModifier,
    back: needsScuba ? $item`Elf Guard SCUBA tank` : undefined,
    weapon: myClass() === $class`Seal Clubber` ? $item`Monodent of the Sea` : undefined,
    famequip: !isUnderwaterFam && needsScuba ? $item`das boot` : undefined,
    pants: $item`tearaway pants`,
    ...getNextFreeKill()?.equip, // Dynamically equips the item needed for the available free kill
  };
}

interface SeaPearlZone {
  name: string;
  prop: string;
  location: Location;
  modifier: string;
}

const SEA_PEARL_ZONES: SeaPearlZone[] = [
  {
    name: "Sea Pearl Mine",
    prop: "_unblemishedPearlAnemoneMine",
    location: $location`Anemone Mine`,
    modifier: "spooky res",
  },
  {
    name: "Sea Pearl Bar",
    prop: "_unblemishedPearlDiveBar",
    location: $location`The Dive Bar`,
    modifier: "sleaze res",
  },
  {
    name: "Sea Pearl Reef",
    prop: "_unblemishedPearlMadnessReef",
    location: $location`Madness Reef`,
    modifier: "stench res",
  },
  {
    name: "Sea Pearl Trench",
    prop: "_unblemishedPearlMarinaraTrench",
    location: $location`The Marinara Trench`,
    modifier: "hot res",
  },
  {
    name: "Sea Pearl Deepests",
    prop: "_unblemishedPearlTheBriniestDeepests",
    location: $location`The Briniest Deepests`,
    modifier: "cold res",
  },
];
