import {
  cliExecute,
  myAdventures,
  numericModifier,
  print,
  retrieveItem,
  use,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $familiar,
  $item,
  $skill,
  gameDay,
  get,
  have,
} from "libram";
import { args } from "../args";
import { Quest } from "../structure";
import {
  doneAdventuring,
  stooperDrunk,
} from "../utils";

let pajamas = false;
const offhandWorth = have($familiar`Left-Hand Man`);

export function NightCapQuest(): Quest {
  return {
    name: "NightCap",
    ready: () => !pajamas,
    completed: () => pajamas,
    tasks: [
      {
        name: "Offhand Remarkable",
        ready: () => have($item`august scepter`),
        completed: () => have($effect`Offhand Remarkable`) ||
          get("_aug13Cast", false) ||
          (get("_augSkillsCast",0) >=5 && gameDay().getDate() !== 13),
        do: () =>
          useSkill($skill`Aug. 13th: Left/Off Hander's Day!`),
      },
      {
        name: "Alternative Offhand Remarkable",
        ready: () => offhandWorth,
        completed: () => have($effect`Offhand Remarkable`),
        do: (): void => {
          retrieveItem($item`pocket wish`);
          cliExecute("genie effect Aug. 13th: Left/Off Hander's Day!");
        }
      },
      {
        name: "Item Cleanup",
        // eslint-disable-next-line libram/verify-constants
        completed: () => get("_cleanupToday", false) || args.itemcleanup === "",
        do: (): void => {
          cliExecute(`${args.itemcleanup}`);
          cliExecute("set _cleanupToday = true");
        },
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
          cliExecute("maximize adv, switch disembodied hand, -switch left-hand man")
          pajamas = true;
        },
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
  };
}
