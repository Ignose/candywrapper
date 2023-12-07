import { print, visitUrl } from "kolmafia";
import { Args, getTasks } from "grimoire-kolmafia";
import { GarboQuest } from "./tasks/1RunGarbo";
import { ChronoQuest } from "./tasks/2RunChrono";
import { AscendQuest } from "./tasks/3RunAscend";
import { CSQuests } from "./tasks/4RunCS";
import { CSChronoQuest } from "./tasks/5RunCSChrono";
import { ProfitTrackingEngine } from "./engine/engine";
import { args } from "./args";
import { get } from "libram";
import { Quest } from "./tasks/structure";

let checkedTimeTower = false;

const TimeTowerQuest: Quest = {
    name: "Aftercore",
    completed: () => get("timeTowerAvailable") || checkedTimeTower,
    tasks: [
    {
    name: "Check Access",
    completed: () => get("timeTowerAvailable") || checkedTimeTower,
    do: () => {
      visitUrl("place.php?whichplace=twitch");
      if (!get("timeTowerAvailable")) {
        print("The Time-Twitching Tower is currently unavailable; no rocks today");
        checkedTimeTower = true
          }
        },
      },
    ]
}

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }



  const tasks = getTasks([
    TimeTowerQuest,
    get("timeTowerAvailable") ? ChronoQuest : GarboQuest,
    get("timeTowerAvailable") ? AscendQuest : GarboQuest,
    get("timeTowerAvailable") ? CSQuests : GarboQuest,
    get("timeTowerAvailable") ? CSChronoQuest : GarboQuest
  ]);

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

