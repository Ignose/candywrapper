import { Args, getTasks } from "grimoire-kolmafia";
import { gamedayToInt, getRelated, Item, mallPrice, print } from "kolmafia";

import { args } from "./args";
import { ProfitTrackingEngine } from "./engine/engine";
import { AftercoreQuest } from "./tasks/1 aftercoreleg";
import { AscendQuest } from "./tasks/2 ascend";
import { RunQuests } from "./tasks/3 runleg";
import { PostRunQuests } from "./tasks/4 postrunleg";
import { deleteJunkKmails, halloween, notifyVoters, realDay, realMonth } from "./tasks/utils";
import { $item } from "libram";

const version = "0.0.3";

const dontCS = gamedayToInt() === 78 || (realMonth === 10 && realDay === 30);

export function main(command?: string): void {
  Args.fill(args, command);
  if (args.help) {
    Args.showHelp(args);
    return;
  }

  if (args.test) {
    const coldWadPrice = mallPrice($item`stench wad`);
    const twinklyWadPrice = mallPrice($item`twinkly wad`);

    const results = Item.all()
      .map((item) => {
        const p = getRelated(item, "pulverize");

        const value =
          // cold
          (p?.["stench wad"] ?? 0) * coldWadPrice / 1_000_000 +
          (p?.["stench nuggets"] ?? 0) * coldWadPrice / 5 / 1_000_000 +
          (p?.["stench powder"] ?? 0) * coldWadPrice / 25 / 1_000_000 +

          // twinkly
          (p?.["twinkly wad"] ?? 0) * twinklyWadPrice / 1_000_000 +
          (p?.["twinkly nuggets"] ?? 0) * twinklyWadPrice / 5 / 1_000_000 +
          (p?.["twinkly powder"] ?? 0) * twinklyWadPrice / 25 / 1_000_000;

        const price = mallPrice(item) > 0 ? mallPrice(item) : Infinity;
        const net = value - price;
        const roi = net / price;

        return { item, value, price, net, roi };
      })
      .filter(o => o.net > 0)
      .sort((a, b) => b.net - a.net);

    for (const { item, net, roi } of results) {
      print(`${item}: net ${net.toFixed(0)} meat (ROI ${(roi * 100).toFixed(1)}%)`);
    }

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
