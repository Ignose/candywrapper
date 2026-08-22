import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  canAdventure,
  cliExecute,
  cupOf13sTier,
  equip,
  Familiar,
  fullnessLimit,
  getCampground,
  getClanLounge,
  getClanName,
  guildStoreAvailable,
  handlingChoice,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  Item,
  lastChoice,
  mallPrice,
  maximize,
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
  PocketProfessor,
  set,
  uneffect,
} from "libram";

import { args } from "../args";
import { Task } from "../structure";

import { getGarden, maxBase, pantogram, pantogramReady, stooperDrunk, totallyDrunk } from "./utils";

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
      ready: () =>
        have($item`Drunkula's wineglass`) && holiday().includes("Halloween") && myDaycount() > 1,
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
      ready: () => get("_cupOf13sJewels", 0) >= 13 && myInebriety() < inebrietyLimit(),
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

export function seaPearls(): Task[] {
  return [
    {
      name: "Sea Pearl Mine",
      ready: () =>
        canSeaPearl() &&
        !get("_unblemishedPearlAnemoneMine") &&
        myAdventures() >= 10 - get("_unblemishedPearlAnemoneMineProgress") / 10,
      completed: () => get("_unblemishedPearlAnemoneMine"),
      prepare: () => seaPearlPrepare(),
      do: () => $location`Anemone Mine`,
      outfit: () => ({
        familiar: bestFam(),
        modifier: `spooky res`,
        back: have($effect`Driving Waterproofly`) ? undefined : $item`Elf Guard SCUBA tank`,
        famequip: bestFam().underwater
          ? undefined
          : have($effect`Driving Waterproofly`)
          ? undefined
          : $item`das boot`,
      }),
      combat: new CombatStrategy().macro(
        Macro.trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .repeat(),
      ),
      clear: "all",
      tracking: "Sea Pearl",
      limit: { turns: 10 },
    },
    {
      name: "Sea Pearl Bar",
      ready: () =>
        canSeaPearl() &&
        !get("_unblemishedPearlDiveBar") &&
        myAdventures() >= 10 - get("_unblemishedPearlDiveBarProgress") / 10,
      completed: () => get("_unblemishedPearlDiveBar"),
      prepare: () => seaPearlPrepare(),
      do: () => $location`The Dive Bar`,
      outfit: () => ({
        familiar: bestFam(),
        modifier: `sleaze res`,
        back: have($effect`Driving Waterproofly`) ? undefined : $item`Elf Guard SCUBA tank`,
        famequip: bestFam().underwater
          ? undefined
          : have($effect`Driving Waterproofly`)
          ? undefined
          : $item`das boot`,
      }),
      combat: new CombatStrategy().macro(
        Macro.trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .repeat(),
      ),
      clear: "all",
      tracking: "Sea Pearl",
      limit: { turns: 10 },
    },
    {
      name: "Sea Pearl Reef",
      ready: () =>
        canSeaPearl() &&
        !get("_unblemishedPearlMadnessReef") &&
        myAdventures() >= 10 - get("_unblemishedPearlMadnessReefProgress") / 10,
      completed: () => get("_unblemishedPearlMadnessReef"),
      prepare: () => seaPearlPrepare(),
      do: () => $location`Madness Reef`,
      outfit: () => ({
        familiar: bestFam(),
        modifier: `stench res`,
        back: have($effect`Driving Waterproofly`) ? undefined : $item`Elf Guard SCUBA tank`,
        famequip: bestFam().underwater
          ? undefined
          : have($effect`Driving Waterproofly`)
          ? undefined
          : $item`das boot`,
      }),
      combat: new CombatStrategy().macro(
        Macro.trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .repeat(),
      ),
      clear: "all",
      tracking: "Sea Pearl",
      limit: { turns: 10 },
    },
    {
      name: "Sea Pearl Trench",
      ready: () =>
        canSeaPearl() &&
        !get("_unblemishedPearlMarinaraTrench") &&
        myAdventures() >= 10 - get("_unblemishedPearlMarinaraTrenchProgress") / 10,
      completed: () => get("_unblemishedPearlMarinaraTrench"),
      prepare: () => seaPearlPrepare(),
      do: () => $location`The Marinara Trench`,
      outfit: () => ({
        familiar: bestFam(),
        modifier: `hot res`,
        back: have($effect`Driving Waterproofly`) ? undefined : $item`Elf Guard SCUBA tank`,
        famequip: bestFam().underwater
          ? undefined
          : have($effect`Driving Waterproofly`)
          ? undefined
          : $item`das boot`,
      }),
      combat: new CombatStrategy().macro(
        Macro.trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .repeat(),
      ),
      clear: "all",
      tracking: "Sea Pearl",
      limit: { turns: 10 },
    },
    {
      name: "Sea Pearl Deepests",
      ready: () =>
        canSeaPearl() &&
        !get("_unblemishedPearlTheBriniestDeepests") &&
        myAdventures() >= 10 - get("_unblemishedPearlTheBriniestDeepestsProgress") / 10,
      completed: () => get("_unblemishedPearlTheBriniestDeepests"),
      prepare: () => seaPearlPrepare(),
      do: () => $location`The Briniest Deepests`,
      outfit: () => ({
        familiar: bestFam(),
        modifier: `cold res`,
        back: have($effect`Driving Waterproofly`) ? undefined : $item`Elf Guard SCUBA tank`,
        famequip: bestFam().underwater
          ? undefined
          : have($effect`Driving Waterproofly`)
          ? undefined
          : $item`das boot`,
      }),
      combat: new CombatStrategy().macro(
        Macro.trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .trySkill(combatSkill())
          .repeat(),
      ),
      clear: "all",
      tracking: "Sea Pearl",
      limit: { turns: 10 },
    },
  ];
}

function canSeaPearl(): boolean {
  return (
    get("isMerkinGladiatorChampion") &&
    mallPrice($item`unblemished pearl`) / 10 >= get("valueOfAdventure")
  );
}

function seaPearlPrepare(): void {
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
  const items = Item.all().filter((item) => cupOf13sTier(item) > 2 && mallPrice(item) <= 500);

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
