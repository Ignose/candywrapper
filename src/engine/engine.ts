import { CombatResources, CombatStrategy, Engine } from "grimoire-kolmafia";
import { cliExecute, equippedAmount, Location, logprint, setAutoAttack, writeCcs } from "kolmafia";
import { $item, clearMaximizerCache, get, JuneCleaver, PropertiesManager } from "libram";

import { getCurrentLeg, Task } from "../tasks/structure";

import { printProfits, ProfitTracker } from "./profits";

const grimoireCCS = "grimoire_macro";
const ccsAbortString = "if pastround 2;abort Failed to finish combat in autoattack;endif;";

export class ProfitTrackingEngine extends Engine<never, Task> {
  profits: ProfitTracker;
  constructor(tasks: Task[], key: string) {
    super(tasks);
    this.profits = new ProfitTracker(key);
  }

  setChoices(task: Task, manager: PropertiesManager): void {
    super.setChoices(task, manager);
    if (equippedAmount($item`June cleaver`) > 0) {
      this.propertyManager.setChoices(
        Object.fromEntries(
          JuneCleaver.choices.map((choice) => [
            choice,
            shouldSkip(choice) ? 4 : bestJuneCleaverOption(choice),
          ]),
        ),
      );
    }
  }

  setCombat(
    task: Task,
    task_combat: CombatStrategy<never>,
    task_resources: CombatResources<never>,
  ): void {
    // Save regular combat macro
    const macro = task_combat.compile(
      task_resources,
      this.options?.combat_defaults,
      task.do instanceof Location ? task.do : undefined,
    );
    if (macro.toString().length > 1) {
      macro.save();
      if (!this.options.ccs) {
        // Use the macro through a CCS file
        const otherCCSEntries = task_combat.compileCcs();
        const ccsContents = [
          "[default]",
          `"${ccsAbortString}${macro.toString()}"`,
          ...otherCCSEntries,
        ].join("\n");

        // Log Macro + other CCS
        logprint(`CCS: ${ccsContents.replace("\n", "\\n ")}`);

        if (ccsContents !== this.cachedCcsContents) {
          writeCcs(ccsContents, grimoireCCS);
          cliExecute(`ccs ${grimoireCCS}`); // force Mafia to reparse the ccs
          const autoattack = task_combat.compileAutoattack().step(macro);
          if (autoattack.toString().length > 1) {
            autoattack.save();
            autoattack.setAutoAttack();
          } else {
            setAutoAttack(0);
          }
          this.cachedCcsContents = ccsContents;
        }
      }
    }
  }

  public checkLimits(task: Task, postcondition: (() => boolean) | undefined): void {
    if (task.clear && !(task.clear instanceof Array))
      task.clear = task.clear === "all" ? ["outfit", "macro"] : [task.clear]; //convert to an array of appropriate strings
    if (task.clear && task.clear.includes("macro")) this.cachedCcsContents = "";
    if (task.clear && task.clear.includes("outfit")) {
      clearMaximizerCache();
    }

    super.checkLimits({ limit: { tries: 1 }, ...task }, postcondition); //sets the default value of limit
  }

  execute(task: Task): void {
    try {
      super.execute(task);
    } finally {
      this.profits.record(`${getCurrentLeg()}@${task.tracking ?? "Other"}`);
    }
  }

  destruct(): void {
    super.destruct();
    this.profits.save();
    printProfits(this.profits.all());
  }
}
function shouldSkip(choice: number): boolean {
  const skip = [1468, 1470, 1472, 1473, 1474];
  return skip.includes(choice) && get("_juneCleaverSkips") < 5;
}

function bestJuneCleaverOption(choice: number): number {
  const choiceTable: { [key: number]: number } = {
    1467: 3, // Poetic Justice
    1468: 2, // Aunts not Ants
    1469: 3, // Beware of Alligator
    1470: 2, // Teacher's Pet
    1471: 1, // Lost and Found
    1472: 1, // Summer Days
    1473: 1, // Bath Time
    1474: 2, // Delicious Sprouts
    1475: 1, // Hypnotic Master
  };

  return choiceTable[choice] ?? 0;
}
