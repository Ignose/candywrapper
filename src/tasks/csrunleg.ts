import {
  buy,
  cliExecute,
  drink,
  fullnessLimit,
  getClanName,
  getWorkshed,
  haveEffect,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  itemAmount,
  mallPrice,
  myAdventures,
  myAscensions,
  myFullness,
  myInebriety,
  myLevel,
  mySign,
  mySpleenUse,
  numericModifier,
  print,
  pvpAttacksLeft,
  retrieveItem,
  setProperty,
  spleenLimit,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $skill,
  AsdonMartin,
  gameDay,
  get,
  have,
  set,
  uneffect,
} from "libram";

import { args } from "../args";

import { getCurrentLeg, Leg, Quest } from "./structure";
import { canDiet, doneAdventuring, getGarden, stooperDrunk, totallyDrunk } from "./utils";

let pajamas = false;
let smoke = 1;
const offhandWorth = have($familiar`Left-Hand Man`);
let garboDone = false;

export function CSQuests(): Quest[] {
  return [
    {
      name: "Community Service Run",
      completed: () => getCurrentLeg() !== Leg.Run || get("kingLiberated"),
      tasks: [
        {
          name: "Whitelist VIP Clan",
          completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
          do: () => cliExecute(`/whitelist ${args.clan}`),
        },
        {
          name: "Prep Fireworks Shop",
          completed: () =>
            !have($item`Clan VIP Lounge key`) || get("_goorboFireworksPrepped", false),
          do: () => {
            visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
            set("_goorboFireworksPrepped", true);
          },
          tracking: "Run",
        },
        {
          name: "Run",
          completed: () => get("kingLiberated"),
          do: () => cliExecute(args.csscript),
          tracking: "Run",
        },
      ],
    },
    {
      name: "Post-Community Service Aftercore",
      ready: () => getCurrentLeg() === Leg.Run && get("kingLiberated", false),
      completed: () => totallyDrunk() && pajamas,
      tasks: [
        {
          name: "Pull All",
          completed: () => get("lastEmptiedStorage") === myAscensions(),
          do: () => cliExecute("pull all; refresh all"),
        },
        {
          name: "Ensure prefs reset",
          completed: () => !get("_folgerInitialConfig", false),
          do: () => cliExecute("set _folgerInitialConfig = false"),
        },
        {
          name: "But dad I don't want to feel lost",
          completed: () => !have($effect`Feeling Lost`),
          do: () => uneffect($effect`Feeling Lost`),
        },
        {
          name: "Clear citizen",
          completed: () => get("_citizenZone", "") !== "Madness Bakery",
          do: (): void => {
            uneffect($effect`Citizen of a Zone`);
            cliExecute(`set _citizenZone = ""`);
          },
        },
        {
          name: "Use Mayam",
          // eslint-disable-next-line libram/verify-constants
          ready: () => have($item`Mayam Calendar`),
          completed: () =>
            ["yam4", "explosion", "clock"].every((sym) => get("_mayamSymbolsUsed").includes(sym)),
          do: () => {
            if ($familiar`Chest Mimic`.experience < 450) useFamiliar($familiar`Chest Mimic`);
            else useFamiliar($familiar`Grey Goose`);
            cliExecute("mayam rings vessel yam cheese explosion");
            cliExecute("mayam rings yam meat eyepatch yam");
            cliExecute("mayam rings fur bottle wall clock");
          },
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
          name: "Smoke em if you got em",
          ready: () => get("getawayCampsiteUnlocked"),
          completed: () => !have($item`stick of firewood`) || smoke >= 10,
          do: (): void => {
            if (mallPrice($item`stick of firewood`) <= 200) buy($item`stick of firewood`, 10);
            while (have($item`stick of firewood`)) {
              setProperty(
                "choiceAdventure1394",
                `1&message=${smoke} Thanks Seraphiii for writing Candywrapper!`,
              );
              use(1, $item`campfire smoke`);
              print(`Smoked ${smoke} firewoods!`);
              smoke = smoke + 1;
            }
            if (mallPrice($item`stick of firewood`) <= 200) buy($item`stick of firewood`, 1);
          },
        },
        {
          name: "Acquire Carpe",
          completed: () => !args.carpe || have($item`carpe`),
          do: () => cliExecute("acquire carpe"),
        },
        {
          name: "Unlock Desert",
          completed: () => have($item`bitchin' meatcar`),
          do: () => cliExecute("acquire bitchin"),
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
          name: "Drive Observantly",
          completed: () =>
            getWorkshed() !== $item`Asdon Martin keyfob (on ring)` ||
            haveEffect($effect`Driving Observantly`) >=
              (totallyDrunk() || !have($item`Drunkula's wineglass`)
                ? myAdventures()
                : myAdventures() + 60),
          do: () =>
            AsdonMartin.drive(
              $effect`Driving Observantly`,
              totallyDrunk() || !have($item`Drunkula's wineglass`)
                ? myAdventures()
                : myAdventures() + 60,
              false,
            ),
          limit: { tries: 5 },
        },
        {
          name: "Breakfast",
          completed: () => get("breakfastCompleted"),
          do: () => cliExecute("breakfast"),
        },
        {
          name: "Garbo",
          ready: () => !holiday().includes("Halloween"),
          completed: () => (myAdventures() === 0 && !canDiet()) || stooperDrunk(),
          prepare: () => uneffect($effect`Beaten Up`),
          do: () => cliExecute(args.garbo),
          post: () =>
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef)),
          clear: "all",
          tracking: "Garbo",
        },
        {
          name: "CONSUME ALL",
          ready: () => holiday().includes("Halloween"),
          completed: () =>
            myFullness() >= fullnessLimit() &&
            mySpleenUse() >= spleenLimit() &&
            myInebriety() >= inebrietyLimit(),
          do: () => cliExecute("consume ALL"),
        },
        {
          name: "Garbo Nobarf",
          ready: () => holiday().includes("Halloween"),
          completed: () => garboDone,
          do: (): void => {
            cliExecute(`${args.garbo} nodiet nobarf target="witchess knight"`);
            garboDone = true;
          },
        },
        {
          name: "Garboween",
          ready: () => holiday().includes("Halloween"),
          completed: () => Math.floor(myAdventures() / 5) < 1,
          prepare: () => uneffect($effect`Beaten Up`),
          do: (): void => {
            if (have($familiar`Trick-or-Treating Tot`))
              cliExecute("familiar Trick-or-Treating Tot");
            else if (have($familiar`Red-Nosed Snapper`)) cliExecute("familiar snapper");
            cliExecute(`freeCandy ${myAdventures()}`);
          },
          post: () => {
            if (myAdventures() === 0)
              $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
                .filter((ef) => have(ef))
                .forEach((ef) => uneffect(ef));
          },
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
          name: "PvP",
          ready: () => doneAdventuring(),
          completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
          do: (): void => {
            cliExecute("unequip");
            cliExecute("UberPvPOptimizer");
            cliExecute("swagger");
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
          name: "Do Pizza",
          ready: () => doneAdventuring(),
          completed: () =>
            have($item`Pizza of Legend`) &&
            have($item`Deep Dish of Legend`) &&
            have($item`Calzone of Legend`),
          do: (): void => {
            !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`) : undefined;
            !have($item`Deep Dish of Legend`)
              ? retrieveItem($item`Deep Dish of Legend`)
              : undefined;
            !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;
          },
        },
        {
          name: "Plant Garden",
          ready: () =>
            doneAdventuring() &&
            !!$items`packet of rock seeds, packet of thanksgarden seeds, Peppermint Pip Packet, packet of winter seeds, packet of beer seeds, packet of pumpkin seeds, packet of dragon's teeth`.find(
              (it) => have(it),
            ),
          completed: () => getGarden() !== $item`packet of tall grass seeds`,
          do: () => {
            use(
              $items`packet of rock seeds, packet of thanksgarden seeds, Peppermint Pip Packet, packet of winter seeds, packet of beer seeds, packet of pumpkin seeds, packet of dragon's teeth`.find(
                (it) => have(it),
              ) || $item`none`,
            );
            cliExecute("garden pick");
          },
        },
        {
          name: "Freecandy Drunk",
          ready: () => holiday().includes("Halloween"),
          completed: () => stooperDrunk() || (!canDiet() && Math.floor(myAdventures() / 5) === 0),
          prepare: () => uneffect($effect`Beaten Up`),
          do: (): void => {
            cliExecute(`freeCandy ${myAdventures()}`);
          },
          post: () => {
            if (myAdventures() === 0)
              $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
                .filter((ef) => have(ef))
                .forEach((ef) => uneffect(ef));
          },
          clear: "all",
          tracking: "Garbo",
          limit: { tries: 1 }, //this will run again after installing CMC, by magic
        },
        {
          name: "Offhand Remarkable",
          ready: () => have($item`august scepter`),
          completed: () =>
            have($effect`Offhand Remarkable`) ||
            get("_aug13Cast", false) ||
            (get("_augSkillsCast", 0) >= 5 && gameDay().getDate() !== 13),
          do: () => useSkill($skill`Aug. 13th: Left/Off Hander's Day!`),
        },
        {
          name: "Alternative Offhand Remarkable",
          ready: () => offhandWorth,
          completed: () => have($effect`Offhand Remarkable`),
          do: (): void => {
            retrieveItem($item`pocket wish`);
            cliExecute("genie effect Aug. 13th: Left/Off Hander's Day!");
          },
        },
        {
          name: "Item Cleanup",
          // eslint-disable-next-line libram/verify-constants
          completed: () => get("_cleanupToday", false) || args.itemcleanup === "",
          do: (): void => {
            cliExecute(`${args.itemcleanup}`);
            cliExecute("set _cleanupToday = true");
          },
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
            cliExecute("maximize adv, switch disembodied hand, -switch left-hand man");
            pajamas = true;
          },
        },
        {
          name: "Alert-No Nightcap",
          ready: () => !doneAdventuring(),
          completed: () => stooperDrunk(),
          do: (): void => {
            const targetAdvs = 100 - numericModifier("adventures");
            print("candyWrapper completed, but did not overdrink.", "red");
            if (targetAdvs < myAdventures() && targetAdvs > 0)
              print(
                `Rerun with fewer than ${targetAdvs} adventures for candyWrapper to handle your diet`,
                "red",
              );
            else print("Something went wrong.", "red");
          },
        },
      ],
    },
  ];
}
