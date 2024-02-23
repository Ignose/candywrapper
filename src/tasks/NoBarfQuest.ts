import {
  cliExecute,
  myAdventures,
} from "kolmafia";
import {
  $effect,
  $effects,
  have,
  uneffect,
} from "libram";
import { Quest } from "./structure";
import { args } from "../args";
import { halloween } from "../main";

let triedGarbo = false;

export function NoBarfQuest(): Quest {
  return {
    name: "Garbo No Barf",
    ready:() => args.crimbo || args.chrono || (halloween && args.halloween),
    completed: () => triedGarbo,
    tasks: [
      {
        name: "Garbo",
        completed: () => triedGarbo === true,
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(`${args.garboascend} nobarf`),
        post: () => {
          if (myAdventures() === 0)
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef));
          triedGarbo = true;
        },
        clear: "all",
        tracking: "Garbo",
        limit: { tries: 1 }, //this will run again after installing CMC, by magic
      },
    ],
  };
}
