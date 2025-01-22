import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  canAdventure,
  cliExecute,
  equip,
  Familiar,
  fullnessLimit,
  getCampground,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  haveEffect,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  mallPrice,
  myAdventures,
  myClass,
  myDaycount,
  myFamiliar,
  myFullness,
  myHp,
  myInebriety,
  myLevel,
  myMaxhp,
  myPrimestat,
  mySpleenUse,
  restoreHp,
  retrieveItem,
  spleenLimit,
  toInt,
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
  $skill,
  $stat,
  AprilingBandHelmet,
  AsdonMartin,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  set,
  uneffect,
} from "libram";

import { args } from "../args";

import { Task } from "./structure";
import { getGarden, maxBase, nextCyberZone, stooperDrunk, totallyDrunk } from "./utils";

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
    },
    {
      name: "CyberRealm: Prepare Familiar",
      ready: () => !get("_familiarPrepped").includes("true"),
      completed: () => myFamiliar() === $familiar`Shorter-Order Cook`,
      do: () => {
        if (have($familiar`Shorter-Order Cook`)) {
          cliExecute("familiar Shorter-Order Cook");
          equip($familiar`Shorter-Order Cook`, $item`blue plate`);
        }
        cliExecute(`familiar ${bestFam().name}`);
        cliExecute("familiar Shorter-Order Cook");
        set("_familiarPrepped", true);
      },
    },
    {
      name: "Restore HP",
      completed: () => myHp() > 0.5 * myMaxhp(),
      do: () => restoreHp(0.95 * myMaxhp()),
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
    },
    {
      name: "Run CyberRealm",
      ready: () => mallPrice($item`1`) > 2_000 && myAdventures() > 60 && myInebriety() < inebrietyLimit(),
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
    },
  ];
}

let duffo = false;

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
      ready: () => have($item`Clan VIP Lounge key`) && !args.carpe,
      completed: () => get("_floundryItemCreated"),
      do: (): void => {
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
      name: "LGR Seed",
      ready: () =>
        have($item`lucky gold ring`) &&
        have($item`one-day ticket to Dinseylandfill`) &&
        !args.garboascend.includes("penguin") &&
        !args.cs,
      completed: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
      do: () => use($item`one-day ticket to Dinseylandfill`),
      tracking: "Garbo",
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

let garboDone = false;

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
    },
    {
      name: "Garbo Nobarf",
      ready: () => holiday().includes("Halloween") || args.crimbo || args.chrono,
      completed: () => garboDone,
      do: (): void => {
        cliExecute(`${args.garboascend} nodiet nobarf target="witchess knight"`);
        garboDone = true;
      },
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
      tracking: "chrono",
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
