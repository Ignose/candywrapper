import {
  cliExecute,
  equip,
  handlingChoice,
  mallPrice,
  myAdventures,
  myDaycount,
  retrieveItem,
  runChoice,
  visitUrl,
} from "kolmafia";
import { $class, $item, $items, $path, $skill, $skills, $slot, ascend, BloodCubicZirconia, CursedMonkeyPaw, EternityCodpiece, have } from "libram";

import { args } from "../args";

import { targetPerms } from "./perm";
import { Quest } from "../structure";
import { toMoonSign, totallyDrunk } from "./utils";

const skipPizza = args.cs || args.smol ? false : true;

export function AscendQuest(): Quest {
  return {
    name: "Ascend",
    ready: () => myAdventures() === 0 && totallyDrunk(),
    completed: () => myDaycount() === 1,
    tasks: [
      {
        name: "Spend them stats grrrrl",
        ready: () => have($item`blood cubic zirconia`),
        completed: () =>
          BloodCubicZirconia.availableCasts($skill`BCZ: Prepare Spinal Tapas`, 0) === 0 &&
          BloodCubicZirconia.availableCasts($skill`BCZ: Craft a Pheromone Cocktail`, 0) === 0 &&
          BloodCubicZirconia.availableCasts($skill`BCZ: Create Blood Thinner`, 0) === 0,
        do: () => {
          equip($item`blood cubic zirconia`);
          $skills`BCZ: Prepare Spinal Tapas, BCZ: Craft a Pheromone Cocktail, BCZ: Create Blood Thinner`.forEach(
            (sk) => {
              const casts = BloodCubicZirconia.availableCasts(sk, 0);
              for (let index = 0; index < casts; index++) {
                BloodCubicZirconia.cast(sk, BloodCubicZirconia.availableCasts(sk, 0))
              }
            },
          );
        },
        tracking: "Other",
      },
      {
        name: "Do Pizza",
        ready: () => args.cs || args.smol || args.sea,
        completed: () =>
          have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`) && have($item`Pizza of Legend`),
        do: () => {
          retrieveItem($item`Deep Dish of Legend`);
          retrieveItem($item`Calzone of Legend`);
          retrieveItem($item`Pizza of Legend`);
        },
        tracking: "Other",
      },
      {
        name: "Smuggle Pearls",
        ready: () => (mallPrice($item`unblemished pearl`) <= 75_000 || have($item`unblemished pearl`,5)) &&
          EternityCodpiece.have() && args.sea,
        completed: () =>
          EternityCodpiece.currentGems().join(",") ===
           $items`unblemished pearl, unblemished pearl, unblemished pearl, unblemished pearl, unblemished pearl`.join(","),
        do: () => {
          retrieveItem($item`unblemished pearl`, 5);
          equip($item`unblemished pearl`, $slot`codpiece1`);
          equip($item`unblemished pearl`, $slot`codpiece2`);
          equip($item`unblemished pearl`, $slot`codpiece3`);
          equip($item`unblemished pearl`, $slot`codpiece4`);
          equip($item`unblemished pearl`, $slot`codpiece5`);
        },
        tracking: "Other",
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
            : args.sea
            ? $path`11,037 Leagues Under the Sea`
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
          if (args.smol || args.robot || args.sea) {
            while (handlingChoice()) runChoice(1);
          }
        },
      },
    ],
  };
}
