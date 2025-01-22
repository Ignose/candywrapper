import { CombatStrategy } from "grimoire-kolmafia";
import {
  buy,
  cliExecute,
  haveEquipped,
  hippyStoneBroken,
  inebrietyLimit,
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
  toBoolean,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $location,
  $skill,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  TrainSet,
  uneffect,
} from "libram";
import { Cycle, setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";

import { args } from "../args";

import { chrono, crimbo, garboWeen, noBarf, postRunQuests, preRunQuests } from "./repeatableTasks";
import { Quest } from "./structure";
import { maxBase, pingu, pvpCloset, stooperDrunk, totallyDrunk } from "./utils";

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
    completed: () =>
      (myAdventures() === 0 &&
        totallyDrunk() &&
        have($item`Pizza of Legend`) &&
        have($item`Deep Dish of Legend`) &&
        have($item`Calzone of Legend`)) ||
      myDaycount() === 1,
    tasks: [
      {
        name: "Pre-Run Photobooth",
        ready: () => have($item`Clan VIP Lounge key`) && get("_photoBoothEquipment", 0) === 0,
        completed: () => get("_photoBoothEquipment", 0) >= 3,
        do: () => {
          cliExecute("photobooth item fake arrow-through-the-head");
          cliExecute("photobooth item oversized monocle on a stick");
          cliExecute("photobooth item feather boa");
        },
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
        do: () => cliExecute(`${args.garboascend} ${pingu()}`),
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
      },
      {
        name: "Barfing Drunk with Stooper",
        ready: () =>
          stooperDrunk() && have($familiar`Stooper`) && !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || totallyDrunk(),
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
      },
      {
        name: "Nightcap (Wine Glass)",
        ready: () => have($item`Drunkula's wineglass`),
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP VALUE ${get("valueOfAdventure") - 1000}`),
      },
      {
        name: "Nightcap (Marginal)",
        ready: () => have($item`Beach Comb`) || have($item`Map to Safety Shelter Grimace Prime`),
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP VALUE 500`),
      },
      {
        name: "Grimace Maps",
        ready: () => !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || !have($item`Map to Safety Shelter Grimace Prime`),
        do: () => cliExecute("grimace maps"),
        limit: { tries: 30 },
      },
      {
        name: "Garbo (Drunk)",
        ready: () => have($item`Drunkula's wineglass`),
        prepare: () => uneffect($effect`Beaten Up`),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`${args.garboascend} ${pingu()}`),
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
      },
      {
        name: "Prepare for LoopCS",
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
