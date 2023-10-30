import { print } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { AftercoreQuest } from "./tasks/aftercoreleg";
import { CSQuests } from "./tasks/csleg";
import { ProfitTrackingEngine } from "./engine/engine";
import { args } from "./args";
import { checkPerms, printPermPlan } from "./tasks/perm";

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
  if (args.simperms) {
    checkPerms();
    printPermPlan();
    return;
  }
  if (args.version) {
    print(`goorbo v${version}`);
    return;
  }

  print(`Running: goorbo v${version}`);

  const tasks = getTasks([AftercoreQuest(), ...CSQuests()]);

  const engine = new ProfitTrackingEngine(tasks, "loop_profit_tracker");
  try {
    if (args.list) {
      listTasks(engine);
      return;
    }

    // Print the next task that will be executed, if it exists
    const task = engine.getNextTask();
    if (task) {
      print(`Next: ${task.name}`, "blue");
    }

  } finally {
    engine.destruct();
  }
}

function listTasks(engine: ProfitTrackingEngine): void {
  for (const task of engine.tasks) {
    if (task.completed()) {
      print(`${task.name}: Done`, "blue");
    } else {
      if (engine.available(task)) {
        print(`${task.name}: Available`);
      } else {
        print(`${task.name}: Not Available`, "red");
      }
    }
  }
}
