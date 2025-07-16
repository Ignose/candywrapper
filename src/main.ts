import { Args, getTasks } from "grimoire-kolmafia";
import { gamedayToInt, print } from "kolmafia";

import { args } from "./args";
import { ProfitTrackingEngine } from "./engine/engine";
import { AftercoreQuest } from "./tasks/1 aftercoreleg";
import { AscendQuest } from "./tasks/2 ascend";
import { RunQuests } from "./tasks/3 runleg";
import { PostRunQuests } from "./tasks/4 postrunleg";
import { deleteJunkKmails, halloween, notifyVoters, realDay, realMonth } from "./tasks/utils";
import { itemPriceValue } from "./tasks/cluedin";

const version = "0.0.3";

const dontCS = gamedayToInt() === 78 || (realMonth === 10 && realDay === 30);

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (args.test) {
    itemPriceValue();
  }

  if (dontCS && args.halloween && args.cs) {
    throw `Tomorrow is halloween, run something that lets you get steel organs!`;
  }

  if (halloween && args.halloween && args.smol) {
    throw `Today is halloween, run CS for more organ space!`;
  }

  print(`Running: candyWrapper v${version}`);

  if (!args.cs && !args.smol && !args.casual && !args.robot && !args.zooto && !args.ih8u)
    throw "Undefined runtype; please choose an acceptable path";

  const tasks = getTasks([AftercoreQuest(), AscendQuest(), RunQuests(), PostRunQuests()]);

  if (tasks === undefined) throw "Undefined runtype; please choose a valid run type";

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
  deleteJunkKmails();
  notifyVoters();
}
