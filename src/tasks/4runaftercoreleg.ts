import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  buy,
  cliExecute,
  drink,
  Effect,
  getProperty,
  getWorkshed,
  hippyStoneBroken,
  inebrietyLimit,
  itemAmount,
  mallPrice,
  maximize,
  myAdventures,
  myAscensions,
  myClass,
  myDaycount,
  myInebriety,
  myLevel,
  myMaxhp,
  mySign,
  numericModifier,
  print,
  putDisplay,
  pvpAttacksLeft,
  restoreHp,
  restoreMp,
  retrieveItem,
  setProperty,
  storageAmount,
  toInt,
  use,
  useFamiliar,
  useSkill,
  wait,
} from "kolmafia";
import {
  $class,
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  $skill,
  get,
  have,
  Macro,
  uneffect,
} from "libram";
import { args } from "../args";
import { Quest } from "./structure";
import {
  backstageItemsDone,
  bestFam,
  canDiet,
  doneAdventuring,
  haveAll,
  maxBase,
  stooperDrunk,
  totallyDrunk,
} from "./utils";

let pajamas = false;
let smoke = 1;

const checkMelange =
  get("valueOfAdventure") * 45 > mallPrice($item`spice melange`) &&
  !have($item`designer sweatpants`);

function altWorkshed() {
  const ws = getWorkshed();
  switch (ws) {
    case $item`model train set`:
      return (
        $items`cold medicine cabinet, Asdon Martin keyfob, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic`.find(
          (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0
        ) || ws
      );
    case $item`Asdon Martin keyfob`:
      return (
        $items`cold medicine cabinet, model train set, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic`.find(
          (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0
        ) || ws
      );
    case $item`cold medicine cabinet`:
      return (
        $items`Asdon Martin keyfob, model train set, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic, warbear induction oven, snow machine`.find(
          (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0
        ) || ws
      );
    case $item`Little Geneticist DNA-Splicing Lab`:
      return (
        $items`cold medicine cabinet, Asdon Martin keyfob, model train set, portable Mayo Clinic`.find(
          (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0
        ) || ws
      );
    case $item`portable Mayo Clinic`:
      return (
        $items`cold medicine cabinet, model train set, Asdon Martin keyfob, Little Geneticist DNA-Splicing Lab`.find(
          (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0
        ) || ws
      );
    default:
      return $item`none`;
  }
}

export function RunAftercoreQuests(): Quest[] {
  return [
    {
      name: "Post-Grey You Aftercore",
      ready: () => myDaycount() === 1 && get("kingLiberated", false),
      completed: () => totallyDrunk() && pajamas,
      tasks: [
        {
          name: "Pull All",
          completed: () => get("lastEmptiedStorage") === myAscensions(),
          do: () => cliExecute("pull all; refresh all"),
        },
        {
          name: "Sober Up",
          completed: () =>
            myInebriety() <= 15 ||
            get("_mimeArmyShotglassUsed") ||
            get("_sweatOutSomeBoozeUsed", 0) === 3,
          do: (): void => {
            if (checkMelange) {
              cliExecute("acquire spice melange; use spice melange");
            }
            while (get("_sweatOutSomeBoozeUsed", 0) < 3) {
              useSkill($skill`Sweat Out Some Booze`);
            }
            if (!get("_sobrieTeaUsed", false)) {
              retrieveItem($item`cuppa Sobrie tea`);
              use($item`cuppa Sobrie tea`);
            }
            use($item`synthetic dog hair pill`);
          },
        },
        {
          name: "Wardrobe-o-matic",
          // eslint-disable-next-line libram/verify-constants
          ready: () => myLevel() >= 15 && have($item`wardrobe-o-matic`),
          completed: () => get("_wardrobeUsed", false),
          do: (): void => {
            // eslint-disable-next-line libram/verify-constants
            use($item`wardrobe-o-matic`);
            cliExecute("set _wardrobeUsed = true");
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
          name: "Install Alternate Workshed",
          ready: () => have(altWorkshed()),
          completed: () =>
            altWorkshed() === $item`none` ||
            get("_workshedItemUsed") ||
            getWorkshed() === altWorkshed(),
          do: () => use(altWorkshed()),
        },
        {
          name: "Gold Wedding Ring",
          completed: () =>
            !have($skill`Comprehensive Cartography`) ||
            myAscensions() === get("lastCartographyBooPeak") ||
            (!args.smol && !args.gloop),
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
          name: "Laugh Floor",
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's lollipop`) ||
            have($item`observational glasses`) ||
            (!args.smol && !args.gloop),
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
              (ef: Effect) => cliExecute(`uneffect ${ef}`)
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
              .repeat()
          ),
          limit: { tries: 15 },
        },
        {
          name: "Infernal Rackets Backstage",
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's unicorn`) ||
            backstageItemsDone() ||
            (!args.smol && !args.gloop),
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
              (ef: Effect) => cliExecute(`uneffect ${ef}`)
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
              .repeat()
          ),
          limit: { tries: 15 },
        },
        {
          name: "Mourn",
          ready: () => have($item`observational glasses`),
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's lollipop`) ||
            (!args.smol && !args.gloop),
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
            have($item`Azazel's unicorn`) ||
            (!args.smol && !args.gloop),
          do: (): void => {
            cliExecute(
              `panda arena Bognort ${$items`giant marshmallow, gin-soaked blotter paper`.find((a) =>
                have(a)
              )}`
            );
            cliExecute(
              `panda arena Stinkface ${$items`beer-scented teddy bear, gin-soaked blotter paper`.find(
                (a) => have(a)
              )}`
            );
            cliExecute(
              `panda arena Flargwurm ${$items`booze-soaked cherry, sponge cake`.find((a) =>
                have(a)
              )}`
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
            have($item`Azazel's tutu`) ||
            (!args.smol && !args.gloop),
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
          completed: () => have($skill`Liver of Steel`) || have($item`steel margarita`) ||
          (!args.smol && !args.gloop),
          do: () => cliExecute("panda temple"),
        },
        {
          name: "Liver of Steel",
          ready: () => have($item`steel margarita`),
          completed: () => have($skill`Liver of Steel`) ||
          (!args.smol && !args.gloop),
          do: () => drink(1, $item`steel margarita`),
        },
        {
          name: "Acquire Carpe",
          completed: () => !args.carpe|| have($item`carpe`),
          do: () => cliExecute("acquire carpe"),
        },
        {
          name: "Breakfast",
          completed: () => get("breakfastCompleted"),
          do: () => cliExecute("breakfast"),
        },
        {
          name: "Eat Tofu",
          completed: () => get("_essentialTofuUsed", false),
          do: (): void => {
            print("Tofu unused! Trying to buy some!", "teal");
            if(mallPrice($item`essential tofu`) < toInt(getProperty("valueOfAdventure")) * 4)
              buy($item`essential tofu`, 1)
            if(have($item`essential tofu`)) {
              use(1, $item`essential tofu`);
            }
            else {
              print("Tofu is more expensive than would be vialble. Skipping Tofu.");
            }
          }
        },
        {
          name: "Get Bofa Wish",
          ready: () => myClass() === $class`Seal Clubber` ||
          myClass() === $class`Pastamancer` ||
          myClass() === $class`Sauceror`,
          completed: () => toInt(getProperty("_bookOfFactsWishes")) >= 3,
          do: (): void => {
            if(myClass() === $class`Seal Clubber`) {
              maximize("familiar weight, .1 item drop -equip broken champagne bottle", false);
              useFamiliar($familiar`Pair of Stomping Boots`);
              adv1($location`Shadow Rift (Forest Village)`, 1, "if monstername shadow guy || monstername shadow spider; runaway; abort; endif; skill Saucegeyser; repeat");
            }

            if(myClass() === $class`Pastamancer`){
              print("I didn't build this yet");
            }
            //Repeat this for PM and Sauceror - an excercise left to Alii
          }
        },
        {
          name: "Garbo",
          ready: () => get("_stenchAirportToday") || get("stenchAirportAlways"),
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
          name: "Turn in FunFunds",
          ready: () => get("_stenchAirportToday") && itemAmount($item`FunFunds™`) >= 20,
          completed: () => itemAmount($item`FunFunds™`) <= 20,
          do: (): void => {
            const buyPasses = itemAmount($item`FunFunds™`) / 20;
            buy($coinmaster`The Dinsey Company Store`, buyPasses, $item`one-day ticket to Dinseylandfill`);
          },
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
          name: "Smoke em if you got em",
          completed: () => !have($item`stick of firewood`),
          do: (): void => {
            while (have($item`stick of firewood`)) {
              setProperty(
                "choiceAdventure1394",
                `1&message=${smoke} Thanks Seraphiii for writing Candywrapper!`
              );
              use(1, $item`campfire smoke`);
              print(`Smoked ${smoke} firewoods!`);
              smoke = smoke + 1;
            }
          },
        },
        {
          name: "Offhand Remarkable",
          // eslint-disable-next-line libram/verify-constants
          ready: () => have($item`August Scepter`),
          completed: () =>
            !have($skill`Aug. 13th: Left/Off Hander's Day!`) ||
            have($effect`Offhand Remarkable`) ||
            get("_aug13Cast", false),
          do: () =>
            // eslint-disable-next-line libram/verify-constants
            useSkill($skill`Aug. 13th: Left/Off Hander's Day!`),
        },
        {
          name: "Cast August",
          completed: () => toInt(getProperty("_augSkillsCAst")) >= 5,
          do: (): void => {
            print("Garbo didn't cast all of the scepter skills. Burning remaining casts.", "red");
            const goodAugustSkills = [$skill`Aug. 3rd: Watermelon Day!`,
            $skill`Aug. 4th: Water Balloon Day!`,
            $skill`Aug. 5th: Oyster Day!`,
            $skill`Aug. 24th: Waffle Day!`,
            $skill`Aug. 25th: Banana Split Day!`,
            $skill`Aug. 26th: Toilet Paper Day!`];

             goodAugustSkills.forEach(sk => {
              if(have(sk)) useSkill(sk)
             });
          }
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
                (fam) => have(fam)
              ),
            modifier: `adventures${args.pvp ? ", 0.3 fites" : ""}`,
          }),
        },
        {
          name: "Display my Stuff and Clean Up!",
          completed: () => get("_stuffDisplayed", false),
          do: (): void => {
            const displayItems = [$item`surprisingly capacious handbag`,
            $item`designer handbag`,
            $item`fireclutch`];

            cliExecute("ptrack add smokeEnd");
            cliExecute("mallbuy 9999 surprisingly capacious handbag @ 120");
		        cliExecute("mallbuy 9999 fireclutch @ 650");

            displayItems.forEach((it) => {
              if(have(it)) putDisplay(9999, it);});
		        cliExecute("pTrack recap");
          },
        },
        {
          name: "Return Ring",
          completed: () => !have($item`navel ring of navel gazing`),
          do: (): void => {
            print("Returning ring to Noob");
            cliExecute(`csend 1 navel ring of navel gazing to Noobsauce || Returning your ring.`);
          },
        },
        {
          name: "Alert-No Nightcap",
          ready: () => !doneAdventuring(),
          completed: () => stooperDrunk(),
          do: (): void => {
            const targetAdvs = 100 - numericModifier("adventures");
            print("smol completed, but did not overdrink.", "red");
            if (targetAdvs < myAdventures() && targetAdvs > 0)
              print(
                `Rerun with fewer than ${targetAdvs} adventures for smol to handle your diet`,
                "red"
              );
            else print("Something went wrong.", "red");
          },
        },
      ],
    },
  ];
}
