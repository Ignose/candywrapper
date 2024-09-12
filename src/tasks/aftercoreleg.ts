import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  cliExecute,
  eatsilent,
  fullnessLimit,
  getCampground,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  handlingChoice,
  haveEffect,
  haveEquipped,
  hippyStoneBroken,
  inebrietyLimit,
  itemAmount,
  mallPrice,
  myAdventures,
  myClass,
  myDaycount,
  myFullness,
  myHp,
  myInebriety,
  myLevel,
  myMaxhp,
  myPrimestat,
  print,
  pvpAttacksLeft,
  restoreHp,
  restoreMp,
  retrieveItem,
  toBoolean,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $coinmaster,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $phylum,
  $skill,
  $stat,
  AprilingBandHelmet,
  AsdonMartin,
  DNALab,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  set,
  TrainSet,
  uneffect,
} from "libram";
import { Cycle, setConfiguration, Station } from "libram/dist/resources/2022/TrainSet";

import { args } from "../args";

import { Quest } from "./structure";
import {
  bestFam,
  copyTarget,
  getGarden,
  isGoodGarboScript,
  maxBase,
  noML,
  pvpCloset,
  stooperDrunk,
  totallyDrunk,
} from "./utils";

const doSmol = args.smol ? true : false;
const doCS = args.cs ? true : false;

let jobsDone = false;
let skipSoda = false;

const statStation: Station = {
  Muscle: Station.BRAWN_SILO,
  Mysticality: Station.BRAIN_SILO,
  Moxie: Station.GROIN_SILO,
}[myPrimestat().toString()];
const stations = [
  Station.COAL_HOPPER, // double mainstat gain
  statStation, // main stats
  Station.VIEWING_PLATFORM, // all stats
  Station.GAIN_MEAT, // meat
  Station.TOWER_FIZZY, // mp regen
  Station.BRAIN_SILO, // myst stats
  Station.WATER_BRIDGE, // +ML
  Station.CANDY_FACTORY, // candies
] as Cycle;

