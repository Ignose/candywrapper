import { print } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { ProfitTrackingEngine } from "./engine/engine";
import { args } from "./args";
import { AftercoreQuest } from "./tasks/1aftercoreleg";
import { AscendQuest } from "./tasks/2ascend";
import { RunQuests } from "./tasks/3runleg";
import { RunAftercoreQuests } from "./tasks/4runaftercoreleg";

const version = "0.0.3";

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }


  /*if (args.profits) {
    printProfits(this.profits.all());
    return;
  };*/

  print(`Running: candyWrapper v${version}`);

  const tasks = getTasks([AftercoreQuest(), AscendQuest(), ...RunQuests(), ...RunAftercoreQuests()])

  if(!args.cloop && !args.gloop && !args.smol) throw "Undefined runtype; please choose either cs or smol";

  const engine = new ProfitTrackingEngine(tasks, "loop_profit_tracker");
  try {
    // Print the next task that will be executed, if it exists
    const task = engine.getNextTask();
    if (task) {
      print(`Next: ${task.name}`, "blue");
    }

  } finally {
    engine.destruct();
  }
}

