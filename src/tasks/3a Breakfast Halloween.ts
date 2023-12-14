import {
  cliExecute,
  inebrietyLimit,
  myAdventures,
  myInebriety,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  get,
  have,
  uneffect,
} from "libram";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  canDiet,
  stooperDrunk,
  totallyDrunk,
} from "./utils";
import { halloween } from "../lib";


export function BreakfastWeenQuest(): Quest {
  return {
    name: "Aftercore",
    ready: () => halloween,
    completed: () => getCurrentLeg() > Leg.Aftercore,
    tasks: [
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
        name: "Nightcap (Halloween)",
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP VALUE ${get("valueOfAdventure") - 1000}`),
      },
      {
        name: "Grimace Maps",
        completed: () => myAdventures() === 0 || !have($item`Map to Safety Shelter Grimace Prime`),
        do: () => cliExecute("grimace maps"),
        limit: { tries: 30 },
      },
      {
        name: "Freecandy time",
        completed: () => (!canDiet() && myAdventures() === 0),
        prepare: () => uneffect($effect`Beaten Up`),
        do: (): void => {
            if(have($familiar`Trick-or-Treating Tot`)) cliExecute("familiar Trick-or-Treating Tot")
            else if(have($familiar`Red-Nosed Snapper`)) cliExecute("familiar snapper")
            cliExecute(`freecandy ${myAdventures()}`);
        },
        clear: "all",
        tracking: "Freecandy",
        limit: { tries: 5 },
      },
    ],
  };
}
