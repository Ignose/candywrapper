import {
  cliExecute,
  mallPrice,
  myAdventures,
  retrieveItem,
} from "kolmafia";
import {
  $item,
  $path,
  ascend,
  get,
  have,
  Lifestyle,
} from "libram";
import { Quest } from "../structure";
import {
  toMoonSign,
  totallyDrunk,
} from "../utils";
import { args } from "../args";
import { targetPerms } from "../perm";

let prepared = false;

export function AscendQuest(): Quest {
  return {
    name: "Ascend",
    ready: () => myAdventures() === 0 && totallyDrunk() && get("ascensionsToday") < 0 && (args.cs || args.smol || args.gyou),
    completed: () => get("ascensionsToday") > 0,
    tasks: [
      {
        name: "Prepare For The Ascension",
        completed: () => prepared,
        do: (): void => {
          if(args.cs) {
            if(!have($item`tobiko marble soda`) || mallPrice($item`tobiko marble soda`) > get("valueOfAdventure") * 2)
              retrieveItem($item`tobiko marble soda`);
            if(!have($item`Pizza of Legend`))
              retrieveItem($item`Pizza of Legend`);
            if(!have($item`Deep Dish of Legend`))
              retrieveItem($item`Deep Dish of Legend`);
            if(!have($item`Calzone of Legend`))
              retrieveItem($item`Calzone of Legend`);
            if(!have($item`borrowed time`))
              retrieveItem($item`borrowed time`);
          }
          if(args.smol) {
            if (!have($item`Frosty's frosty mug`)) {
              if(mallPrice($item`Frosty's frosty mug`) > 400000) throw "Error: Frosty mug too expensive, aborting"
              retrieveItem($item`Frosty's frosty mug`)
            }

            if (!have($item`Ol' Scratch's salad fork`)) {
              if(mallPrice($item`Ol' Scratch's salad fork`) > 400000) throw "Error: Salad Fork too expensive, aborting"
              retrieveItem($item`Ol' Scratch's salad fork`);
            }

            if(!have($item`Pizza of Legend`))
              retrieveItem($item`Pizza of Legend`);

              mallPrice($item`Ol' Scratch's salad fork`) < 200000
          }
          prepared = true;
        },
      },
      {
        name: "Do the Ascension",
        ready: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        completed: () => get("ascensionsToday") > 0,
        do: (): void => {
          const skillsToPerm = new Map();
          targetPerms().forEach((sk) => skillsToPerm.set(sk, Lifestyle.softcore));

          const path = args.cs ? $path`Community Service`
          : args.smol ? $path`A Shrunken Adventurer am I`
          : args.gyou ? $path`Grey You`
          : undefined;

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
