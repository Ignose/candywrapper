import {
  cliExecute,
  myAdventures,
} from "kolmafia";
import {
  $item,
  $path,
  ascend,
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

export const AscendQuest: Quest = {
    name: "Ascend",
    ready: () => myAdventures() === 0 && totallyDrunk(),
    completed: () => getCurrentLeg() !== 0,
    tasks: [
      {
        name: "Do the Ascension",
        ready: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        completed: () => getCurrentLeg() >= Leg.Run, //Change this
        do: (): void => {
          const skillsToPerm = new Map();
          targetPerms().forEach((sk) => skillsToPerm.set(sk, Lifestyle.softcore));

          const moonsign = toMoonSign(args.moonsign);
          ascend({
            path: $path`Community Service`,
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

