import { CombatStrategy, step } from "grimoire-kolmafia";
import {
  availableAmount,
  buy,
  buyUsingStorage,
  cliExecute,
  closetAmount,
  drink,
  eat,
  Effect,
  equip,
  fullnessLimit,
  getClanName,
  getWorkshed,
  gnomadsAvailable,
  itemAmount,
  mallPrice,
  myAdventures,
  myClass,
  myFamiliar,
  myFullness,
  myInebriety,
  myMaxhp,
  myMeat,
  myTurncount,
  pullsRemaining,
  restoreHp,
  restoreMp,
  retrieveItem,
  storageAmount,
  takeCloset,
  toInt,
  use,
  useFamiliar,
  useSkill,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $effect,
  $effects,
  $familiar,
  $familiars,
  $item,
  $items,
  $location,
  $locations,
  $monsters,
  $phylum,
  $skill,
  AsdonMartin,
  AutumnAton,
  clamp,
  DNALab,
  ensureEffect,
  get,
  getBanishedMonsters,
  getTodaysHolidayWanderers,
  have,
  Macro,
  Robortender,
  set,
  Snapper,
  SongBoom,
} from "libram";
import { args } from "../args";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  backstageItemsDone,
  bestFam,
  maxBase,
  meatFam,
} from "./utils";

const checkMelange =
  get("valueOfAdventure") * 45 > mallPrice($item`spice melange`) &&
  !have($item`designer sweatpants`);

export function howManySausagesCouldIEat() {
  if (!have($item`Kramco Sausage-o-Matic™`)) return 0;
  // You may be full but you can't be overfull
  if (myFullness() > fullnessLimit()) return 0;

  return clamp(
    23 - get("_sausagesEaten"),
    0,
    itemAmount($item`magical sausage`) + itemAmount($item`magical sausage casing`)
  );
}

const definePulls = args.cloop ? args.cspulls : args.gloop ? args.gyoupulls : args.smolpulls;

const runScript = args.cloop ? args.csscript : args.gloop ? args.gyouscript : args.smolscript;

function firstWorkshed() {
  return (
    $items`model train set, Asdon Martin keyfob, cold medicine cabinet, Little Geneticist DNA-Splicing Lab, portable Mayo Clinic`.find(
      (it) => have(it) || getWorkshed() === it || storageAmount(it) > 0
    ) || $item`none`
  );
}


