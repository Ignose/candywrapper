import { step } from "grimoire-kolmafia";
import {
  cliExecute,
  drink,
  drinksilent,
  eat,
  equip,
  fullnessLimit,
  inebrietyLimit,
  itemAmount,
  myFullness,
  myInebriety,
  retrieveItem,
  useSkill,
  visitUrl,
} from "kolmafia";
import { $item, $skill, clamp, get, have } from "libram";

import { args } from "../args";

import { preRunQuests } from "./repeatableTasks";
import { Quest } from "./structure";
import { shouldWeOverdrink } from "./utils";

const runType = () =>
  args.smol
    ? args.smolscript
    : args.cs
    ? args.csscript
    : args.casual
    ? args.casualscript
    : args.robot
    ? args.robotscript
    : args.ih8u
    ? args.ih8uscript
    : "autoscend";

export function howManySausagesCouldIEat() {
  if (!have($item`Kramco Sausage-o-Matic™`)) return 0;
  // You may be full but you can't be overfull
  if (myFullness() > fullnessLimit()) return 0;

  return clamp(
    23 - get("_sausagesEaten"),
    0,
    itemAmount($item`magical sausage`) + itemAmount($item`magical sausage casing`),
  );
}

function ih8uDrink(): boolean {
  if(myInebriety() >= inebrietyLimit())
    return false;
  if(!have($item`Kremlin's Greatest Briefcase`) || get("_kgbDispenserUses") >= 3 && !(have($item`mini kiwi`) && (have($item`bottle of vodka`) || have($item`bottle of gin`))))
    return false;
  if (have($item`Kremlin's Greatest Briefcase`) && get("_kgbDispenserUses") < 3) {
    cliExecute("briefcase unlock");
    cliExecute("briefcase collect");
  }
  if (have($item`splendid martini`)) return true;
  if(have($item`mini kiwi`) && (have($item`bottle of vodka`) || have($item`bottle of gin`))) {
    retrieveItem($item`mini kiwitini`)
  }
  if(have($item`mini kiwitini`)) return true;
  return false;
}

export function RunQuests(): Quest {
  return {
    name: "Ascension Run",
    completed: () => get("kingLiberated"),
    tasks: [
      ...preRunQuests(),
      {
        name: "Run",
        completed: () => (get("kingLiberated") && args.cs) || step("questL13Final") > 11,
        do: () => {
          if (runType() === undefined || runType() === null) throw "no runtime defined";
          else cliExecute(runType());
        },
        clear: "all",
        tracking: args.cs ? "Ignore" : "Run",
      },
      {
        name: "drink ih8u",
        ready: () => myInebriety() < inebrietyLimit() && args.ih8u,
        completed: () => myInebriety() === inebrietyLimit() || !ih8uDrink(),
        do: (): void => {
          while(ih8uDrink()) {
            equip($item`tuxedo shirt`);
            useSkill($skill`The Ode to Booze`);
            if(have($item`splendid martini`)) {
              drinksilent($item`splendid martini`);
            } else {
              drinksilent($item`mini kiwitini`);
            }
          }
        },
        clear: "all",
        tracking: "Organs",
      },
      {
        name: "drink",
        ready: () => shouldWeOverdrink() && args.smol,
        completed: () => myInebriety() >= 2,
        do: (): void => {
          if (have($skill`The Ode to Booze`)) useSkill($skill`The Ode to Booze`);
          drink($item`astral pilsner`, 1);
        },
        clear: "all",
        tracking: "Organs",
      },
      {
        name: "Sausages",
        ready: () => args.smol,
        completed: () => howManySausagesCouldIEat() === 0,
        do: (): void => {
          eat($item`magical sausage`, howManySausagesCouldIEat());
        },
        clear: "all",
        tracking: "Run",
      },
      {
        name: "Free King",
        ready: () => step("questL13Final") > 11 && !args.cs,
        completed: () => get("kingLiberated", false),
        do: (): void => {
          visitUrl("place.php?whichplace=nstower&action=ns_11_prism");
        },
        clear: "all",
        tracking: "ignore",
      },
    ],
  };
}
