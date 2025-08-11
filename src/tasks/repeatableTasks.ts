import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  canAdventure,
  cliExecute,
  equip,
  Familiar,
  fullnessLimit,
  getCampground,
  getClanLounge,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  handlingChoice,
  haveEffect,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
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
  myPrimestat,
  mySpleenUse,
  print,
  restoreHp,
  retrieveItem,
  runChoice,
  spleenLimit,
  storageAmount,
  takeStorage,
  toInt,
  toItem,
  toSkill,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
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
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  PocketProfessor,
  set,
  uneffect,
} from "libram";

import { args } from "../args";

import { Task } from "./structure";
import { getGarden, maxBase, nextCyberZone, pantogram, pantogramReady, stooperDrunk, totallyDrunk } from "./utils";
import { buskAt, findOptimalOutfitPower, reconstructOutfit } from "../beret";

const bestFam = () =>
  famCheck($familiar`Pocket Professor`)
    ? $familiar`Pocket Professor`
    : famCheck($familiar`Chest Mimic`)
    ? $familiar`Chest Mimic`
    : famCheck($familiar`Grey Goose`)
    ? $familiar`Grey Goose`
    : $familiar`Grey Goose`;

function famCheck(fam: Familiar): boolean {
  return have(fam) && fam.experience < 400;
}

const doSmol = args.smol ? true : false;

