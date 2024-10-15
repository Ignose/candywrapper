import { Args, getTasks } from "grimoire-kolmafia";
import { gamedayToInt, print, toMonster } from "kolmafia";
import { $monster } from "libram";

import { args } from "./args";
import { ProfitTrackingEngine } from "./engine/engine";
import { GarboWeenQuest } from "./tasks/Garboween";
import { AftercoreQuest } from "./tasks/aftercoreleg";
import { AscendQuest } from "./tasks/ascend";
import { CasualQuests } from "./tasks/casualrunleg";
import { CSQuests } from "./tasks/csrunleg";
import { RobotQuests } from "./tasks/robotrunleg";
import { SmolQuests } from "./tasks/smolrunleg";
import {
  bestTarget,
  bofaValue,
  deleteJunkKmails,
  halloween,
  realDay,
  realMonth,
  snapperValue,
  valueDrops,
} from "./tasks/utils";

const version = "0.0.3";

const dontCS = gamedayToInt() === 78 || (realMonth === 10 && realDay === 30);

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (args.targetsim) {
    let target = $monster`sausage goblin`;
    if (args.targetmonster) {
      target = toMonster(args.targetmonster);
    } else {
      target = bestTarget();
    }
    const dropValue = valueDrops(target);
    const snapper = snapperValue(target);
    const bofa = bofaValue(target);
    throw `Your target will be ${target} because it drops ${dropValue} and offers Snapper bonus ${snapper} as well as Just The Facts ${bofa}!`;
  }

  if (dontCS && args.halloween && args.cs) {
    throw `Tomorrow is halloween, run something that lets you get steel organs!`;
  }

  if (halloween && args.halloween && args.smol) {
    throw `Today is halloween, run CS for more organ space!`;
  }

  /*if (args.profits) {
    printProfits(this.profits.all());
    return;
  };*/

  print(`Running: candyWrapper v${version}`);

  const runQuest = args.cs
    ? CSQuests()
    : args.smol
    ? SmolQuests()
    : args.casual
    ? CasualQuests()
    : args.robot
    ? RobotQuests()
    : undefined;
  if (runQuest === undefined) throw "Undefined runtype; please choose either cs or smol";

  const tasks = halloween
    ? getTasks([GarboWeenQuest(), AscendQuest(), ...runQuest])
    : getTasks([AftercoreQuest(), AscendQuest(), ...runQuest]);

  if (tasks === undefined) throw "Undefined runtype; please choose either cs or smol";

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
}
