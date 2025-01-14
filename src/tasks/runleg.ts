import { $item, $skill, clamp, get, have } from "libram";
import { getCurrentLeg, Leg, Quest } from "./structure";
import { args } from "../args";
import { cliExecute, drink, eat, fullnessLimit, itemAmount, mallPrice, myFullness, myInebriety, storageAmount, useSkill, visitUrl } from "kolmafia";
import { preRunQuests } from "./repeatableTasks";
import { step } from "grimoire-kolmafia";

const runType = () => args.smol ? args.smolscript : args.cs ? args.csscript : args.casual ? args.casualscript : args.robot ? args.robotscript : args.robotscript;

const checkMelange = () =>
  get("valueOfAdventure") * 45 > mallPrice($item`spice melange`) &&
  !have($item`designer sweatpants`);

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


export function RunQuests(): Quest {
  return {
    name: "Ascension Run",
      completed: () => getCurrentLeg() !== Leg.Run || get("kingLiberated"),
      tasks: [
        ...preRunQuests(),
        {
          name: "Run",
          completed: () => (get("kingLiberated") && args.cs) || step("questL13Final") > 11,
          do: () => {
            if(runType() === undefined || runType() === null) throw "no runtime defined"
            else cliExecute(runType())
          },
          tracking: "Run",
        },
        {
          name: "drink",
          ready: () =>
            step("questL13Final") > 11 &&
            (have($item`designer sweatpants`) || checkMelange()) &&
            have($skill`Drinking to Drink`) &&
            storageAmount($item`synthetic dog hair pill`) >= 1 &&
            args.smol,
          completed: () => myInebriety() >= 2,
          do: (): void => {
            if (have($skill`The Ode to Booze`)) useSkill($skill`The Ode to Booze`);
            drink($item`astral pilsner`, 1);
          },
          clear: "all",
          tracking: "Run",
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
          ready: () => step("questL13Final") > 11 && !(args.cs),
          completed: () => get("kingLiberated", false),
          do: (): void => {
            visitUrl("place.php?whichplace=nstower&action=ns_11_prism");
          },
          clear: "all",
        },
      ]
  }
}

