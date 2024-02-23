import {
  cliExecute,
} from "kolmafia";
import { Quest } from "./structure";
import {
  simpleCanDiet,
} from "./utils";
import { noBarf } from "../main";

export function DietQuest(): Quest {
  return {
    name: "Diet",
    ready: () => simpleCanDiet() && noBarf,
    completed: () => !simpleCanDiet(),
    tasks: [
      {
        name: "CONSUME ALL",
        completed: () => simpleCanDiet(),
        do: () => cliExecute("consume ALL"),
      },
    ],
  };
}
