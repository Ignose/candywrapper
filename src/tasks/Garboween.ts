import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  cliExecute,
  fullnessLimit,
  getCampground,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  haveEffect,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  itemAmount,
  myAdventures,
  myClass,
  myFullness,
  myHp,
  myInebriety,
  myMaxhp,
  myPrimestat,
  mySpleenUse,
  pvpAttacksLeft,
  restoreHp,
  retrieveItem,
  spleenLimit,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $coinmaster,
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  $phylum,
  $skill,
  AsdonMartin,
  DNALab,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  set,
  uneffect,
} from "libram";

import { args } from "../args";

import { getCurrentLeg, Leg, Quest } from "./structure";
import { bestFam, getGarden, maxBase, noML, stooperDrunk, totallyDrunk } from "./utils";

let garboDone = false;

export function GarboWeenQuest(): Quest {
  return {
    name: "Aftercore",
    ready: () => getCurrentLeg() === 0,
    completed: () => getCurrentLeg() > Leg.Aftercore,
    tasks: [
      {
        name: "Whitelist VIP Clan",
        completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
        do: () => cliExecute(`/whitelist ${args.clan}`),
      },
      {
        name: "LGR Seed",
        ready: () => have($item`lucky gold ring`) && have($item`one-day ticket to Dinseylandfill`),
        completed: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
        do: () => use($item`one-day ticket to Dinseylandfill`),
        tracking: "Garbo",
      },
      {
        name: "Prep Fireworks Shop",
        completed: () => !have($item`Clan VIP Lounge key`) || get("_goorboFireworksPrepped", false),
        do: () => {
          visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
          set("_goorboFireworksPrepped", true);
        },
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
        name: "Plant Grass",
        completed: () =>
          !have($item`packet of tall grass seeds`) ||
          getGarden() === $item`packet of tall grass seeds`,
        do: () => use($item`packet of tall grass seeds`),
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
        name: "Sample Constellation DNA",
        ready: () => have($item`DNA extraction syringe`),
        completed: () =>
          !DNALab.installed() ||
          DNALab.isHybridized($phylum`Constellation`) ||
          get("dnaSyringe") === $phylum`Constellation`,
        outfit: {
          familiar: bestFam(),
          modifier: `${maxBase()}`,
        },
        do: $location`The Hole in the Sky`,
        combat: new CombatStrategy()
          .macro(Macro.skill($skill`Curse of Weaksauce`), getTodaysHolidayWanderers())
          .macro(Macro.tryItem($item`DNA extraction syringe`))
          .macro(
            Macro.tryItem($item`train whistle`)
              .tryItem($item`porquoise-handled sixgun`)
              .trySkill($skill`Sing Along`)
              .attack()
              .repeat(),
          ),
      },
      {
        name: "Hybridize Constellation",
        ready: () => get("dnaSyringe") === $phylum`Constellation`,
        completed: () => !DNALab.installed() || DNALab.isHybridized($phylum`Constellation`),
        do: () => {
          DNALab.makeTonic(3);
          DNALab.hybridize();
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
        name: "Fight Glitch",
        ready: () => have($item`[glitch season reward name]`),
        completed: () => get("_glitchMonsterFights") > 0,
        acquire: $items`gas can, gas balloon, shard of double-ice`.map((it) => ({
          item: it,
          price: 1000,
        })),
        prepare: () => {
          restoreHp(0.9 * myMaxhp());
          if (have($skill`Blood Bubble`) && !have($effect`Blood Bubble`))
            useSkill($skill`Blood Bubble`);
        },
        do: () => visitUrl("inv_eat.php?pwd&whichitem=10207"),
        post: () => {
          if (!get("_lastCombatWon"))
            throw new Error("Lost Combat - Check to see what went wrong.");
        },
        outfit: () => ({
          familiar: bestFam(),
          modifier: `${myPrimestat()} experience, 5 ${myPrimestat()} experience percent, ${noML()}`,
        }),
        combat: new CombatStrategy().macro(() =>
          Macro.tryItem($item`gas balloon`)
            .trySkill($skill`Feel Pride`)
            .tryItem(...$items`shard of double-ice, gas can`)
            .attack()
            .repeat(),
        ),
        tracking: "Leveling",
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
        name: "CONSUME ALL",
        completed: () =>
          myFullness() >= fullnessLimit() &&
          mySpleenUse() >= spleenLimit() &&
          myInebriety() >= inebrietyLimit(),
        do: () => cliExecute("consume ALL"),
      },
      {
        name: "Garbo Nobarf",
        completed: () => garboDone,
        do: (): void => {
          cliExecute(`${args.garboascend} nodiet nobarf target="witchess knight"`);
          garboDone = true;
        },
      },
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
        name: "Do Pizza",
        completed: () =>
          have($item`Pizza of Legend`) &&
          have($item`Deep Dish of Legend`) &&
          have($item`Calzone of Legend`),
        do: (): void => {
          !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`) : undefined;
          !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
          !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;
        },
      },
      {
        name: "Stooper",
        ready: () =>
          myInebriety() === inebrietyLimit() &&
          have($item`tiny stillsuit`) &&
          get("familiarSweat") >= 300,
        completed: () => !have($familiar`Stooper`) || stooperDrunk(),
        do: () => {
          useFamiliar($familiar`Stooper`);
          cliExecute("drink stillsuit distillate");
        },
      },
      {
        name: "Super Nightcap",
        ready: () => have($item`Drunkula's wineglass`),
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
      {
        name: "Grimace Maps",
        ready: () => have($item`Map to Safety Shelter Grimace Prime`) && totallyDrunk(),
        completed: () => !have($item`Map to Safety Shelter Grimace Prime`) || myAdventures() === 0,
        do: () => cliExecute("grimace maps"),
      },
      {
        name: "Comb Beach",
        ready: () => have($item`Beach Comb`) && totallyDrunk(),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`combo ${11 - get("_freeBeachWalksUsed") + myAdventures()}`),
      },
      {
        name: "Turn in FunFunds",
        ready: () => get("_stenchAirportToday") && itemAmount($item`FunFunds™`) >= 20,
        completed: () => have($item`one-day ticket to Dinseylandfill`),
        do: () =>
          buy($coinmaster`The Dinsey Company Store`, 1, $item`one-day ticket to Dinseylandfill`),
        tracking: "Garbo",
      },
      {
        name: "PvP",
        completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
        do: (): void => {
          cliExecute("unequip");
          cliExecute("UberPvPOptimizer");
          cliExecute(`PVP_MAB target=${args.pvpTarget}`);
        },
      },
    ],
  };
}
