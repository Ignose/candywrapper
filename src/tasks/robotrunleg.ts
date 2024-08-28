import { CombatStrategy, step } from "grimoire-kolmafia";
import {
  buy,
  buyUsingStorage,
  cliExecute,
  drink,
  Effect,
  getClanName,
  getWorkshed,
  hippyStoneBroken,
  inebrietyLimit,
  itemAmount,
  myAdventures,
  myAscensions,
  myDaycount,
  myInebriety,
  myLevel,
  myMaxhp,
  mySign,
  numericModifier,
  print,
  pullsRemaining,
  pvpAttacksLeft,
  restoreHp,
  restoreMp,
  retrieveItem,
  setProperty,
  storageAmount,
  toBoolean,
  toInt,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
  wait,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  $skill,
  AprilingBandHelmet,
  get,
  have,
  Macro,
  set,
  uneffect,
} from "libram";

import { args } from "../args";

import { GarboWeenQuest } from "./Garboween";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  backstageItemsDone,
  bestFam,
  doneAdventuring,
  halloween,
  haveAll,
  maxBase,
  pvpCloset,
  stooperDrunk,
  totallyDrunk,
} from "./utils";

let pajamas = false;
let smoke = 1;

function firstWorkshed() {
  return (
    $items`model train set, Asdon Martin keyfob (on ring), cold medicine cabinet, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic`.find(
      (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0,
    ) || $item`none`
  );
}
const sasqBonus = (0.5 * 30 * 1000) / get("valueOfAdventure");
const ratskinBonus = (0.3 * 40 * 1000) / get("valueOfAdventure");

export function RobotQuests(): Quest[] {
  return [
    {
      name: "Robot Run",
      completed: () => getCurrentLeg() !== Leg.Run || get("kingLiberated", false),
      tasks: [
        {
          name: "Whitelist VIP Clan",
          completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
          do: () => cliExecute(`/whitelist ${args.clan}`),
          choices: {
            1507: 1,
          },
        },
        {
          name: "Get Floundry item",
          ready: () => have($item`Clan VIP Lounge key`) && !args.carpe,
          completed: () => get("_floundryItemCreated"),
          do: (): void => {
            retrieveItem($item`carpe`);
          },
          limit: { tries: 1 },
        },
        {
          name: "Prep Fireworks Shop",
          completed: () =>
            !have($item`Clan VIP Lounge key`) || get("_goorboFireworksPrepped", false),
          do: () => {
            visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
            set("_goorboFireworksPrepped", true);
          },
        },
        {
          name: "Pre-Pulls",
          completed: () =>
            pullsRemaining() === 0 ||
            !args.pulls.find(
              (it) => !have(it) && !get("_roninStoragePulls").includes(toInt(it).toString()),
            ), //can't find a pull that (we dont have and it hasn't been pulled today)
          do: () =>
            args.pulls.forEach((it) => {
              if (!have(it) && !get("_roninStoragePulls").includes(toInt(it).toString())) {
                if (storageAmount(it) === 0) buyUsingStorage(it); //should respect autoBuyPriceLimit
                cliExecute(`pull ${it}`);
              }
            }),
        },
        {
          name: "LGR Seed",
          ready: () =>
            have($item`lucky gold ring`) && have($item`one-day ticket to Dinseylandfill`),
          completed: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
          do: () => use($item`one-day ticket to Dinseylandfill`),
          tracking: "Garbo",
        },
        {
          name: "Break Stone",
          ready: () => !args.safepvp,
          completed: () => hippyStoneBroken() || !args.pvp,
          do: (): void => {
            visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
            visitUrl("peevpee.php?place=fight");
          },
        },
        {
          name: "Run",
          completed: () => step("questL13Final") > 11,
          do: () => cliExecute(args.robotscript),
          clear: "all",
          tracking: "Run",
        },
        {
          name: "Free King",
          ready: () => step("questL13Final") > 11,
          completed: () => get("kingLiberated", false),
          do: (): void => {
            visitUrl("place.php?whichplace=nstower&action=ns_11_prism");
          },
          clear: "all",
          tracking: "Ignore",
        },
      ],
    },
    {
      name: "Post-Robot Aftercore",
      ready: () => myDaycount() === 1 && get("kingLiberated", false),
      completed: () => totallyDrunk() && pajamas,
      tasks: [
        {
          name: "Pull All",
          completed: () => get("lastEmptiedStorage") === myAscensions(),
          do: () => cliExecute("pull all; refresh all"),
        },
        {
          name: "PvP Closet Safety 1",
          ready: () => args.pvp && get("autoSatisfyWithCloset"),
          completed: () => toBoolean(get("_safetyCloset1")),
          do: () => pvpCloset(1),
        },
        {
          name: "Install First Workshed",
          ready: () => have(firstWorkshed()),
          completed: () =>
            firstWorkshed() === $item`none` ||
            get("_workshedItemUsed") ||
            getWorkshed() !== $item`none`,
          do: () => use(firstWorkshed()),
        },
        {
          name: "Unlock Garbage Mountain",
          completed: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
          do: (): void => {
            retrieveItem($item`one-day ticket to Dinseylandfill`);
            use($item`one-day ticket to Dinseylandfill`);
          },
          tracking: "Garbo",
        },
        {
          name: "Wardrobe-o-matic",
          ready: () => myLevel() >= 15 && have($item`wardrobe-o-matic`),
          completed: () => get("_wardrobeUsed", false),
          do: (): void => {
            use($item`wardrobe-o-matic`);
            cliExecute("set _wardrobeUsed = true");
          },
          limit: { tries: 1 },
        },
        {
          name: "Apriling Part 1",
          ready: () => AprilingBandHelmet.canChangeSong(),
          completed: () => have($effect`Apriling Band Celebration Bop`),
          do: (): void => {
            AprilingBandHelmet.conduct($effect`Apriling Band Celebration Bop`);
          },
          limit: { tries: 1 },
        },
        {
          name: "Drink Pre-Tune",
          ready: () =>
            mySign().toLowerCase() === "blender" &&
            myLevel() >= 7 &&
            have($item`mime army shotglass`) &&
            (have($item`astral pilsner`) || have($item`astral six-pack`)),
          completed: () =>
            get("_mimeArmyShotglassUsed") || !have($item`hewn moon-rune spoon`) || get("moonTuned"),
          prepare: () => {
            if (have($item`astral six-pack`)) use($item`astral six-pack`);
          },
          do: () => drink(1, $item`astral pilsner`),
        },
        {
          name: "Moon Spoon",
          completed: () =>
            !have($item`hewn moon-rune spoon`) ||
            get("moonTuned") ||
            mySign().toLowerCase() === "wombat",
          do: () => cliExecute("spoon wombat"),
        },
        {
          name: "Gold Wedding Ring",
          completed: () =>
            !have($skill`Comprehensive Cartography`) ||
            myAscensions() === get("lastCartographyBooPeak"),
          choices: { 1430: 3, 606: 4, 610: 1, 1056: 1 },
          do: $location`A-Boo Peak`,
          outfit: { modifier: "initiative 40 min 40 max, -tie" },
        },
        {
          name: "Breakfast",
          completed: () => get("breakfastCompleted"),
          do: () => cliExecute("breakfast"),
        },
        {
          name: "Emergency Drink",
          ready: () => myAdventures() < 25,
          completed: () => get("_mimeArmyShotglassUsed") || !have($item`mime army shotglass`),
          prepare: () => {
            if (have($item`astral six-pack`)) use($item`astral six-pack`);
          },
          do: () => {
            while (myAdventures() < 25) {
              drink(1, $item`astral pilsner`);
            }
          },
        },
        {
          name: "Emergency Drink Part 2",
          ready: () => myAdventures() === 0 && myInebriety() < 11,
          completed: () => myAdventures() > 0 || myInebriety() >= 11,
          prepare: () => {
            if (have($item`astral six-pack`)) use($item`astral six-pack`);
          },
          do: () => {
            while (myAdventures() < 25) {
              useSkill($skill`The Ode to Booze`);
              drink(1, $item`astral pilsner`);
            }
          },
          limit: { tries: 6 },
        },
        {
          name: "Laugh Floor",
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's lollipop`) ||
            have($item`observational glasses`),
          effects: () => [
            ...(have($skill`Musk of the Moose`) ? $effects`Musk of the Moose` : []),
            ...(have($skill`Carlweather's Cantata of Confrontation`)
              ? $effects`Carlweather's Cantata of Confrontation`
              : []),
          ],
          prepare: (): void => {
            if (!have($effect`Carlweather's Cantata of Confrontation`)) {
              cliExecute("kmail to Buffy || 10 Cantata of Confrontation");
              wait(15);
              cliExecute("refresh effects");
            }
            $effects`Smooth Movements, The Sonata of Sneakiness, Darkened Photons, Shifted Phase`.forEach(
              (ef: Effect) => cliExecute(`uneffect ${ef}`),
            );
            restoreHp(0.75 * myMaxhp());
            restoreMp(20);
          },
          do: $location`The Laugh Floor`,
          outfit: () => ({
            familiar: bestFam(),
            modifier: `${maxBase()}, 100 combat rate, 3 item, 250 bonus carnivorous potted plant`,
          }),
          combat: new CombatStrategy().macro(
            Macro.trySkill($skill`Curse of Weaksauce`)
              .tryItem($item`train whistle`)
              .tryItem($item`porquoise-handled sixgun`)
              .attack()
              .repeat(),
          ),
          limit: { tries: 15 },
        },
        {
          name: "Infernal Rackets Backstage",
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's unicorn`) ||
            backstageItemsDone(),
          effects: () => [
            ...(have($skill`Smooth Movement`) ? $effects`Smooth Movements` : []),
            ...(have($skill`The Sonata of Sneakiness`) ? $effects`The Sonata of Sneakiness` : []),
          ],
          prepare: (): void => {
            if (!have($effect`The Sonata of Sneakiness`)) {
              cliExecute("kmail to Buffy || 10 Sonata of Sneakiness");
              wait(15);
              cliExecute("refresh effects");
            }
            $effects`Musk of the Moose, Carlweather's Cantata of Confrontation, Hooooooooonk!`.forEach(
              (ef: Effect) => cliExecute(`uneffect ${ef}`),
            );
            restoreHp(0.75 * myMaxhp());
            restoreMp(20);
          },
          do: $location`Infernal Rackets Backstage`,
          outfit: () => ({
            familiar: bestFam(),
            modifier: `${maxBase()}, -100 combat rate, 3 item, 250 bonus carnivorous potted plant`,
          }),
          combat: new CombatStrategy().macro(
            Macro.trySkill($skill`Curse of Weaksauce`)
              .tryItem($item`train whistle`)
              .tryItem($item`porquoise-handled sixgun`)
              .attack()
              .repeat(),
          ),
          limit: { tries: 15 },
        },
        {
          name: "Mourn",
          ready: () => have($item`observational glasses`),
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's lollipop`),
          outfit: {
            equip: $items`hilarious comedy prop, observational glasses, Victor\, the Insult Comic Hellhound Puppet`,
          },
          do: () => cliExecute("panda comedy insult; panda comedy observe"),
        },
        {
          name: "Sven Golly",
          ready: () => backstageItemsDone(),
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's unicorn`),
          do: (): void => {
            cliExecute(
              `panda arena Bognort ${$items`giant marshmallow, gin-soaked blotter paper`.find((a) =>
                have(a),
              )}`,
            );
            cliExecute(
              `panda arena Stinkface ${$items`beer-scented teddy bear, gin-soaked blotter paper`.find(
                (a) => have(a),
              )}`,
            );
            cliExecute(
              `panda arena Flargwurm ${$items`booze-soaked cherry, sponge cake`.find((a) =>
                have(a),
              )}`,
            );
            cliExecute(`panda arena Jim ${$items`comfy pillow, sponge cake`.find((a) => have(a))}`);
          },
        },
        {
          name: "Moaning Panda",
          ready: () => haveAll($items`Azazel's lollipop, Azazel's unicorn`),
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's tutu`),
          acquire: () =>
            $items`bus pass, imp air`.map((it) => ({
              item: it,
              num: 5,
              price: get("valueOfAdventure"),
            })),
          do: () => cliExecute("panda moan"),
          limit: { tries: 3 },
        },
        {
          name: "Steel Margarita",
          ready: () => haveAll($items`Azazel's tutu, Azazel's lollipop, Azazel's unicorn`),
          completed: () => have($skill`Liver of Steel`) || have($item`steel margarita`),
          do: () => cliExecute("panda temple"),
        },
        {
          name: "Liver of Steel",
          ready: () => have($item`steel margarita`),
          completed: () => have($skill`Liver of Steel`),
          do: () => drink(1, $item`steel margarita`),
        },
        {
          name: "GarboWeen",
          ready: () => halloween,
          completed: () => myAdventures() === 0 || stooperDrunk(),
          do: () => GarboWeenQuest(),
        },
        {
          name: "Garbo",
          ready: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
          completed: () => myAdventures() === 0 || stooperDrunk(),
          prepare: () => uneffect($effect`Beaten Up`),
          do: () => cliExecute(`${args.garbo}`),
          post: () =>
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef)),
          clear: "all",
          tracking: "Garbo",
        },
        {
          name: "Turn in FunFunds",
          ready: () => get("_stenchAirportToday") && itemAmount($item`FunFunds™`) >= 20,
          completed: () => have($item`one-day ticket to Dinseylandfill`),
          do: () =>
            buy($coinmaster`The Dinsey Company Store`, 1, $item`one-day ticket to Dinseylandfill`),
          tracking: "Garbo",
        },
        {
          name: "PvP Closet Safety 2",
          ready: () => args.pvp && get("autoSatisfyWithCloset"),
          completed: () => toBoolean(get("_safetyCloset2")),
          do: () => pvpCloset(2),
        },
        {
          name: "PvP",
          ready: () => doneAdventuring() && !args.safepvp,
          completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
          do: (): void => {
            cliExecute("unequip");
            cliExecute("UberPvPOptimizer");
            cliExecute(`PVP_MAB target=${args.pvpTarget}`);
          },
        },
        {
          name: "Stooper",
          ready: () =>
            myInebriety() === inebrietyLimit() &&
            have($item`tiny stillsuit`) &&
            get("familiarSweat") >= 300,
          completed: () => !have($familiar`Stooper`) || stooperDrunk(),
          do: () => {
            useFamiliar($familiar`Stooper`);
            cliExecute("drink stillsuit distillate");
          },
        },
        {
          name: "Nightcap",
          ready: () => doneAdventuring(),
          completed: () => totallyDrunk(),
          do: () => cliExecute("CONSUME NIGHTCAP"),
        },
        {
          name: "Smoke em if you got em",
          ready: () => get("getawayCampsiteUnlocked"),
          completed: () => !have($item`stick of firewood`),
          do: (): void => {
            while (have($item`stick of firewood`)) {
              setProperty(
                "choiceAdventure1394",
                `1&message=${smoke} Thanks Seraphiii for writing Candywrapper!`,
              );
              use(1, $item`campfire smoke`);
              print(`Smoked ${smoke} firewoods!`);
              smoke = smoke + 1;
            }
          },
        },
        {
          name: "Offhand Remarkable",
          ready: () => have($item`august scepter`),
          completed: () =>
            !have($skill`Aug. 13th: Left/Off Hander's Day!`) ||
            have($effect`Offhand Remarkable`) ||
            get("_aug13Cast", false),
          do: () => useSkill($skill`Aug. 13th: Left/Off Hander's Day!`),
        },
        {
          name: "PvP Closet Safety 3",
          ready: () => args.pvp && get("autoSatisfyWithCloset"),
          completed: () => toBoolean(get("_safetyCloset3")),
          do: () => pvpCloset(3),
        },
        {
          name: "Item Cleanup",
          // eslint-disable-next-line libram/verify-constants
          completed: () => get("_cleanupToday", false) || args.itemcleanup === "",
          do: (): void => {
            cliExecute(`${args.itemcleanup}`);
            cliExecute("set _cleanupToday = true");
          },
          clear: "all",
          tracking: "Item Cleanup",
        },
        {
          name: "Pajamas",
          completed: () => have($item`burning cape`),
          acquire: [
            { item: $item`clockwork maid`, price: 7 * get("valueOfAdventure"), optional: true },
            { item: $item`burning cape` },
          ],
          do: (): void => {
            if (have($item`clockwork maid`)) {
              use($item`clockwork maid`);
            }
            pajamas = true;
          },
          outfit: () => ({
            familiar:
              $familiars`Trick-or-Treating Tot, Left-Hand Man, Disembodied Hand, Grey Goose`.find(
                (fam) => have(fam),
              ),
            modifier: `adventures ${sasqBonus} bonus Sasq™ watch, ${ratskinBonus} bonus ratskin pajama pants ${
              args.pvp ? ", 0.3 fites" : ""
            }`,
          }),
        },
        {
          name: "Alert-No Nightcap",
          ready: () => !doneAdventuring(),
          completed: () => stooperDrunk(),
          do: (): void => {
            const targetAdvs = 100 - numericModifier("adventures");
            print("robot completed, but did not overdrink.", "red");
            if (targetAdvs < myAdventures() && targetAdvs > 0)
              print(
                `Rerun with fewer than ${targetAdvs} adventures for smol to handle your diet`,
                "red",
              );
            else print("Something went wrong.", "red");
          },
        },
      ],
    },
  ];
}
