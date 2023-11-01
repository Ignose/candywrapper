import { CombatStrategy } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  cliExecute,
  closetAmount,
  getCampground,
  getClanName,
  getWorkshed,
  guildStoreAvailable,
  handlingChoice,
  haveEffect,
  haveEquipped,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  itemAmount,
  myAdventures,
  myClass,
  myHp,
  myInebriety,
  myMaxhp,
  myPrimestat,
  putCloset,
  pvpAttacksLeft,
  restoreHp,
  restoreMp,
  retrieveItem,
  takeCloset,
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
  $path,
  $phylum,
  $skill,
  ascend,
  AsdonMartin,
  DNALab,
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
  toMoonSign,
  totallyDrunk,
} from "./utils";
import { args } from "../args";

export function AftercoreQuest(): Quest {
  return {
    name: "Aftercore",
    ready: () => getCurrentLeg() === 0,
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
          args.garbo.includes("nobarf"),
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
        name: "Garbo",
        completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0) || holiday().includes("Halloween"),
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
        name: "Garboween",
        ready: () => holiday().includes("Halloween"),
        completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
        prepare: () => uneffect($effect`Beaten Up`),
        do: (): void => {
            cliExecute(`${args.garboascend} nodiet nobarf`);
            cliExecute("consume ALL");
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
        name: "Do Pizza",
        completed: () => have($item`Pizza of Legend`) && have($item`Deep Dish of Legend`) && have($item`Calzone of Legend`),
        do: (): void => {
        !have($item`Pizza of Legend`) ? retrieveItem($item`Pizza of Legend`): undefined;
        !have($item`Deep Dish of Legend`) ? retrieveItem($item`Deep Dish of Legend`) : undefined;
        !have($item`Calzone of Legend`) ? retrieveItem($item`Calzone of Legend`) : undefined;} ,
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
        name: "Freecandy Drunk",
        ready: () => holiday().includes("Halloween"),
        completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
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
        name: "Garbo (Drunk)",
        ready: () => have($item`Drunkula's wineglass`),
        prepare: () => uneffect($effect`Beaten Up`),
        completed: () => myAdventures() === 0 || holiday().includes("Halloween"),
        do: () => cliExecute("garbo ascend"),
        post: () =>
          $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
            .filter((ef) => have(ef))
            .forEach((ef) => uneffect(ef)),
        clear: "all",
        tracking: "Garbo",
      },
      {
        name: "Grimace Maps",
        ready: () => have($item`Map to Safety Shelter Grimace Prime`) && totallyDrunk(),
        completed: () => !have($item`Map to Safety Shelter Grimace Prime`) || myAdventures() === 0,
        do: () => cliExecute("grimace maps"),
      },
      {
        name: "Comb Beach",
        ready: () => have($item`Beach Comb`) && totallyDrunk(),
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
        name: "PvP",
        completed: () => pvpAttacksLeft() === 0 || !hippyStoneBroken(),
        do: (): void => {
          cliExecute("unequip");
          cliExecute("UberPvPOptimizer");
          cliExecute("swagger");
        },
      },
      {
        name: "Summon Soap Knife",
        completed: () => !have($skill`That's Not a Knife`) || get("_discoKnife"),
        prepare: () => putCloset(itemAmount($item`soap knife`), $item`soap knife`),
        do: () => useSkill($skill`That's Not a Knife`),
        post: () => takeCloset(closetAmount($item`soap knife`), $item`soap knife`),
      },
      {
        name: "Ascend Community Service",
        completed: () => getCurrentLeg() >= Leg.CommunityService, //Change this
        do: (): void => {

          const moonsign = toMoonSign(args.moonsign);
          ascend({
            path: $path`Community Service`,
            playerClass: args.class,
            lifestyle: 2,
            moon: moonsign,
            consumable: $item`astral six-pack`,
            pet: args.astralpet === $item`none` ? undefined : args.astralpet,
            });
          cliExecute("refresh all");
        },
      },
    ],
  };
}
