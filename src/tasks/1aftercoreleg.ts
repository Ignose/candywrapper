import { CombatStrategy } from "grimoire-kolmafia";
import {
  adv1,
  availableAmount,
  buy,
  cliExecute,
  getCampground,
  getClanName,
  getProperty,
  guildStoreAvailable,
  haveEquipped,
  hippyStoneBroken,
  inebrietyLimit,
  itemAmount,
  mallPrice,
  maximize,
  myAdventures,
  myClass,
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
  setProperty,
  toInt,
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
  $skill,
  $stat,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  set,
  uneffect,
} from "libram";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  bestFam,
  canDiet,
  getGarden,
  isGoodGarboScript,
  maxBase,
  noML,
  stooperDrunk,
  totallyDrunk,
} from "./utils";
import { args } from "../args";

const doSmol = args.smol ? true : false;
const doCS = args.cloop ? true : false;

export function AftercoreQuest(): Quest {
  return {
    name: "Aftercore",
    completed: () => getCurrentLeg() > Leg.Aftercore,
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
        name: "Ptrack Start",
        completed: () => get("_ptrackStarted", false),
        do: (): void => {
          cliExecute("ptrack add coffeeBegin; set _ptrackStarted = true");
          print("Doing start-of-day activites!", "teal");
          setProperty("_monstersMapped", "1");
        }
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
        ready: () => have($item`S.I.T. Course Completion Certificate`),
        completed: () => get("_sitCourseCompleted", false),
        choices: {
          1494: 2,
        },
        do: () =>
          use($item`S.I.T. Course Completion Certificate`),
      },
      {
        name: "LGR Seed",
        ready: () =>
          //best guess if we're going to Dinseylandfill later in the day
          isGoodGarboScript(args.garboascend),
        completed: () =>
          !have($item`lucky gold ring`) || get("_stenchAirportToday") || get("stenchAirportAlways"),
        do: () => use($item`one-day ticket to Dinseylandfill`),
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
        name: "Clip Art Club Prevention",
        completed: () => get("_clipartSummons") >= 3,
        do: () => retrieveItem($item`box of Familiar Jacks`, 3 - get("_clipartSummons")),
      },
      {
        name: "Garbo",
        completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(args.garboascend),
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
                  .trySkill($skill`Precision Shot`)
              )
              .attack()
              .repeat()
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
        name: "PvP",
        completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
        do: (): void => {
          cliExecute("unequip");
          cliExecute("UberPvPOptimizer");
          cliExecute("swagger");
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
              "acquire Pizza of Legend; acquire Frosty's frosty mug; acquire Ol' Scratch's salad fork"
            );
        },
      },
      {
        name: "Prepare for LoopCS",
        ready: () => doCS,
        completed: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        do: (): void => {
        !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`): undefined;
        !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
        !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;
        !have($item`borrowed time`) ? retrieveItem($item`borrowed time`) : undefined;
        },
      },
      {
        name: "Ptrack Aftercore",
        ready: () => myAdventures() === 0,
        completed: () => get("_ptrackAftercore", false),
        do: (): void => {
        cliExecute("ptrack add Garbo1");
        setProperty("_ptrackAftercore", "true");
        },
      },
    ],
  };
}
