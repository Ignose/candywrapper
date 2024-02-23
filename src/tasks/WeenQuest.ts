import {
  cliExecute,
  handlingChoice,
  holiday,
  inebrietyLimit,
  myAdventures,
  myHp,
  myInebriety,
  myMaxhp,
  restoreHp,
  useFamiliar,
  visitUrl,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $items,
  $location,
  get,
  have,
  uneffect,
} from "libram";
import { Quest } from "../structure";
import {
  stooperDrunk,
  totallyDrunk,
} from "../utils";
import { args } from "../args";
import { halloween } from "../main";

export function WeenQuest(): Quest {
  return {
    name: "Ween Quest",
    ready: () => halloween && args.halloween,
    completed: () => myAdventures() === 0,
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
        name: "Restore HP",
        completed: () => myHp() > 0.5 * myMaxhp(),
        do: () => restoreHp(0.95 * myMaxhp()),
      },
      {
        name: "Freecandy time",
        ready: () => holiday().includes("Halloween"),
        completed: () => myAdventures()/5 < 1,
        prepare: () => uneffect($effect`Beaten Up`),
        do: (): void => {
            if(have($familiar`Trick-or-Treating Tot`)) cliExecute("familiar Trick-or-Treating Tot")
            else if(have($familiar`Red-Nosed Snapper`)) cliExecute("familiar snapper")
            cliExecute(`freecandy ${myAdventures()}`);
        },
        clear: "all",
        tracking: "Freecandy",
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
        name: "Super Nightcap",
        ready: () => have($item`Drunkula's wineglass`),
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP`),
      },
      {
        name: "Freecandy Drunk",
        ready: () => holiday().includes("Halloween"),
        completed: () => Math.floor(myAdventures()/5) === 0,
        prepare: () => uneffect($effect`Beaten Up`),
        do: (): void => {
            cliExecute(`freeCandy ${myAdventures()}`);
        },
        clear: "all",
        tracking: "Freecandy",
        limit: { tries: 1 }, //this will run again after installing CMC, by magic
      },
      {
        name: "Comb Beach",
        ready: () => have($item`Beach Comb`) && totallyDrunk(),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`combo ${11 - get("_freeBeachWalksUsed") + myAdventures()}`),
      },
    ],
  };
}
