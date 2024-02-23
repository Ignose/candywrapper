import {
  cliExecute,
  hippyStoneBroken,
  pvpAttacksLeft,
} from "kolmafia";
import { Quest } from "./structure";


export function PvPQuest(): Quest {
  return {
    name: "Do PvP",
    completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
    tasks: [
      {
        name: "PvP",
        completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
        do: (): void => {
          cliExecute("unequip");
          cliExecute("UberPvPOptimizer");
          cliExecute("swagger");
        },
      },
    ],
  };
}
