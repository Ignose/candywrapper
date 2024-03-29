import {
  cliExecute,
  handlingChoice,
  myAdventures,
  myDaycount,
  runChoice,
  visitUrl,
} from "kolmafia";
import {
  $item,
  $path,
  ascend,
  have,
  Lifestyle,
} from "libram";
import { Quest } from "./structure";
import {
  toMoonSign,
  totallyDrunk,
} from "./utils";
import { args } from "../args";
import { targetPerms } from "./perm";

export function AscendQuest(): Quest {
  return {
    name: "Ascend",
    ready: () => myAdventures() === 0 && totallyDrunk(),
    completed: () => myDaycount() === 1,
    tasks: [
      {
        name: "Do the Ascension",
        ready: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        completed: () => myDaycount() === 1, //Change this
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
          visitUrl("main.php");
          if(args.smol) {
            while (handlingChoice())
              runChoice(1)
            };
        },
      },
    ],
  };
}
