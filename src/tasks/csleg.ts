import {
  buy,
  cliExecute,
  drink,
  getClanName,
  getWorkshed,
  haveEffect,
  hippyStoneBroken,
  holiday,
  inebrietyLimit,
  itemAmount,
  myAdventures,
  myInebriety,
  myLevel,
  mySign,
  numericModifier,
  print,
  pvpAttacksLeft,
  retrieveItem,
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
  $familiars,
  $item,
  $items,
  $skill,
  AsdonMartin,
  get,
  have,
  set,
  uneffect,
} from "libram";
import { args } from "../args";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  canDiet,
  doneAdventuring,
  getGarden,
  stooperDrunk,
  totallyDrunk,
} from "./utils";

let pajamas = false;

export function CSQuests(): Quest[] {
  return [
    {
      name: "Community Service Run",
      completed: () =>
        getCurrentLeg() !== Leg.CommunityService ||
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
          name: "Run",
          completed: () => get("kingLiberated"),
          do: () => cliExecute(args.csscript),
          clear: "all",
          tracking: "Run",
        },
      ],
    },
    {
      name: "Post-Community Service Aftercore",
      ready: () => getCurrentLeg() === Leg.last,
      completed: () => totallyDrunk() && pajamas,
      tasks: [
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
          name: "Garbo",
          ready: () => get("_stenchAirportToday") || get("stenchAirportAlways") || holiday().includes("Halloween"),
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
            name: "Garboween",
            ready: () => holiday().includes("Halloween"),
            completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
            prepare: () => uneffect($effect`Beaten Up`),
            do: (): void => {
                cliExecute(`${args.garbo} nodiet nobarf`);
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
          name: "Offhand Remarkable",
          // eslint-disable-next-line libram/verify-constants
          ready: () => have($item`august scepter`),
          // eslint-disable-next-line libram/verify-constants
          completed: () => have($effect`Offhand Remarkable`) || get("_aug13Cast", false),
          do: () =>
            // eslint-disable-next-line libram/verify-constants
            useSkill($skill`Aug. 13th: Left/Off Hander's Day!`),
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
          name: "Alert-No Nightcap",
          ready: () => !doneAdventuring(),
          completed: () => stooperDrunk(),
          do: (): void => {
            const targetAdvs = 100 - numericModifier("adventures");
            print("candyWrapper completed, but did not overdrink.", "red");
            if (targetAdvs < myAdventures() && targetAdvs > 0)
              print(
                `Rerun with fewer than ${targetAdvs} adventures for candyWrapper to handle your diet`,
                "red"
              );
            else print("Something went wrong.", "red");
          },
        },
      ],
    },
  ];
}
