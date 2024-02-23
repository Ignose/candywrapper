import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  cliExecute,
  drink,
  getCampground,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  handlingChoice,
  haveEffect,
  mallPrice,
  myAdventures,
  myClass,
  myHp,
  myLevel,
  myMaxhp,
  myPrimestat,
  mySign,
  print,
  restoreHp,
  setProperty,
  use,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $item,
  $items,
  $location,
  $phylum,
  $skill,
  $stat,
  AsdonMartin,
  DNALab,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  set,
  uneffect,
} from "libram";
import { Quest } from "./structure";
import {
  bestFam,
  getGarden,
  isGoodGarboScript,
  maxBase,
  noML,
  stooperDrunk,
  totallyDrunk,
} from "./utils";
import { args } from "../args";

let breakfastDone = false;
let smoke = 1;

export function BreakfastQuest(): Quest {
  return {
    name: "Breakfast",
    completed: () => breakfastDone,
    tasks: [
      {
        name: "Whitelist VIP Clan",
        completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
        do: () => cliExecute(`/whitelist ${args.clan}`),
      },
      {
        name: "Prep Fireworks Shop",
        completed: () => !have($item`Clan VIP Lounge key`) || get("_goorboFireworksPrepped", false),
        do: () => {
          visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
          set("_goorboFireworksPrepped", true);
        },
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
        name: "Smoke em if you got em",
        ready: () => args.tip,
        completed: () => !have($item`stick of firewood`) || smoke >= 10,
        do: (): void => {
          if(mallPrice($item`stick of firewood`) <= 200)
            buy($item`stick of firewood`, 10);
          while(have($item`stick of firewood`)) {
            setProperty("choiceAdventure1394",`1&message=${smoke} Thanks Seraphiii for writing Candywrapper!`);
            use(1,$item`campfire smoke`);
            print(`Smoked ${smoke} firewoods!`)
            smoke = smoke + 1;
          }
          if(mallPrice($item`stick of firewood`) <= 200)
            buy($item`stick of firewood`, 1);
        }
      },
      {
        name: "Breakfast",
        completed: () => get("breakfastCompleted"),
        do: () => cliExecute("breakfast"),
      },
      {
        name: "Harvest Garden",
        completed: () =>
          getGarden() === $item`none` ||
          getGarden() === $item`packet of mushroom spores` ||
          getCampground()[getGarden().name] === 0,
        do: () => cliExecute("garden pick"),
        tracking: "Dailies",
        limit: { tries: 3 },
      },
      {
        name: "Plant Grass",
        completed: () =>
          !have($item`packet of tall grass seeds`) ||
          getGarden() === $item`packet of tall grass seeds`,
        do: () => use($item`packet of tall grass seeds`),
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
        name: "Drive Observantly",
        completed: () =>
          get("dailyDungeonDone") ||
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
            false
          ),
        limit: { tries: 5 },
      },
      {
        name: "Sample Constellation DNA",
        ready: () => have($item`DNA extraction syringe`),
        completed: () =>
          !DNALab.installed() ||
          DNALab.isHybridized($phylum`Constellation`) ||
          get("dnaSyringe") === $phylum`Constellation`,
        outfit: {
          familiar: bestFam(),
          modifier: `${maxBase()}`,
        },
        do: $location`The Hole in the Sky`,
        combat: new CombatStrategy()
          .macro(Macro.skill($skill`Curse of Weaksauce`), getTodaysHolidayWanderers())
          .macro(Macro.tryItem($item`DNA extraction syringe`))
          .macro(
            Macro.tryItem($item`train whistle`)
              .tryItem($item`porquoise-handled sixgun`)
              .trySkill($skill`Sing Along`)
              .attack()
              .repeat()
          ),
      },
      {
        name: "Hybridize Constellation",
        ready: () => get("dnaSyringe") === $phylum`Constellation`,
        completed: () => !DNALab.installed() || DNALab.isHybridized($phylum`Constellation`),
        do: () => {
          DNALab.makeTonic(3);
          DNALab.hybridize();
        },
      },
      {
        name: "LGR Seed",
        ready: () =>
          //best guess if we're going to Dinseylandfill later in the day
          isGoodGarboScript(args.garboascend) ||
          args.pulls.includes($item`one-day ticket to Dinseylandfill`),
        completed: () =>
          !have($item`lucky gold ring`) || get("_stenchAirportToday") || get("stenchAirportAlways"),
        do: () => use($item`one-day ticket to Dinseylandfill`),
      },
      {
        name: "June Cleaver",
        completed: () =>
          !have($item`June cleaver`) || get("_juneCleaverFightsLeft") > 0 || myAdventures() === 0,
        choices: {
          1467: 3, //Poetic Justice
          1468: get("_juneCleaverSkips") < 5 ? 4 : 2, //Aunts not Ants
          1469: 3, //Beware of Aligator
          1470: get("_juneCleaverSkips") < 5 ? 4 : 2, //Teacher's Pet
          1471: 1, //Lost and Found
          1472: get("_juneCleaverSkips") < 5 ? 4 : 1, //Summer Days
          1473: get("_juneCleaverSkips") < 5 ? 4 : 1, //Bath Time
          1474: get("_juneCleaverSkips") < 5 ? 4 : 2, //Delicious Sprouts
          1475: 1, //Hypnotic Master
        },
        do: $location`Noob Cave`,
        post: () => {
          if (handlingChoice()) visitUrl("main.php");
          if (have($effect`Beaten Up`)) uneffect($effect`Beaten Up`);
        },
        outfit: () => ({ equip: $items`June cleaver` }),
        limit: undefined,
      },
      {
        name: "Restore HP",
        completed: () => myHp() > 0.5 * myMaxhp(),
        do: () => restoreHp(0.95 * myMaxhp()),
      },
      {
        name: "Implement Glitch",
        ready: () => have($item`[glitch season reward name]`),
        completed: () => get("_glitchItemImplemented"),
        do: () => use($item`[glitch season reward name]`),
      },
      {
        name: "Fight Glitch",
        ready: () => have($item`[glitch season reward name]`),
        completed: () => get("_glitchMonsterFights") > 0,
        acquire: $items`gas can, gas balloon, shard of double-ice`.map((it) => ({
          item: it,
          price: 1000,
        })),
        prepare: () => {
          restoreHp(0.9 * myMaxhp());
          if (have($skill`Blood Bubble`) && !have($effect`Blood Bubble`))
            useSkill($skill`Blood Bubble`);
        },
        do: () => visitUrl("inv_eat.php?pwd&whichitem=10207"),
        post: () => {
          if (!get("_lastCombatWon"))
            throw new Error("Lost Combat - Check to see what went wrong.");
        },
        outfit: () => ({
          familiar: bestFam(),
          modifier: `${myPrimestat()} experience, 5 ${myPrimestat()} experience percent, ${noML()}`,
        }),
        combat: new CombatStrategy().macro(() =>
          Macro.tryItem($item`gas balloon`)
            .trySkill($skill`Feel Pride`)
            .tryItem(...$items`shard of double-ice, gas can`)
            .attack()
            .repeat()
        ),
        tracking: "Leveling",
      },
      {
        name: "Unlock Guild",
        ready: () =>
          (myClass() === $class`Seal Clubber` &&
            Math.min(
              ...$items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) =>
                availableAmount(it)
              )
            ) < 20),
        completed: () => guildStoreAvailable() || myAdventures() === 0 || stooperDrunk(),
        do: () => cliExecute("guild"),
        choices: {
          //sleazy back alley
          108: 4, //craps: skip
          109: 1, //drunken hobo: fight
          110: 4, //entertainer: skip
          112: 2, //harold's hammer: skip
          21: 2, //under the knife: skip
          //haunted pantry
          115: 1, //drunken hobo: fight
          116: 4, //singing tree: skip
          117: 1, //knob goblin chef: fight
          114: 2, //birthday cake: skip
          //outskirts of cobb's knob
          113: 2, //knob goblin chef: fight
          111: 3, //chain gang: fight
          118: 2, //medicine quest: skip
        },
        outfit: () => ({
          familiar: bestFam(),
          modifier: `${maxBase()}, ${
            myPrimestat() === $stat`Muscle` ? "100 combat rate 20 max" : "-100 combat rate"
          }, 250 bonus carnivorous potted plant`,
        }),
        combat: new CombatStrategy()
          .macro(
            () =>
              Macro.step("pickpocket")
                .externalIf(
                  have($skill`Curse of Weaksauce`),
                  Macro.trySkill($skill`Curse of Weaksauce`),
                  Macro.tryItem($item`electronics kit`)
                )
                .tryItem($item`porquoise-handled sixgun`)
                .trySkill($skill`Sing Along`)
                .attack()
                .repeat(),
            getTodaysHolidayWanderers()
          )
          .macro(() =>
            Macro.step("pickpocket")
              .trySkill($skill`Sing Along`)
              .tryItem($item`porquoise-handled sixgun`)
              .attack()
              .repeat()
          ),
      },
      {
        name: "Stock Up on MMJs",
        ready: () =>
          guildStoreAvailable() &&
          (myClass().primestat === $stat`Mysticality` ||
            (myClass() === $class`Accordion Thief` && myLevel() >= 9)),
        completed: () => availableAmount($item`magical mystery juice`) >= 500,
        acquire: [
          {
            item: $item`magical mystery juice`,
            num: 500,
          },
        ],
        do: () => false,
      },
      {
        name: "Buy Seal Summoning Supplies",
        ready: () => myClass() === $class`Seal Clubber` && guildStoreAvailable(),
        completed: () =>
          Math.min(
            ...$items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) =>
              availableAmount(it)
            )
          ) >= 40,
        acquire: $items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) => ({
          item: it,
          num: 500,
        })),
        do: () => false,
      },
      {
        name: "Wrap Up",
        ready: () => !breakfastDone,
        completed: () => breakfastDone,
        do: () => breakfastDone = true,
      },
    ],
  };
}
