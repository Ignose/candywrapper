import {
  buy,
  cliExecute,
  hippyStoneBroken,
  itemAmount,
  mallPrice,
  myAdventures,
  myPrimestat,
  pvpAttacksLeft,
  retrieveItem,
  use,
} from "kolmafia";
import {
  $coinmaster,
  $item,
  $path,
  ascend,
  get,
  have,
  Lifestyle,
} from "libram";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  toMoonSign,
  totallyDrunk,
} from "./utils";
import { args } from "../args";
import { targetPerms } from "./perm";
import { setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";

const doSmol = args.smol ? true : false;
const doCS = args.cs ? true : false;

export function AscendQuest(): Quest {
  return {
    name: "Ascend",
    ready: () => myAdventures() === 0 && totallyDrunk(),
    completed: () => getCurrentLeg() !== 0,
    tasks: [
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
        name: "PvP",
        completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
        do: (): void => {
          cliExecute("unequip");
          cliExecute("UberPvPOptimizer");
          cliExecute("swagger");
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
              "acquire Pizza of Legend; acquire Frosty's frosty mug; acquire Ol' Scratch's salad fork"
            );
        },
      },
      {
        name: "Marble Soda!",
        ready: () => doCS,
        completed: () => have($item`tobiko marble soda`) || mallPrice($item`tobiko marble soda`) > get("valueOfAdventure") * 2,
        do: (): void => {
          retrieveItem($item`tobiko marble soda`);
        }
      },
      {
        name: "Prepare for LoopCS",
        ready: () => doCS,
        completed: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        do: (): void => {
        !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`): undefined;
        !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
        !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;
        !have($item`borrowed time`) ? retrieveItem($item`borrowed time`) : undefined;} ,
      },
      {
        name: "Pre-Configure Trainset",
        completed: () => get("_folgerInitialConfig", false),
        do: (): void => {
          const statStation: Station = {
            Muscle: Station.BRAWN_SILO,
            Mysticality: Station.BRAIN_SILO,
            Moxie: Station.GROIN_SILO,
          }[myPrimestat().toString()];
          use($item`model train set`);
          setConfiguration([
            Station.VIEWING_PLATFORM, // all stats
            Station.COAL_HOPPER, // double mainstat gain
            statStation, // main stats
            Station.GAIN_MEAT, // meat (we don't gain meat during free banishes)
            Station.TOWER_FIZZY, // mp regen
            Station.TOWER_FROZEN, // hot resist (useful)
            Station.WATER_BRIDGE, // +ML
            Station.CANDY_FACTORY, // candies (we don't get items during free banishes)
          ]);
          cliExecute("set _folgerInitialConfig = true");
          cliExecute("set _folgerSecondConfig = false");
        },
        limit: { tries: 2 },
      },
      {
        name: "Do the Ascension",
        ready: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        completed: () => getCurrentLeg() >= Leg.Run, //Change this
        do: (): void => {
          const skillsToPerm = new Map();
          targetPerms().forEach((sk) => skillsToPerm.set(sk, Lifestyle.softcore));

          const path = args.cs ? $path`Community Service` : args.smol ? $path`A Shrunken Adventurer am I` : undefined;

          if(path === undefined) throw "You have no path defined";

          const moonsign = toMoonSign(args.moonsign);
          ascend({
            path: path,
            playerClass: args.class,
            lifestyle: 2,
            moon: moonsign,
            consumable: $item`astral six-pack`,
            pet: args.astralpet === $item`none` ? undefined : args.astralpet,
            permOptions: { permSkills: skillsToPerm, neverAbort: false },
            });
          cliExecute("refresh all");
        },
      },
    ],
  };
}