export function RunQuests(): Quest[] {
  return [
    {
      name: "Run",
      completed: () => getCurrentLeg() !== Leg.Run || get("kingLiberated", false),
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
            !definePulls.find(
              (it) => !have(it) && !get("_roninStoragePulls").includes(toInt(it).toString())
            ), //can't find a pull that (we dont have and it hasn't been pulled today)
          do: () =>
            definePulls.forEach((it) => {
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
          name: "Install First Workshed",
          ready: () => have(firstWorkshed()),
          completed: () =>
            firstWorkshed() === $item`none` ||
            get("_workshedItemUsed") ||
            getWorkshed() !== $item`none`,
          do: () => use(firstWorkshed()),
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
          name: "Prepare Empathy",
          completed: () => get("_empathyReady", false) || !args.smol,
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
          do: () => cliExecute(runScript),
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
          completed: () => myInebriety() >= 2 || !args.smol,
          do: (): void => {
            if (have($skill`The Ode to Booze`)) useSkill($skill`The Ode to Booze`);
            drink($item`astral pilsner`, 1);
          },
          clear: "all",
          tracking: "Run",
        },
        {
          name: "Sausages",
          completed: () => howManySausagesCouldIEat() === 0 || !args.smol,
          do: (): void => {
            eat($item`magical sausage`, howManySausagesCouldIEat());
          },
          clear: "all",
          tracking: "Run",
        },
        {
          name: "Free King",
          ready: () => step("questL13Final") > 11 && !(myClass() === $class`Grey Goo` && myAdventures() >= 40),
          completed: () => get("kingLiberated", false),
          do: (): void => {
            visitUrl("place.php?whichplace=nstower&action=ns_11_prism");
          },
          post: (): void => {
            cliExecute("ptrack add endRun");
          },
          clear: "all",
        },
      ],
    },
    {
      name: "Grey You Ronin",
      completed: () =>
        myClass() !== $class`Grey Goo` || myAdventures() <= 40,
      tasks: [
        {
          name: "Uncloset Special Seasoning",
          completed: () => myTurncount() >= 1000 || closetAmount($item`Special Seasoning`) === 0,
          do: () => takeCloset(closetAmount($item`Special Seasoning`), $item`Special Seasoning`),
          tracking: "Run",
        },
        {
          name: "Train Gnome Skills",
          ready: () => myMeat() >= 5000 && gnomadsAvailable(),
          completed: () => have($skill`Torso Awareness`),
          do: () =>
            visitUrl(`gnomes.php?action=trainskill&whichskill=${toInt($skill`Torso Awareness`)}`),
        },
        {
          name: "Autumnaton",
          completed: () =>
            !have($item`autumn-aton`) || AutumnAton.turnsForQuest() >= myAdventures() + 10,
          do: () => {
            if (
              itemAmount($item`imp air`) < 5 &&
              !have($skill`Liver of Steel`) &&
              !have($item`steel margarita`) &&
              !have($item`Azazel's tutu`)
            ) {
              AutumnAton.sendTo($location`The Laugh Floor`);
            }
            if (
              itemAmount($item`bus pass`) < 5 &&
              !have($skill`Liver of Steel`) &&
              !have($item`steel margarita`) &&
              !have($item`Azazel's tutu`)
            ) {
              AutumnAton.sendTo($location`Infernal Rackets Backstage`);
            }
            const autumnAtonZones = $locations`The Toxic Teacups, The Oasis, The Deep Dark Jungle, The Bubblin' Caldera, The Sleazy Back Alley`;
            if (AutumnAton.turnsForQuest() < myAdventures() + 10) {
              AutumnAton.sendTo(autumnAtonZones);
            }
          },
        },
        {
          name: "Meat Boombox",
          completed: () =>
            !have($item`SongBoom™ BoomBox`) ||
            get("boomBoxSong") === "Total Eclipse of Your Meat" ||
            get("_boomBoxSongsLeft") === 0,
          do: () => SongBoom.setSong("Total Eclipse of Your Meat"),
        },
        {
          name: "Make Soda Bread",
          completed: () =>
            getWorkshed() !== $item`Asdon Martin keyfob` ||
            have($effect`Driving Observantly`) ||
            availableAmount($item`loaf of soda bread`) >= 10,
          do: () => {
            if (availableAmount($item`wad of dough`) < 10) {
              buy($item`all-purpose flower`);
              use($item`all-purpose flower`);
            }
            retrieveItem(10, $item`loaf of soda bread`);
          },
        },
        {
          name: "Drive Observantly",
          completed: () =>
            getWorkshed() !== $item`Asdon Martin keyfob` || have($effect`Driving Observantly`),
          do: () => AsdonMartin.drive($effect`Driving Observantly`, 30, false),
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
            .macro(Macro.skill($skill`Infinite Loop`), getTodaysHolidayWanderers())
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
          name: "Robort Collect Fish Head",
          ready: () => have($item`boxed wine`) && meatFam() === $familiar`Robortender`,
          completed: () =>
            !have($item`miniature crystal ball`) ||
            !have($familiar`Robortender`) ||
            Robortender.currentDrinks().includes($item`drive-by shooting`) ||
            have($item`fish head`) ||
            have($item`piscatini`) ||
            have($item`drive-by shooting`),
          outfit: () => ({
            familiar: get("crystalBallPredictions").includes(
              ":The Copperhead Club:Mob Penguin Capo"
            )
              ? $familiar`Robortender`
              : have($familiar`Red-Nosed Snapper`)
              ? $familiar`Red-Nosed Snapper`
              : bestFam(),
            famequip: $item`miniature crystal ball`,
            // ...(have($item`latte lovers member's mug`) &&
            // !get("_latteCopyUsed") &&
            // get("crystalBallPredictions").includes(":The Copperhead Club:Mob Penguin Capo")
            //   ? { offhand: $item`latte lovers member's mug` }
            //   : {}),
            modifier: `${maxBase()}`,
          }),
          prepare: (): void => {
            if (
              myFamiliar() === $familiar`Red-Nosed Snapper` &&
              Snapper.getTrackedPhylum() !== $phylum`penguin`
            )
              Snapper.trackPhylum($phylum`penguin`);
            restoreHp(0.75 * myMaxhp());
            restoreMp(20);
          },
          do: $location`The Copperhead Club`,
          combat: new CombatStrategy()
            .macro(Macro.skill($skill`Infinite Loop`), getTodaysHolidayWanderers())
            // .macro(Macro.trySkill($skill`Offer Latte to Opponent`), $monster`Mob Penguin Capo`)
            .macro(
              () =>
                Macro.externalIf(
                  !$monsters`Copperhead Club bartender, fan dancer, ninja dressed as a waiter, waiter dressed as a ninja`.find(
                    (mob) => mob === getBanishedMonsters().get($skill`System Sweep`) //get("banishedMonsters").includes(`${mob.name}:System Sweep`)
                  ),
                  Macro.trySkill($skill`System Sweep`)
                ),
              $monsters`Copperhead Club bartender, fan dancer, ninja dressed as a waiter, waiter dressed as a ninja`
            )
            .macro(
              Macro.tryItem($item`train whistle`)
                .tryItem($item`porquoise-handled sixgun`)
                .trySkill($skill`Sing Along`)
                .attack()
                .repeat()
            ),
          limit: { tries: 10 },
        },
        {
          name: "Feed Robortender",
          ready: () =>
            (have($item`boxed wine`) && have($item`fish head`)) ||
            have($item`piscatini`) ||
            have($item`drive-by shooting`),
          completed: () =>
            !have($familiar`Robortender`) ||
            Robortender.currentDrinks().includes($item`drive-by shooting`),
          do: () => {
            retrieveItem($item`drive-by shooting`);
            useFamiliar($familiar`Robortender`);
            Robortender.feed($item`drive-by shooting`);
          },
        },
        {
          name: "Laugh Floor",
          completed: () =>
            have($skill`Liver of Steel`) ||
            have($item`steel margarita`) ||
            have($item`Azazel's lollipop`) ||
            have($item`observational glasses`),
          prepare: (): void => {
            if (have($skill`Piezoelectric Honk`) && !have($effect`Hooooooooonk!`))
              useSkill($skill`Piezoelectric Honk`);
            $effects`The Sonata of Sneakiness, Darkened Photons, Shifted Phase`.forEach(
              (ef: Effect) => cliExecute(`uneffect ${ef}`)
            );
            restoreHp(0.75 * myMaxhp());
            restoreMp(20);
          },
          do: $location`The Laugh Floor`,
          outfit: () => ({
            familiar: bestFam(),
            modifier: `${maxBase()}, 100 combat rate, 3 item, 250 bonus carnivorous potted plant, 100 familiar experience`,
          }),
          combat: new CombatStrategy()
            .macro(Macro.skill($skill`Infinite Loop`), getTodaysHolidayWanderers())
            .macro(
              Macro.tryItem($item`train whistle`)
                .tryItem($item`porquoise-handled sixgun`)
                .trySkill($skill`Double Nanovision`)
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
          prepare: (): void => {
            if (have($skill`Photonic Shroud`) && !have($effect`Darkened Photons`))
              useSkill($skill`Photonic Shroud`);
            if (have($skill`Phase Shift`) && !have($effect`Shifted Phase`))
              useSkill($skill`Phase Shift`);
            $effects`Carlweather's Cantata of Confrontation, Hooooooooonk!`.forEach((ef: Effect) =>
              cliExecute(`uneffect ${ef}`)
            );
            restoreHp(0.75 * myMaxhp());
            restoreMp(20);
          },
          do: $location`Infernal Rackets Backstage`,
          outfit: () => ({
            familiar: bestFam(),
            modifier: `${maxBase()}, -100 combat rate, 3 item, 250 bonus carnivorous potted plant, 100 familiar experience`,
          }),
          combat: new CombatStrategy()
            .macro(Macro.skill($skill`Infinite Loop`), getTodaysHolidayWanderers())
            .macro(
              Macro.tryItem($item`train whistle`)
                .tryItem($item`porquoise-handled sixgun`)
                .trySkill($skill`Double Nanovision`)
                .repeat()
            ),
          limit: { tries: 15 },
        },
        {
          name: "In-Run Farm",
          completed: () => myAdventures() <= 40,
          acquire: [{ item: $item`seal tooth` }],
          outfit: () => ({
            familiar: meatFam(),
            modifier: `${maxBase()}, 2.5 meat, 0.6 items`,
          }),
          prepare: (): void => {
            if (have($item`How to Avoid Scams`)) ensureEffect($effect`How to Scam Tourists`);
            restoreHp(0.75 * myMaxhp());
            restoreMp(20);
          },
          do: $location`Barf Mountain`,
          combat: new CombatStrategy()
            .macro(Macro.skill($skill`Infinite Loop`), getTodaysHolidayWanderers())
            .macro(() =>
              Macro.tryItem($item`train whistle`)
                .trySkill($skill`Bowl Straight Up`)
                .trySkill($skill`Sing Along`)
                .trySkill($skill`Extract Jelly`)
                .tryItem($item`porquoise-handled sixgun`)
                .externalIf(
                  myFamiliar() === $familiar`Hobo Monkey`,
                  Macro.while_(
                    `!match "shoulder, and hands you some Meat." && !pastround 20 && !hppercentbelow 25`,
                    Macro.item($item`seal tooth`)
                  )
                )
                .trySkill($skill`Double Nanovision`)
                .attack()
                .repeat()
            ),
          limit: { tries: 550 },
          tracking: "GooFarming",
        },
      ],
    },
  ];
}
