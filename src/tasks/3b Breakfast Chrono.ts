import {
  cliExecute,
  inebrietyLimit,
  myAdventures,
  myInebriety,
  useFamiliar,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  get,
  have,
  uneffect,
} from "libram";
import { getCurrentLeg, Leg, Quest } from "./structure";
import {
  canDiet,
  maxBase,
  stooperDrunk,
  totallyDrunk,
} from "./utils";
import { args } from "../args";

const chrono = args.chrono ? true : false;

export function AftercoreQuest(): Quest {
  return {
    name: "Aftercore",
    ready: () => chrono,
    completed: () => getCurrentLeg() > Leg.Aftercore,
    tasks: [
      {
        name: "Chrono",
        completed: () => stooperDrunk() || (!canDiet() && myAdventures() === 0),
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(`Chrono ${myAdventures()}`),
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
        name: "Chrono Drunk with Stooper",
        ready: () =>
          stooperDrunk() && have($familiar`Stooper`) && !have($item`Drunkula's wineglass`),
        completed: () => myAdventures() === 0 || totallyDrunk(),
        acquire: [{ item: $item`seal tooth` }],
        outfit: () => ({
          familiar: $familiar`Stooper`,
          modifier: `${maxBase()}, 2.5 meat, 0.6 items`,
        }),
        prepare: () => uneffect($effect`Beaten Up`),
        do: () => cliExecute(`Chrono ${myAdventures()}`),
        post: () => {
          if (myAdventures() === 0)
            $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
              .filter((ef) => have(ef))
              .forEach((ef) => uneffect(ef));
        },
        clear: "all",
        tracking: "Chrono",
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
        name: "Chrono (Drunk)",
        ready: () => have($item`Drunkula's wineglass`),
        prepare: () => uneffect($effect`Beaten Up`),
        completed: () => myAdventures() === 0,
        do: () => cliExecute(`Chrono ${myAdventures()}`),
        post: () =>
          $effects`Power Ballad of the Arrowsmith, Stevedave's Shanty of Superiority, The Moxious Madrigal, The Magical Mojomuscular Melody, Aloysius' Antiphon of Aptitude, Ur-Kel's Aria of Annoyance`
            .filter((ef) => have(ef))
            .forEach((ef) => uneffect(ef)),
        clear: "all",
        tracking: "Garbo",
      },
    ],
  };
}
