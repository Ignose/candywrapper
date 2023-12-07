import {
  availableAmount,
  buy,
  cliExecute,
  drink,
  getCampground,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  haveEffect,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  itemAmount,
  myAdventures,
  myClass,
  myHp,
  myInebriety,
  myLevel,
  myMaxhp,
  myPrimestat,
  mySign,
  pvpAttacksLeft,
  restoreHp,
  retrieveItem,
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
  AsdonMartin,
  DNALab,
  get,
  getTodaysHolidayWanderers,
  have,
  Macro,
  set,
  uneffect,
} from "libram";
import { args } from "../args";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  bestFam,
  canDiet,
  doneAdventuring,
  getGarden,
  isGoodGarboScript,
  maxBase,
  noML,
  stooperDrunk,
  totallyDrunk,
} from "./utils";
import { CombatStrategy } from "grimoire-kolmafia";

export const ChronoQuest: Quest = {
      name: "Running Garbo Ascend, Chrono",
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
            getWorkshed() !== $item`Asdon Martin keyfob` ||
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
            getWorkshed() !== $item`Asdon Martin keyfob` ||
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
          name: "Breakfast",
          completed: () => get("breakfastCompleted"),
          do: () => cliExecute("breakfast"),
        },
        {
          name: "Consume All",
          completed: () => !canDiet(),
          prepare: () => uneffect($effect`Beaten Up`),
          do: () => cliExecute("consume ALL"),
          post: () =>
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef)),
        },
        {
          name: "Garbo",
          ready: () => !holiday().includes("Halloween"),
          completed: () => (myAdventures() === 0 && !canDiet()) || stooperDrunk(),
          prepare: () => uneffect($effect`Beaten Up`),
          do: () => cliExecute(`${args.garbo} nobarf nodiet ascend`),
          post: () =>
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef)),
          clear: "all",
          tracking: "Garbo",
        },
          {
            name: "Chrono",
            ready: () => holiday().includes("Halloween"),
            completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
            prepare: () => uneffect($effect`Beaten Up`),
            do: (): void => {
                cliExecute(`chrono ${myAdventures()}`);
            },
            post: () => {
              if (myAdventures() === 0)
                $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
                  .filter((ef) => have(ef))
                  .forEach((ef) => uneffect(ef));
            },
            clear: "all",
            tracking: "Chrono",
            limit: { tries: 1 },
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
          completed: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
          do: (): void => {
          !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`): undefined;
          !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
          !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;} ,
        },
        {
          name: "Plant Garden",
          ready: () =>
            doneAdventuring() &&
            !!$items`packet of rock seeds, packet of thanksgarden seeds, Peppermint Pip Packet, packet of winter seeds, packet of beer seeds, packet of pumpkin seeds, packet of dragon's teeth`.find(
              (it) => have(it)
            ),
          completed: () => getGarden() !== $item`packet of tall grass seeds`,
          do: () => {
            use(
              $items`packet of rock seeds, packet of thanksgarden seeds, Peppermint Pip Packet, packet of winter seeds, packet of beer seeds, packet of pumpkin seeds, packet of dragon's teeth`.find(
                (it) => have(it)
              ) || $item`none`
            );
            cliExecute("garden pick");
          },
        },
        {
            name: "Chrono Drunk",
            ready: () => holiday().includes("Halloween"),
            completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
            prepare: () => uneffect($effect`Beaten Up`),
            do: (): void => {
                cliExecute(`chrono ${myAdventures()}`);
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
      ],
    }
