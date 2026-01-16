import { CombatStrategy } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  daycount,
  getWorkshed,
  haveEquipped,
  hippyStoneBroken,
  inebrietyLimit,
  Item,
  itemAmount,
  mallPrice,
  myAdventures,
  myDaycount,
  myInebriety,
  myMaxhp,
  myPrimestat,
  print,
  pvpAttacksLeft,
  restoreHp,
  restoreMp,
  retrieveItem,
  runChoice,
  toBoolean,
  use,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  byStat,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  maxBy,
  TakerSpace,
  TrainSet,
  Tuple,
  uneffect,
} from "libram";
import { Cycle, setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";

import { args } from "../args";
import { garboValue } from "../engine/profits";

import { chrono, crimbo, garboWeen, noBarf, postRunQuests, preRunQuests } from "./repeatableTasks";
import { Quest } from "../structure";
import { maxBase, pvpCloset, stooperDrunk, totallyDrunk } from "./utils";

const RESOURCES = ["Spice", "Rum", "Anchor", "Mast", "Silk", "Gold"] as const;
export type Resource = (typeof RESOURCES)[number];

export type Recipe = Tuple<number, (typeof RESOURCES)["length"]>;
const RECIPES = new Map<Item, Recipe>([
  [$item`deft pirate hook`, [0, 0, 1, 1, 0, 1]],
  [$item`iron tricorn hat`, [0, 0, 2, 1, 0, 0]],
  [$item`jolly roger flag`, [0, 1, 0, 1, 1, 0]],
  [$item`sleeping profane parrot`, [15, 3, 0, 0, 2, 1]],
  [$item`pirrrate's currrse`, [2, 2, 0, 0, 0, 0]],
  [$item`tankard of spiced rum`, [1, 2, 0, 0, 0, 0]],
  [$item`packaged luxury garment`, [0, 0, 0, 0, 3, 2]],
  [$item`harpoon`, [0, 0, 0, 2, 0, 0]],
  [$item`chili powder cutlass`, [5, 0, 1, 0, 0, 0]],
  [$item`cursed Aztec tamale`, [2, 0, 0, 0, 0, 0]],
  [$item`jolly roger tattoo kit`, [0, 6, 1, 1, 0, 6]],
  [$item`golden pet rock`, [0, 0, 0, 0, 0, 7]],
  [$item`groggles`, [0, 6, 0, 0, 0, 0]],
  [$item`pirate dinghy`, [0, 0, 1, 1, 1, 0]],
  [$item`anchor bomb`, [0, 1, 3, 1, 0, 1]],
  [$item`silky pirate drawers`, [0, 0, 0, 0, 2, 0]],
  [$item`spices`, [1, 0, 0, 0, 0, 0]],
]);

/**
 * @returns A copy of our map of all recipes
 */
export function allRecipes(): Map<Item, Recipe> {
  return new Map([...RECIPES.entries()].map(([item, recipe]) => [item, [...recipe]]));
}

export function affordableRecipes(): Item[] {
  const recipes = allRecipes(); // Get all recipes
  print(`Recipes Map: ${recipes}`);

  const result = [...recipes.keys()].filter((item) => TakerSpace.canMake(item));
  print(`Final affordable items array: ${result}`);

  return result;
}

function takerSpaceOptimizer(): boolean {
  let recipes = affordableRecipes();
  print(`Recipes after affordableRecipes: ${recipes}`);

  while (recipes.length > 0) {
    print(`Current recipe list: ${recipes}`);

    // Find the best item to craft based on garboValue
    const bestRecipe = maxBy(recipes, garboValue);
    print(`Best recipe to craft: ${bestRecipe}`);

    // Craft the selected recipe
    TakerSpace.make(bestRecipe);

    // Recompute the list of craftable recipes after crafting
    recipes = affordableRecipes();
  }

  return true;
}

const doSmol = args.smol ? true : false;
const doCS = args.cs ? true : false;

let jobsDone = false;
let skipSoda = false;

const statStation: Station = {
  Muscle: Station.BRAWN_SILO,
  Mysticality: Station.BRAIN_SILO,
  Moxie: Station.GROIN_SILO,
}[myPrimestat().toString()];
const stations = [
  Station.COAL_HOPPER, // double mainstat gain
  statStation, // main stats
  Station.VIEWING_PLATFORM, // all stats
  Station.GAIN_MEAT, // meat
  Station.TOWER_FIZZY, // mp regen
  Station.BRAIN_SILO, // myst stats
  Station.WATER_BRIDGE, // +ML
  Station.CANDY_FACTORY, // candies
] as Cycle;

export function AftercoreQuest(): Quest {
  return {
    name: "Aftercore",
    ready: () => myDaycount() >= 2 && get("kingLiberated"),
    completed: () =>
      (myAdventures() === 0 &&
        totallyDrunk() &&
        have($item`Pizza of Legend`) &&
        have($item`Deep Dish of Legend`) &&
        have($item`Calzone of Legend`)) ||
      myDaycount() === 1,
    tasks: [
      {
        name: "Takerspace",
        ready: () =>
          getWorkshed() === $item`TakerSpace letter of Marque` && !get("_workshedItemUsed"),
        completed: () => getWorkshed() === $item`model train set`,
        do: () => {
          visitUrl("campground.php?action=workshed");
          takerSpaceOptimizer();
          use($item`model train set`);
        },
        tracking: "Workshed",
      },
      {
        name: "PvP Closet Safety 1",
        ready: () => args.pvp && get("autoSatisfyWithCloset") && !args.safepvp,
        completed: () => toBoolean(get("_safetyCloset1")),
        do: () => pvpCloset(1),
      },
      ...preRunQuests(),
      ...postRunQuests(),
      ...noBarf(),
      ...garboWeen(),
      ...crimbo(),
      ...chrono(),
      {
        name: "Garbo",
        completed: () => stooperDrunk() || myAdventures() === 0,
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(`${args.garboascend}`),
        post: () => {
          if (myAdventures() === 0)
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef));
        },
        clear: "all",
        tracking: "Garbo",
        limit: { tries: 1 }, //this will run again after installing CMC, by magic
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
        tracking: "Organs",
      },
      {
        name: "Barfing Drunk with Stooper",
        ready: () =>
          stooperDrunk() && have($familiar`Stooper`) && !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || totallyDrunk() || daycount() === 1,
        acquire: [{ item: $item`seal tooth` }],
        outfit: () => ({
          familiar: $familiar`Stooper`,
          modifier: `${maxBase()}, 2.5 meat, 0.6 items`,
        }),
        effects: $effects`How to Scam Tourists`, //need to add meat buffs that we can cast
        prepare: (): void => {
          restoreHp(0.75 * myMaxhp());
          restoreMp(20);
        },
        do: $location`Barf Mountain`,
        combat: new CombatStrategy()
          .macro(Macro.trySkill($skill`Curse of Weaksauce`), getTodaysHolidayWanderers())
          .macro(() =>
            Macro.step("pickpocket")
              .tryItem($item`train whistle`)
              .trySkill($skill`Bowl Straight Up`)
              .trySkill($skill`Sing Along`)
              .tryItem($item`porquoise-handled sixgun`)
              .externalIf(
                haveEquipped($item`mafia pointer finger ring`),
                Macro.trySkill($skill`Furious Wallop`)
                  .trySkill($skill`Summer Siesta`)
                  .trySkill($skill`Throw Shield`)
                  .trySkill($skill`Precision Shot`),
              )
              .attack()
              .repeat(),
          ),
        limit: { tries: 30 },
        tracking: "Garbo",
      },
      {
        name: "Nightcap (Wine Glass)",
        ready: () => have($item`Drunkula's wineglass`),
        completed: () => totallyDrunk(),
        do: () => {
          if ($familiar`Cooler Yeti`.experience >= 400) {
            useFamiliar($familiar`Cooler Yeti`);
            visitUrl("main.php?talktoyeti=1", false);
            runChoice(2);
            useFamiliar($familiar`Stooper`);
          }
          cliExecute(`CONSUME NIGHTCAP VALUE ${get("valueOfAdventure") - 1000}`);
        },
        tracking: "Organs",
      },
      {
        name: "Nightcap (Marginal)",
        ready: () => have($item`Beach Comb`) || have($item`Map to Safety Shelter Grimace Prime`),
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP VALUE 500`),
        tracking: "Organs",
      },
      {
        name: "Grimace Maps",
        ready: () => !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || !have($item`Map to Safety Shelter Grimace Prime`),
        do: () => cliExecute("grimace maps"),
        limit: { tries: 30 },
        tracking: "Bonus",
      },
      {
        name: "Trip Scrip",
        ready: () => args.ih8u || args.smol || args.casual,
        completed: () =>
          have($item`Shore Inc. Ship Trip Scrip`) || myInebriety() > inebrietyLimit(),
        do: $location`The Shore, Inc. Travel Agency`,
        outfit: () => {
          if (!get("candyCaneSwordShore")) return { equip: $items`candy cane sword cane` };
          else return {};
        },
        choices: () => {
          const swordReady =
            haveEquipped($item`candy cane sword cane`) && !get("candyCaneSwordShore");
          const statChoice = byStat({
            Muscle: 1,
            Mysticality: 2,
            Moxie: 3,
          });
          return { 793: swordReady ? 5 : statChoice };
        },
        limit: { tries: 1 },
        tracking: "Trip Scrip",
      },
      {
        name: "Garbo (Drunk)",
        ready: () => have($item`Drunkula's wineglass`),
        prepare: () => uneffect($effect`Beaten Up`),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`${args.garboascend}`),
        post: () =>
          $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
            .filter((ef) => have(ef))
            .forEach((ef) => uneffect(ef)),
        clear: "all",
        tracking: "Garbo",
      },
      {
        name: "PvP Closet Safety 2",
        ready: () => args.pvp && get("autoSatisfyWithCloset") && !args.safepvp,
        completed: () => toBoolean(get("_safetyCloset3")),
        do: () => pvpCloset(3),
      },
      {
        name: "Comb Beach",
        ready: () => have($item`Beach Comb`),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`combo ${11 - get("_freeBeachWalksUsed") + myAdventures()}`),
        tracking: "Combo",
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
        name: "Break Stone",
        ready: () => args.safepvp,
        completed: () => hippyStoneBroken() || !args.pvp,
        do: (): void => {
          visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
          visitUrl("peevpee.php?place=fight");
        },
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
      {
        name: "Prepare for LoopSmol",
        ready: () => doSmol,
        completed: () =>
          have($item`Pizza of Legend`) &&
          have($item`Frosty's frosty mug`) &&
          have($item`Ol' Scratch's salad fork`),
        do: (): void => {
          if (
            mallPrice($item`Frosty's frosty mug`) < 200000 &&
            mallPrice($item`Ol' Scratch's salad fork`) < 200000
          )
            cliExecute(
              "acquire Pizza of Legend; acquire Frosty's frosty mug; acquire Ol' Scratch's salad fork",
            );
        },
        tracking: "Ascension Prep",
      },
      {
        name: "Marble Soda!",
        ready: () => doCS,
        completed: () => have($item`tobiko marble soda`) || skipSoda,
        do: (): void => {
          if (mallPrice($item`tobiko marble soda`) < get("valueOfAdventure") * 2)
            retrieveItem($item`tobiko marble soda`);
          else {
            print(`Soda is too expensive, mallprice is ${mallPrice($item`tobiko marble soda`)}`);
            skipSoda = true;
          }
        },
        tracking: "Ascension Prep",
      },
      {
        name: "Prepare for LoopCS",
        ready: () => doCS,
        completed: () =>
          have($item`Pizza of Legend`) &&
          have($item`Deep Dish of Legend`) &&
          have($item`Calzone of Legend`),
        do: (): void => {
          !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`) : undefined;
          !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
          !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;
          !have($item`borrowed time`) ? retrieveItem($item`borrowed time`) : undefined;
        },
        tracking: "Ascension Prep",
      },
      {
        name: "Prepare for IH8U",
        ready: () => args.ih8u,
        completed: () =>
          have($item`mini kiwi invisible dirigible`) &&
          have($item`mini kiwi digitized cookies`) &&
          have($item`mini kiwi intoxicating spirits`) &&
          have($item`incredible mini-pizza`),
        do: (): void => {
          retrieveItem($item`mini kiwi invisible dirigible`);
          retrieveItem($item`mini kiwi digitized cookies`);
          retrieveItem($item`mini kiwi intoxicating spirits`);
          retrieveItem($item`incredible mini-pizza`);
        },
        tracking: "Ascension Prep",
      },
      {
        name: "Let's do the trainset again",
        completed: () => TrainSet.cycle().toString === stations.toString,
        do: (): void => {
          const offset = get("trainsetPosition") % 8;
          const newStations: TrainSet.Station[] = [];
          for (let i = 0; i < 8; i++) {
            const newPos = (i + offset) % 8;
            newStations[newPos] = stations[i];
          }
          visitUrl("campground.php?action=workshed");
          visitUrl("main.php");
          setConfiguration(newStations as Cycle);
        },
        limit: { tries: 5 },
      },
      {
        name: "Job's Done",
        completed: () => jobsDone,
        do: (): void => {
          jobsDone = true;
        },
      },
    ],
  };
}
