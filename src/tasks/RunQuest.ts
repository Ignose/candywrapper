import {
  buyUsingStorage,
  cliExecute,
  drink,
  eat,
  Effect,
  equip,
  fullnessLimit,
  getClanName,
  hippyStoneBroken,
  itemAmount,
  mallPrice,
  myAscensions,
  myFullness,
  myInebriety,
  myLevel,
  myMaxhp,
  pullsRemaining,
  restoreHp,
  restoreMp,
  storageAmount,
  toInt,
  use,
  useSkill,
  visitUrl,
  wait,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  $skill,
  clamp,
  get,
  have,
  Macro,
  set,
  uneffect,
} from "libram";
import { args } from "../args";
import { getCurrentLeg, Leg, Quest } from "./structure";
import { CombatStrategy, step } from "grimoire-kolmafia";
import { backstageItemsDone, bestFam, haveAll, maxBase } from "./utils";

let cleanup = false;
let fullAftercoreCleanup = false;
let runQuestDone = false;

const checkMelange =
  get("valueOfAdventure") * 45 > mallPrice($item`spice melange`) &&
  !have($item`designer sweatpants`);

function howManySausagesCouldIEat() {
  if (!have($item`Kramco Sausage-o-Matic™`)) return 0;
  // You may be full but you can't be overfull
  if (myFullness() > fullnessLimit()) return 0;

  return clamp(
    23 - get("_sausagesEaten"),
    0,
    itemAmount($item`magical sausage`) + itemAmount($item`magical sausage casing`)
  );
}

function CSQuest(): Quest {
  return {
    name: "Community Service Run",
      ready: () => args.cs,
      completed: () =>
        getCurrentLeg() !== Leg.Run ||
        get("kingLiberated"),
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
  }
}

function SmolQuest(): Quest {
  return {
    name: "Smol Run",
    ready: () => args.smol,
    completed: () =>
        getCurrentLeg() !== Leg.Run ||
        get("kingLiberated"),
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
        },
        {
          name: "Pre-Pulls",
          completed: () =>
            pullsRemaining() === 0 ||
            !args.pulls.find(
              (it) => !have(it) && !get("_roninStoragePulls").includes(toInt(it).toString())
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
          name: "SIT Course",
          // eslint-disable-next-line libram/verify-constants
          ready: () => have($item`S.I.T. Course Completion Certificate`),
          completed: () => get("_sitCourseCompleted", false),
          choices: {
            1494: 2,
          },
          do: () =>
            // eslint-disable-next-line libram/verify-constants
            use($item`S.I.T. Course Completion Certificate`),
        },
        {
          name: "Break Stone",
          completed: () => hippyStoneBroken() || !args.pvp,
          do: (): void => {
            visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
            visitUrl("peevpee.php?place=fight");
          },
        },
        {
          name: "Prepare Empathy",
          completed: () => get("_empathyReady", false),
          do: (): void => {
            cliExecute("maximize MP; set _empathyReady = true");
          },
        },
        {
          name: "Stillsuit Prep",
          completed: () => itemAmount($item`tiny stillsuit`) === 0,
          do: () =>
            equip(
              $item`tiny stillsuit`,
              get(
                "stillsuitFamiliar",
                $familiars`Gelatinous Cubeling, Levitating Potato, Mosquito`.find((fam) =>
                  have(fam)
                ) || $familiar`none`
              )
            ),
        },
        {
          name: "Run",
          completed: () => step("questL13Final") > 11,
          do: () => cliExecute(args.smolscript),
          clear: "all",
          tracking: "Run",
        },
        {
          name: "drink",
          ready: () =>
            step("questL13Final") > 11 &&
            (have($item`designer sweatpants`) || checkMelange) &&
            have($skill`Drinking to Drink`) &&
            storageAmount($item`synthetic dog hair pill`) >= 1,
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
          completed: () => howManySausagesCouldIEat() === 0,
          do: (): void => {
            eat($item`magical sausage`, howManySausagesCouldIEat());
          },
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
        },
      ],
  }
}

function FullAftercoreQuest(): Quest {
  return {
    name: "Full Aftercore",
    ready: () => args.smol || args.gyou,
    completed: () => fullAftercoreCleanup,
    tasks: [
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
      name: "End Cleanup",
      completed: () => fullAftercoreCleanup,
      do: () => fullAftercoreCleanup = true,
    },
  ],
  }
}

function CleanupQuest(): Quest {
  return {
    name: "Post-Run Cleanup",
      completed: () => cleanup,
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
          do: (): void =>{
            uneffect($effect`Citizen of a Zone`);
            cliExecute(`set _citizenZone = ""`);
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
          name: "Unlock Desert",
          completed: () => have($item`bitchin' meatcar`),
          do: () => cliExecute("acquire bitchin"),
        },
        {
          name: "End Cleanup",
          completed: () => cleanup,
          do: () => cleanup = true,
        },
      ],
  }
}

export function RunQuest(): Quest {
  return {
    name: "Run Quest",
    completed: () => runQuestDone,
    tasks: [
      {
        name: "Do the Quest",
        completed: () => runQuestDone,
        do: (): void => {
          CSQuest();
          SmolQuest();
          FullAftercoreQuest();
          CleanupQuest();
          runQuestDone = true;
        },
      },
    ]
  }
}
