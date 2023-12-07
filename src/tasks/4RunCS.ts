import {
  buyUsingStorage,
  cliExecute,
  getClanName,
  pullsRemaining,
  storageAmount,
  toInt,
  visitUrl,
} from "kolmafia";
import {
  $item,
  get,
  have,
  set,
} from "libram";
import { args } from "../args";
import { getCurrentLeg, Leg, Quest } from "./structure";

export const CSQuests: Quest = {
      name: "Smol Run",
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
          name: "Run",
          completed: () => get("kingLiberated", false),
          do: () => cliExecute(args.csscript),
          clear: "all",
          tracking: "Run",
        },
      ],
}
