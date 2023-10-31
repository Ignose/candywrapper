import { print } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { AftercoreQuest } from "./tasks/aftercoreleg";
import { CSQuests } from "./tasks/csleg";
import { ProfitTrackingEngine } from "./engine/engine";
import { args } from "./args";

const version = "0.0.1";

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  // if (args.profits) {
  //   print("work in progress");
  //   return;
  // }

  print(`Running: candyWrapper v${version}`);

  const tasks = getTasks([AftercoreQuest(), ...CSQuests()]);

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

