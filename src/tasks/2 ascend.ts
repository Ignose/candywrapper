import {
  cliExecute,
  equip,
  handlingChoice,
  myAdventures,
  myDaycount,
  runChoice,
  visitUrl,
} from "kolmafia";
import { $class, $item, $path, $skill, $skills, ascend, CursedMonkeyPaw, have } from "libram";

import { args } from "../args";

import { targetPerms } from "./perm";
import { Quest } from "./structure";
import { availableCasts, castDownTo, toMoonSign, totallyDrunk } from "./utils";

const skipPizza = args.cs || args.smol ? false : true

export function AscendQuest(): Quest {
  return {
    name: "Ascend",
    ready: () => myAdventures() === 0 && totallyDrunk(),
    completed: () => myDaycount() === 1,
    tasks: [
      {
        name: "Spend them stats grrrrl",
        completed: () =>  availableCasts($skill`BCZ: Prepare Spinal Tapas`,0) === 0 &&
          availableCasts($skill`BCZ: Craft a Pheromone Cocktail`,0) === 0 &&
          availableCasts($skill`BCZ: Create Blood Thinner`,0) === 0,
        do: () =>  {
          equip($item`blood cubic zirconia`);
          $skills`BCZ: Prepare Spinal Tapas, BCZ: Craft a Pheromone Cocktail, BCZ: Create Blood Thinner`.forEach((sk) => castDownTo(sk, 0));
        },
        tracking: "Other"
      },
      {
        name: "Do the Ascension",
        ready: () =>
          (have($item`Pizza of Legend`) &&
          have($item`Deep Dish of Legend`) &&
          have($item`Calzone of Legend`)) ||
          skipPizza,
        completed: () => myDaycount() === 1, //Change this
        do: (): void => {
          const [skills, permLifestyle] = targetPerms();

          const skillsToPerm = new Map();
          skills.forEach((sk) => skillsToPerm.set(sk, permLifestyle));

          const path = args.cs
            ? $path`Community Service`
            : args.smol
            ? $path`A Shrunken Adventurer am I`
            : args.casual
            ? $path.none
            : args.robot
            ? $path`You, Robot`
            : args.zooto
            ? $path`Z is for Zootomist`
            : args.ih8u
            ? $path`11 Things I Hate About U`
            : undefined;
          const lifestyle = args.casual ? 1 : 2;

          if (path === undefined) throw "You have no path defined";

          const canRobotNonMon = CursedMonkeyPaw.have() && have($item`genie bottle`);
          const moonsign =
            args.robot && canRobotNonMon
              ? toMoonSign("mongoose")
              : args.robot
              ? toMoonSign("vole")
              : toMoonSign(args.moonsign);
          const myClass = args.robot && !canRobotNonMon ? $class`Pastamancer` : args.class;

          ascend({
            path: path,
            playerClass: args.zooto ? $class`Zootomist` : myClass,
            lifestyle: lifestyle,
            moon: moonsign,
            consumable: $item`astral six-pack`,
            pet: args.astralpet === $item`none` ? undefined : args.astralpet,
            permOptions: { permSkills: skillsToPerm, neverAbort: false },
          });
          cliExecute("refresh all");
          visitUrl("main.php");
          if (args.smol || args.robot) {
            while (handlingChoice()) runChoice(1);
          }
        },
      },
    ],
  };
}