export function AftercoreQuest(): Quest {
  return {
    name: "Aftercore",
    completed: () =>
      (myAdventures() === 0 &&
        totallyDrunk() &&
        have($item`Pizza of Legend`) &&
        have($item`Deep Dish of Legend`) &&
        have($item`Calzone of Legend`)) ||
      myDaycount() === 1,
    tasks: [
      {
        name: "Whitelist VIP Clan",
        completed: () => !args.clan || getClanName().toLowerCase() === args.clan.toLowerCase(),
        do: () => cliExecute(`/whitelist ${args.clan}`),
      },
      {
        name: "PvP Closet Safety 1",
        ready: () => args.pvp && get("autoSatisfyWithCloset") && !args.safepvp,
        completed: () => toBoolean(get("_safetyCloset1")),
        do: () => pvpCloset(1),
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
        completed: () => !have($item`Clan VIP Lounge key`) || get("_goorboFireworksPrepped", false),
        do: () => {
          visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
          set("_goorboFireworksPrepped", true);
        },
      },
      {
        name: "Breakfast",
        completed: () => get("breakfastCompleted"),
        do: () => cliExecute("breakfast"),
      },
      {
        name: "Apriling",
        ready: () => AprilingBandHelmet.canChangeSong(),
        completed: () => have($effect`Apriling Band Celebration Bop`),
        do: (): void => {
          AprilingBandHelmet.conduct($effect`Apriling Band Celebration Bop`);
        },
        limit: { tries: 1 },
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
            false,
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
              .repeat(),
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
            .repeat(),
        ),
        tracking: "Leveling",
      },
      {
        name: "Unlock Guild",
        ready: () =>
          myClass() === $class`Seal Clubber` &&
          Math.min(
            ...$items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) =>
              availableAmount(it),
            ),
          ) < 20 &&
          doSmol,
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
                  Macro.tryItem($item`electronics kit`),
                )
                .tryItem($item`porquoise-handled sixgun`)
                .trySkill($skill`Sing Along`)
                .attack()
                .repeat(),
            getTodaysHolidayWanderers(),
          )
          .macro(() =>
            Macro.step("pickpocket")
              .trySkill($skill`Sing Along`)
              .tryItem($item`porquoise-handled sixgun`)
              .attack()
              .repeat(),
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
              availableAmount(it),
            ),
          ) >= 40,
        acquire: $items`figurine of a wretched-looking seal, seal-blubber candle`.map((it) => ({
          item: it,
          num: 500,
        })),
        do: () => false,
      },
      {
        name: "PvP Closet Safety 2",
        ready: () => args.pvp && get("autoSatisfyWithCloset") && !args.safepvp,
        completed: () => toBoolean(get("_safetyCloset2")),
        do: () => pvpCloset(2),
      },
      {
        name: "Pre-Garbo Food Time",
        ready: () => myFullness() + 2 < fullnessLimit(),
        completed: () => have($effect`Feeling Fancy`),
        prepare: () => retrieveItem($item`roasted vegetable focaccia`),
        do: () => eatsilent($item`roasted vegetable focaccia`),
        clear: "all",
        tracking: "Garbo",
        limit: { tries: 1 }, //this will run again after installing CMC, by magic
      },
      {
        name: "Garbo",
        completed: () => stooperDrunk() || myAdventures() === 0,
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(`${args.garboascend} ${copyTarget()}`),
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
        name: "Barfing Drunk with Stooper",
        ready: () =>
          stooperDrunk() && have($familiar`Stooper`) && !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || totallyDrunk(),
        acquire: [{ item: $item`seal tooth` }],
        outfit: () => ({
          familiar: $familiar`Stooper`,
          modifier: `${maxBase()}, 2.5 meat, 0.6 items`,
        }),
        effects: $effects`How to Scam Tourists`, //need to add meat buffs that we can cast
        prepare: (): void => {
          restoreHp(0.75 * myMaxhp());
          restoreMp(20);
        },
        do: $location`Barf Mountain`,
        combat: new CombatStrategy()
          .macro(Macro.trySkill($skill`Curse of Weaksauce`), getTodaysHolidayWanderers())
          .macro(() =>
            Macro.step("pickpocket")
              .tryItem($item`train whistle`)
              .trySkill($skill`Bowl Straight Up`)
              .trySkill($skill`Sing Along`)
              .tryItem($item`porquoise-handled sixgun`)
              .externalIf(
                haveEquipped($item`mafia pointer finger ring`),
                Macro.trySkill($skill`Furious Wallop`)
                  .trySkill($skill`Summer Siesta`)
                  .trySkill($skill`Throw Shield`)
                  .trySkill($skill`Precision Shot`),
              )
              .attack()
              .repeat(),
          ),
        limit: { tries: 30 },
      },
      {
        name: "Nightcap (Wine Glass)",
        ready: () => have($item`Drunkula's wineglass`),
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP VALUE ${get("valueOfAdventure") - 1000}`),
      },
      {
        name: "Nightcap (Marginal)",
        ready: () => have($item`Beach Comb`) || have($item`Map to Safety Shelter Grimace Prime`),
        completed: () => totallyDrunk(),
        do: () => cliExecute(`CONSUME NIGHTCAP VALUE 500`),
      },
      {
        name: "Grimace Maps",
        ready: () => !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || !have($item`Map to Safety Shelter Grimace Prime`),
        do: () => cliExecute("grimace maps"),
        limit: { tries: 30 },
      },
      {
        name: "Garbo (Drunk)",
        ready: () => have($item`Drunkula's wineglass`),
        prepare: () => uneffect($effect`Beaten Up`),
        completed: () => myAdventures() === 0,
        do: () => cliExecute("garbo ascend"),
        post: () =>
          $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
            .filter((ef) => have(ef))
            .forEach((ef) => uneffect(ef)),
        clear: "all",
        tracking: "Garbo",
      },
      {
        name: "PvP Closet Safety 3",
        ready: () => args.pvp && get("autoSatisfyWithCloset") && !args.safepvp,
        completed: () => toBoolean(get("_safetyCloset3")),
        do: () => pvpCloset(3),
      },
      {
        name: "Comb Beach",
        ready: () => have($item`Beach Comb`),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`combo ${11 - get("_freeBeachWalksUsed") + myAdventures()}`),
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
        name: "Break Stone",
        ready: () => args.safepvp,
        completed: () => hippyStoneBroken() || !args.pvp,
        do: (): void => {
          visitUrl("peevpee.php?action=smashstone&pwd&confirm=on", true);
          visitUrl("peevpee.php?place=fight");
        },
      },
      {
        name: "PvP",
        completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
        do: (): void => {
          cliExecute("unequip");
          cliExecute("UberPvPOptimizer");
          cliExecute(`PVP_MAB target=${args.pvpTarget}`);
        },
      },
      {
        name: "Prepare for LoopSmol",
        ready: () => doSmol,
        completed: () =>
          have($item`Pizza of Legend`) &&
          have($item`Frosty's frosty mug`) &&
          have($item`Ol' Scratch's salad fork`),
        do: (): void => {
          if (
            mallPrice($item`Frosty's frosty mug`) < 200000 &&
            mallPrice($item`Ol' Scratch's salad fork`) < 200000
          )
            cliExecute(
              "acquire Pizza of Legend; acquire Frosty's frosty mug; acquire Ol' Scratch's salad fork",
            );
        },
      },
      {
        name: "Marble Soda!",
        ready: () => doCS,
        completed: () => have($item`tobiko marble soda`) || skipSoda,
        do: (): void => {
          if (mallPrice($item`tobiko marble soda`) < get("valueOfAdventure") * 2)
            retrieveItem($item`tobiko marble soda`);
          else {
            print(`Soda is too expensive, mallprice is ${mallPrice($item`tobiko marble soda`)}`);
            skipSoda = true;
          }
        },
      },
      {
        name: "Prepare for LoopCS",
        completed: () =>
          have($item`Pizza of Legend`) &&
          have($item`Deep Dish of Legend`) &&
          have($item`Calzone of Legend`),
        do: (): void => {
          !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`) : undefined;
          !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
          !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;
          !have($item`borrowed time`) ? retrieveItem($item`borrowed time`) : undefined;
        },
      },
      {
        name: "Let's do the trainset again",
        completed: () => TrainSet.cycle().toString === stations.toString,
        do: (): void => {
          const offset = get("trainsetPosition") % 8;
          const newStations: TrainSet.Station[] = [];
          for (let i = 0; i < 8; i++) {
            const newPos = (i + offset) % 8;
            newStations[newPos] = stations[i];
          }
          visitUrl("campground.php?action=workshed");
          visitUrl("main.php");
          setConfiguration(newStations as Cycle);
        },
        limit: { tries: 5 },
      },
      {
        name: "Job's Done",
        completed: () => jobsDone,
        do: (): void => {
          jobsDone = true;
        },
      },
    ],
  };
}
