import { Args } from "grimoire-kolmafia";
import { Item, toClass } from "kolmafia";
import { $class, $classes, $item, $items, get } from "libram";

import { toMoonSign } from "./tasks/utils";

export const args = Args.create(
  "CandyWrapper",
  `Written by Seraphiii. This is a full-day wrapper for Community Service. It aims to be a single-press script that will take you through your Aftercore and Community Service legs. It chooses to perm learned skills upon ascension.`,
  {
    version: Args.flag({
      help: "Output script version number and exit.",
      default: false,
      setting: "",
    }),
    list: Args.flag({
      help: "Show the status of all tasks and exit.",
      setting: "",
    }),
    profits: Args.flag({
      help: "Print out daily profit and exit.",
      setting: "",
    }),
    cs: Args.flag({
      help: "Ascend into and run CS.",
      setting: "",
    }),
    smol: Args.flag({
      help: "Ascend into and run smol.",
      setting: "",
    }),
    casual: Args.flag({
      help: "Ascend into and run casual.",
      setting: "",
    }),
    robot: Args.flag({
      help: "Ascend into and run You, Robot.",
      setting: "",
    }),

    //partial run args
    actions: Args.number({
      help: "Maximum number of actions to perform, if given. Can be used to execute just a few steps at a time.",
    }),
    abort: Args.string({
      help: "If given, abort during the prepare() step for the task with matching name.",
    }),
    //configuration args
    pvp: Args.flag({ help: "If true, break hippy stone and do pvp.", default: false }),
    safepvp: Args.flag({
      help: "If true, break hippy stone and do only before ascension.",
      default: false,
    }),
    pvpTarget: Args.string({
      help: "When doing PvP, what should we fight for? fame, loot or flowers?",
      default: "flowers",
    }),
    astralpet: Args.custom(
      {
        help: "Choose the astral pet you want to buy in valhalla",
        options:
          $items`astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt, none`.map(
            (it) => [it],
          ),
        default: $item`astral pet sweater`,
      },
      Item.get,
      "ITEM",
    ),
    carpe: Args.flag({
      help: "Should we skip acquiring Carpe?",
      default: false,
    }),
    moonsign: Args.custom(
      {
        help: "Choose the moonsign you want to ascend into",
        options: [
          "mongoose",
          "wallaby",
          "vole",
          "platypus",
          "opossum",
          "marmot",
          "wombat",
          "blender",
          "packrat",
        ].map((str) => [toMoonSign(str)]),
        default: toMoonSign("blender"),
      },
      toMoonSign,
      "MOONSIGN",
    ),
    class: Args.custom(
      {
        help: "Choose your default class, if CandyWrapper doesn't have any other goals this run",
        options:
          $classes`Seal Clubber, Turtle Tamer, Pastamancer, Sauceror, Disco Bandit, Accordion Thief`.map(
            (cl) => [cl],
          ),
        default: $class`Seal Clubber`,
      },
      toClass,
      "CLASS",
    ),
    clan: Args.string({
      help: `Your VIP Clan. CandyWrapper will whitelist into it at the beginning of your day. Requires clan whitelist.`,
      default: "",
    }),
    csscript: Args.string({
      help: "The command that will do your Community Service run for you. Include any arguments desired.",
      default: "folgercs",
    }),
    smolscript: Args.string({
      help: "The command that will do your smol run for you. Include any arguments desired.",
      default: "loopsmol",
    }),
    casualscript: Args.string({
      help: "The command that will do your casual run for you. Include any arguments desired.",
      default: "",
    }),
    robotscript: Args.string({
      help: "The command that will do your You, Robot run for you. Include any arguments desired.",
      default: "",
    }),
    pulls: Args.items({
      help: "A list of items to pull at the start of the smol run.",
      default: [
        ...$items`mafia thumb ring, lucky gold ring`,
        ...(get("stenchAirportAlways") || get("_stenchAirportToday")
          ? []
          : $items`one-day ticket to Dinseylandfill`),
      ],
    }),
    garbo: Args.string({
      help: "The command that will be used to diet and use all your adventures after reaching level 13 in Day 1 aftercore.",
      default: "garbo",
    }),
    garboascend: Args.string({
      help: `The command that will be used to diet and use all your adventures in Day 2 aftercore.`,
      default: "garbo ascend",
    }),
    itemcleanup: Args.string({
      help: `The script that will be used to mallsale items after a run`,
      default: "",
    }),
    halloween: Args.flag({
      help: "Should we warn you when tomorrow is Halloween so you can prepare a steel organ?",
      default: true,
    }),
  },
);
