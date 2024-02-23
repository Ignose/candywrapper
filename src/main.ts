import { gamedayToInt, print } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { ProfitTrackingEngine } from "./engine/engine";
import { args } from "./args";
import { AscendQuest } from "./tasks/AscendQuest";
import { BreakfastQuest } from "./tasks/BreakfastQuest";
import { GarboQuest } from "./tasks/GarboQuest";
import { gameDay } from "libram";
import { NoBarfQuest } from "./tasks/NoBarfQuest";
import { DietQuest } from "./tasks/DietQuest";
import { WeenQuest } from "./tasks/WeenQuest";
import { PvPQuest } from "./tasks/PvPQuest";
import { NightCapQuest } from "./tasks/NightCapQuest";
import { RunQuest } from "./tasks/RunQuest";

const version = "0.0.3";

const realMonth = gameDay().getMonth();
const realDay = gameDay().getDate();
const dontCS = gamedayToInt() === 78 || (realMonth === 10 && realDay === 30);
export const halloween = gamedayToInt() === 79 || (realMonth === 10 && realDay === 31);
export const noBarf = args.crimbo || args.chrono || (halloween && args.halloween)

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if(dontCS && args.halloween && args.cs) {
    throw `Tomorrow is halloween, run something that lets you get steel organs!`
  }

  if(halloween && args.halloween && args.smol) {
    throw `Today is halloween, run CS for more organ space!`
  }

  /*if (args.profits) {
    printProfits(this.profits.all());
    return;
  };*/

  print(`Running: candyWrapper v${version}`);

  const tasks =
    getTasks([BreakfastQuest(), GarboQuest(), DietQuest(), NoBarfQuest(), WeenQuest(), PvPQuest(), AscendQuest(), RunQuest(),
      BreakfastQuest(), GarboQuest(), DietQuest(), NoBarfQuest(), WeenQuest(), NightCapQuest()]);

  if(tasks === undefined) throw "Undefined runtype; please choose either cs or smol";

  if (args.abort) {
    const to_abort = tasks.find((task) => task.name === args.abort);
    if (!to_abort) throw `Unable to identify task ${args.abort}`;
    to_abort.prepare = (): void => {
      throw `Abort requested`;
    };
  }

  const engine = new ProfitTrackingEngine(tasks, "loop_profit_tracker");
  try {
    engine.run(args.actions);
    // Print the next task that will be executed, if it exists
    const task = engine.getNextTask();
    if (task) {
      print(`Next: ${task.name}`, "blue");
    }

  } finally {
    engine.destruct();
  }
}

