import {
  cliExecute,
  handlingChoice,
  myAdventures,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $effects,
  $item,
  $items,
  $location,
  get,
  have,
  uneffect,
} from "libram";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  canDiet,
  stooperDrunk,
} from "./utils";
import { args } from "../args";
import { garboType } from "../lib";

let weenDone = false;

export function GarboBreakfastWeenQuest(): Quest {
  return {
    name: "Aftercore",
    ready: () => garboType === "nobarf",
    completed: () => getCurrentLeg() > Leg.Aftercore || weenDone,
    tasks: [
      {
        name: "June Cleaver",
        completed: () =>
          !have($item`June cleaver`) || get("_juneCleaverFightsLeft") > 0 || myAdventures() === 0,
        choices: {
          1467: 3, //Poetic Justice
          1468: get("_juneCleaverSkips") < 5 ? 4 : 2, //Aunts not Ants
          1469: 3, //Beware of Aligator
          1470: get("_juneCleaverSkips") < 5 ? 4 : 2, //Teacher's Pet
          1471: 1, //Lost and Found
          1472: get("_juneCleaverSkips") < 5 ? 4 : 1, //Summer Days
          1473: get("_juneCleaverSkips") < 5 ? 4 : 1, //Bath Time
          1474: get("_juneCleaverSkips") < 5 ? 4 : 2, //Delicious Sprouts
          1475: 1, //Hypnotic Master
        },
        do: $location`Noob Cave`,
        post: () => {
          if (handlingChoice()) visitUrl("main.php");
          if (have($effect`Beaten Up`)) uneffect($effect`Beaten Up`);
        },
        outfit: () => ({ equip: $items`June cleaver` }),
        limit: undefined,
      },
      {
        name: "Consume ALL",
        completed: () => !canDiet(),
        do: (): void =>{
          const baseMeat = get("CONSUME.BASEMEAT");
          cliExecute(`set CONSUME.BASEMEAT = 0; consume ALL VALUE = 11000; set CONSUME.BASEMEAT = ${baseMeat}`);
        }
      },
      {
        name: "Garbo",
        completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(`${args.garboascend} nobarf nodiet`),
        post: () => {
          if (myAdventures() === 0)
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef));
          weenDone = true;
        },
        clear: "all",
        tracking: "Garbo",
        limit: { tries: 1 }, //this will run again after installing CMC, by magic
      },
    ],
  };
}
