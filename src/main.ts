import { gamedayToInt, print, todayToString } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { CSAftercoreQuest } from "./tasks/csaftercoreleg";
import { CSQuests } from "./tasks/csleg";
import { ProfitTrackingEngine } from "./engine/engine";
import { args } from "./args";
import { SmolAftercoreQuest } from "./tasks/smolaftercore";
import { SmolQuests } from "./tasks/smol";

const version = "0.0.2";

const dontCS = gamedayToInt() === 78 || todayToString().includes("1030");

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if(dontCS && args.halloween) {
    throw `Tomorrow is halloween, run something that lets you get steel organs!`
  }

  /*if (args.profits) {
    printProfits(this.profits.all());
    return;
  };*/

  print(`Running: candyWrapper v${version}`);

  const tasks = args.cs ? getTasks([CSAftercoreQuest(), ...CSQuests()]) : args.smol ? getTasks([SmolAftercoreQuest(), ...SmolQuests()]) : undefined;

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