export function postRunQuests(): Task[] {
  return [
    {
      name: "Whitelist VIP Clan",
      completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
      do: () => cliExecute(`/whitelist ${args.clan}`),
    },
    {
      name: "Breakfast",
      completed: () => get("breakfastCompleted"),
      do: () => cliExecute("breakfast"),
      tracking: "Breakfast"
    },
    {
      name: "Radio",
      // eslint-disable-next-line libram/verify-constants
      ready: () => have($item`Allied Radio Backpack`) && get("_alliedRadioDropsUsed", 0) < 3,
      // eslint-disable-next-line libram/verify-constants
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
      name: "Mobius Seed",
      // eslint-disable-next-line libram/verify-constants
      ready: () => have($item`Möbius ring`),
      completed: () => get("_mobiusSeeded", false),
      prepare: () => {
        // eslint-disable-next-line libram/verify-constants
        equip($item`Möbius ring`),
        equip($item`Greatest American Pants`)
      },
      do: () => $location`Noob Cave`,
      combat: new CombatStrategy().macro(Macro.runaway()),
      post: () => set("_mobiusSeeded", true),
      tracking: "Farming Prep"
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
      // eslint-disable-next-line libram/verify-constants
      ready: () => have($item`S.I.T. Course Completion Certificate`),
      completed: () => get("_sitCourseCompleted", false),
      choices: {
        1494: 2,
      },
      do: () =>
        // eslint-disable-next-line libram/verify-constants
        use($item`S.I.T. Course Completion Certificate`),
    },
    {
      name: "Drive Observantly",
      completed: () =>
        get("dailyDungeonDone") ||
        getWorkshed() !== $item`Asdon Martin keyfob (on ring)` ||
        haveEffect($effect`Driving Observantly`) >=
          (totallyDrunk() || !have($item`Drunkula's wineglass`)
            ? myAdventures()
            : myAdventures() + 60),
      do: () =>
        AsdonMartin.drive(
          $effect`Driving Observantly`,
          totallyDrunk() || !have($item`Drunkula's wineglass`)
            ? myAdventures()
            : myAdventures() + 60,
          false,
        ),
      limit: { tries: 5 },
      tracking: "Other"
    },
    {
      name: "Restore HP",
      completed: () => myHp() > 0.5 * myMaxhp(),
      do: () => restoreHp(0.95 * myMaxhp()),
      tracking: "Other"
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
        tracking: "Other"
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
      tracking: "Other"
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
      tracking: "Other"
    },
    {
      name: "Run CyberRealm",
      ready: () => mallPrice($item`1`) > 3_000 && myAdventures() > 60 && myInebriety() < inebrietyLimit(),
      prepare: () => {
        $effects`Astral Shell, Elemental Saucesphere, Scarysauce`.forEach((ef) => {
          if (!have(ef)) useSkill(toSkill(ef));
        });
      },
      completed: () => nextCyberZone() === $location`none`, // $location`Cyberzone 1`.turnsSpent >= 19 * myDaycount(),
      choices: { 1545: 1, 1546: 1, 1547: 1, 1548: 1, 1549: 1, 1550: 1 },
      do: () => nextCyberZone(),
      outfit: {
        hat: $item`Crown of Thrones`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $item`zero-trust tanktop`,
        weapon: $item`June cleaver`,
        offhand: $item`visual packet sniffer`,
        pants: $item`digibritches`,
        acc1: $item`retro floppy disk`,
        acc2: $item`retro floppy disk`,
        acc3: $item`retro floppy disk`,
        famequip: $item`familiar-in-the-middle wrapper`,
        modes: { retrocape: ["vampire", "hold"] },
        riders: { "crown-of-thrones": $familiar`Mini Kiwi` },
      },
      combat: new CombatStrategy().macro(() =>
        Macro.if_(
          "!monsterphylum construct",
          Macro.trySkill($skill`Sing Along`)
            .trySkill($skill`Micrometeorite`)
            .trySkill($skill`Saucestorm`)
            .trySkill($skill`Saucestorm`)
            .trySkill($skill`Saucestorm`)
            .trySkill($skill`Saucestorm`)
            .attack()
            .repeat(),
        )
          .skill($skill`Throw Cyber Rock`)
          .repeat(),
      ),
      limit: { skip: 60 },
      tracking: "Cyber Realm"
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
    {
      name: "Beret? Beret.",
      ready: () => have(toItem(11919)),
      completed: () => get("_beretBuskingUses",0) >= 5,
      do: () => {
        const uselessEffects = $effects`How to Scam Tourists, Empathy`;
        let busk = get("_beretBuskingUses",0);
        print(`Busking starting at ${busk} uses.`)
        for(; busk <5; busk++) {
          const best = findOptimalOutfitPower(
            {
              "Familiar Weight": 10,
            }, busk, uselessEffects, true
          );
          const outfit = reconstructOutfit(best);
          print(`Outfit is: ${outfit?.hat}, ${outfit?.pants}, ${outfit?.shirt}`);
          print(`Busking at ${best} power.`);
          buskAt(best, true);
        }
      },
      limit: { tries: 5 },
    },
    {
      name: "Candy Deviler",
      // eslint-disable-next-line libram/verify-constants
      ready: () => have($item`candy egg deviler`),
      completed: () => toInt(get("_candyEggsDeviled")) >= 3,
      do: () => {
        visitUrl(`inventory.php?action=eggdevil&pwd`);
        visitUrl("choice.php?a=3054&whichchoice=1544&option=1&pwd");
        visitUrl("choice.php?a=3054&whichchoice=1544&option=1&pwd");
        visitUrl("choice.php?a=3054&whichchoice=1544&option=1&pwd");
      },
      tracking: "Garbo"
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
        if(getClanLounge())
        retrieveItem($item`carpe`);
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
      tracking: "Farming Prep"
    },
    {
      name: "Trip Scrip",
      ready: () => args.ih8u || args.smol || args.robot,
      completed: () => get("_roninStoragePulls").includes(`${$item`Shore Inc. Ship Trip Scrip`.id}`) || storageAmount($item`Shore Inc. Ship Trip Scrip`) === 0,
      do: () => takeStorage($item`Shore Inc. Ship Trip Scrip`,1),
      tracking: "Farming Prep"
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

let garboDone1 = false;
let garboDone2 = false;

export function noBarf(): Task[] {
  return [
    {
      name: "CONSUME ALL",
      ready: () => holiday().includes("Halloween") || args.crimbo || args.chrono,
      completed: () =>
        myFullness() >= fullnessLimit() &&
        mySpleenUse() >= spleenLimit() &&
        myInebriety() >= inebrietyLimit(),
      do: () => cliExecute("consume ALL"),
      tracking: "Organs"
    },
    {
      name: "PProf Penguin Chain",
      ready: () => ((args.garbo.includes("penguin") && args.garbo.includes(`target="black crayon penguin"`) && myDaycount() === 0)
        || (args.garboascend.includes("penguin") && args.garboascend.includes(`target="black crayon penguin"`) && myDaycount() > 0)) &&
        CombatLoversLocket.canReminisce($monster`Black Crayon Flower`) &&
        PocketProfessor.have() &&
        PocketProfessor.lecturesDelivered() < 3,
      prepare: () => {
        if (!have($item`Pocket Professor memory chip`)) {
          retrieveItem(1, $item`Pocket Professor memory chip`)
        }

        useFamiliar($familiar`Pocket Professor`);
        maximize(`10 familiar weight, -tie, 5.25 Meat Drop, -"equip Amulet of Perpetual Darkness", -"equip Buddy Bjorn", -"equip Roman Candelabra", -"equip Spooky Putty ball", -"equip Spooky Putty leotard", -"equip Spooky Putty mitre", -"equip Spooky Putty snake", -"equip broken champagne bottle", -"equip cheap sunglasses", -"equip dice-shaped backpack", -"equip papier-masque", -"equip papier-mitre", -"equip smoke ball", -"equip stinky fannypack", 100 "bonus pantogram pants", 124.26 "bonus June cleaver", 135 "bonus Crown of Thrones", 180 "bonus Mr. Screege's spectacles", 222.92 "bonus mafia thumb ring", 253.61 "bonus can of mixed everything", 284 "bonus lucky gold ring", 6.25 "bonus Powerful Glove", 700 "bonus mafia pointer finger ring"`, false);
        $skills`Empathy of the Newt, Leash of Linguini`.forEach((sk) => useSkill(sk));
        $items`Pocket Professor memory chip, tearaway pants`.forEach((it) => equip(it));
      },
      completed: () => PocketProfessor.currentlyAvailableLectures() === 0,
      do: () => CombatLoversLocket.reminisce($monster`Black Crayon Flower`,""),
      combat: new CombatStrategy().macro(
          Macro.externalIf(PocketProfessor.currentlyAvailableLectures() > 0,
            Macro.trySkill($skill`lecture on relativity`)
            .trySkill($skill`Sing Along`)
            .trySkill($skill`Bowl Straight Up`)
            .trySkill($skill`Tear Away your Pants!`)
            .trySkillRepeat($skill`Saucestorm`),
            Macro.trySkill($skill`Sing Along`)
            .trySkill($skill`Bowl Straight Up`)
            .trySkill($skill`Tear Away your Pants!`)
            .trySkillRepeat($skill`Saucestorm`)
          )
        ),
      tracking: "Garbo"
    },
    {
      name: "Pantogramming",
      ready: () => pantogramReady(),
      completed: () => pantogram(),
      do: () => pantogram(),
      tracking: "Farming Prep"
    },
    {
      name: "Garbo Nobarf",
      ready: () => holiday().includes("Halloween") || args.crimbo || args.chrono,
      completed: () => (myDaycount() > 1 && garboDone1) ||
        (myDaycount() === 1 && garboDone2),
      do: (): void => {
        cliExecute(`garbo nodiet nobarf target="witchess knight"`);
        if(myDaycount() > 1) {
          garboDone1 = true;
        } else {
          garboDone2 = true;
        }
      },
      tracking: "Garbo"
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
      tracking: "Organs"
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
      tracking: "Organs"
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
      completed: () => myAdventures() === 0 && myInebriety() >= inebrietyLimit(),
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        cliExecute(`${args.crimboscript}`);
      },
      clear: "all",
      tracking: "Crimbo",
      limit: { tries: 1 }, //this will run again after installing CMC, by magic
    },
    {
      name: "Super Nightcap",
      ready: () =>
        have($item`Drunkula's wineglass`) && holiday().includes("Halloween") && myDaycount() > 1,
      completed: () => totallyDrunk(),
      do: () => cliExecute(`CONSUME NIGHTCAP`),
      tracking: "Organs"
    },
    {
      name: "Crimbo Drunk",
      ready: () => args.crimbo && myDaycount() > 1,
      completed: () => myAdventures() === 0,
      prepare: () => uneffect($effect`Beaten Up`),
      do: (): void => {
        cliExecute(`${args.crimboscript}`);
      },
      clear: "all",
      tracking: "Crimbo",
      limit: { tries: 1 }, //this will run again after installing CMC, by magic
    },
  ];
}
