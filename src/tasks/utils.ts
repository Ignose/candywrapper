import {
  chew,
  cliExecute,
  Effect,
  Familiar,
  fullnessLimit,
  gamedayToInt,
  getCampground,
  inebrietyLimit,
  Item,
  itemAmount,
  mallPrice,
  Monster,
  myAdventures,
  myFamiliar,
  myFullness,
  myInebriety,
  mySpleenUse,
  print,
  putCloset,
  retrieveItem,
  spleenLimit,
  urlEncode,
  use,
  visitUrl,
} from "kolmafia";
import {
  $familiar,
  $familiars,
  $item,
  $items,
  $monster,
  $phylum,
  ChestMimic,
  gameDay,
  get,
  getBanishedMonsters,
  have,
  set,
  Snapper,
} from "libram";

import { args } from "../args";
import { garboAverageValue, garboValue } from "../engine/profits";

export function haveAll(its: Item[]): boolean {
  return its.reduce((a, it) => a && have(it), true);
}
export function haveAny(its: Item[]): boolean {
  return its.reduce((a, it) => a || have(it), false);
}

type MoonSign =
  | number
  | "mongoose"
  | "wallaby"
  | "vole"
  | "platypus"
  | "opossum"
  | "marmot"
  | "wombat"
  | "blender"
  | "packrat"
  | "gnomads"
  | "knoll"
  | "canadia";
export function toMoonSign(str: string | MoonSign): MoonSign {
  if (
    typeof str === "string" &&
    [
      "mongoose",
      "wallaby",
      "vole",
      "platypus",
      "opossum",
      "marmot",
      "wombat",
      "blender",
      "packrat",
      "gnomads",
      "knoll",
      "canadia",
    ].includes(str)
  )
    return str as MoonSign;
  throw new Error(`${str} is not a valid MoonSign`);
}

const minusMLItems = $items`nasty rat mask, Drowsy Sword, HOA regulation book, pocketwatch on a chain, security flashlight, Space Trip safety headphones, pine cone necklace, red badge, mushroom badge, water wings for babies, white earbuds, discarded bowtie`;
export function noML(): string {
  return `-ml, ${minusMLItems
    .filter((it) => have(it))
    .map((it) => `-equip ${it.name}`)
    .join(", ")}`;
}

export function maxBase(): string {
  return `175 bonus June Cleaver, ${
    garboValue($item`FunFunds™`) / 20 + 5
  } bonus lucky gold ring, 250 bonus Mr. Cheeng's spectacles, ${
    0.4 * get("valueOfAdventure")
  } bonus mafia thumb ring, ${
    get("sweat") + get("_sweatOutSomeBoozeUsed") * 25 < 75 ? "250 bonus designer sweatpants," : ""
  } 100 bonus Pantsgiving, 10 bonus tiny stillsuit`;
}

function famValue(fam: Familiar, mob?: Monster) {
  switch (fam) {
    case $familiar`Red-Nosed Snapper`:
      if (mob && Snapper.getTrackedPhylum() && mob.phylum === Snapper.getTrackedPhylum())
        return (
          garboValue(
            Snapper.phylumItem.get(Snapper.getTrackedPhylum() || $phylum`none`) || $item`none`,
          ) / 11
        );
      return 0;
    case $familiar`Cookbookbat`:
      return $items``.find((it) => it.name.indexOf("Recipe of Before Yore") >= 0 && have(it))
        ? garboAverageValue(
            ...$items`Yeast of Boris, Vegetable of Jarlsberg, St. Sneaky Pete's Whey`,
          ) *
            (3.0 / 11)
        : 5000;
    case $familiar`Shorter-Order Cook`:
      return (
        garboAverageValue(
          ...$items`short white, short beer, short glass of water, short stack of pancakes, short stick of butter`,
        ) / 11
      );
  }
  return 0;
}

export function meatFam() {
  return (
    $familiars`Space Jellyfish, Robortender, Hobo Monkey, Cat Burglar`.find((fam) => have(fam)) ||
    $familiar`Leprechaun`
  );
}

export function bestFam(mob?: Monster) {
  const fams = $familiars`Grey Goose, Red-Nosed Snapper, Cookbookbat, Shorter-Order Cook`
    .filter((fam) => have(fam))
    .sort((a, b) => famValue(b, mob) - famValue(a, mob));
  return fams.find((fam) => have(fam));
}

export function canDiet(): boolean {
  return (
    myFullness() < fullnessLimit() ||
    mySpleenUse() < spleenLimit() ||
    myInebriety() < inebrietyLimit() ||
    (have($item`distention pill`) && !get("_distentionPillUsed")) ||
    args.smol ||
    (have($item`synthetic dog hair pill`) && !get("_syntheticDogHairPillUsed")) ||
    (have($item`designer sweatpants`) && get("_sweatOutSomeBoozeUsed") < 3 && get("sweat") >= 25) ||
    (have($item`mime army shotglass`) && !get("_mimeArmyShotglassUsed")) ||
    (get("currentMojoFilters") < 3 &&
      mallPrice($item`mojo filter`) + mallPrice($item`transdermal smoke patch`) <
        2.5 * get("valueOfAdventure"))
  );
}

export function stooperDrunk(): boolean {
  return (
    myInebriety() > inebrietyLimit() ||
    (myInebriety() === inebrietyLimit() && myFamiliar() === $familiar`Stooper`)
  );
}

export function totallyDrunk(): boolean {
  return have($familiar`Stooper`) && myFamiliar() !== $familiar`Stooper`
    ? myInebriety() > inebrietyLimit() + 1
    : myInebriety() > inebrietyLimit();
}

export function doneAdventuring(): boolean {
  return (!canDiet() && myAdventures() === 0) || stooperDrunk();
}

const gardens = $items`packet of pumpkin seeds, Peppermint Pip Packet, packet of dragon's teeth, packet of beer seeds, packet of winter seeds, packet of thanksgarden seeds, packet of tall grass seeds, packet of mushroom spores, packet of rock seeds`;
export function getGarden(): Item {
  return gardens.find((it) => it.name in getCampground()) || $item`none`;
}

let banishes: Item[];
export function nextUnusedBanishItem(): Item {
  if (!banishes)
    banishes = $items`human musk, tennis ball, Louder Than Bomb, divine champagne popper`.sort(
      (a, b) => mallPrice(a) - mallPrice(b),
    ); //sorted from cheapest to most expensive
  return banishes.find((it) => !getBanishedMonsters().get(it)) || $item`none`; //return the cheapest free banish not currently in use
}

export function chewOrWish(it: Item, ef: Effect): void {
  if (mallPrice(it) + mallPrice($item`mojo filter`) < mallPrice($item`pocket wish`)) {
    if (mySpleenUse() === spleenLimit()) use(1, $item`mojo filter`);
    chew(it);
  } else {
    retrieveItem($item`pocket wish`);
    cliExecute(`genie effect ${ef.name}`);
  }
}

export function isGoodGarboScript(scr: string): boolean {
  // Returns true if scr includes "garbo", and doesn't include a semicolon
  return scr.includes("garbo") && !scr.includes(";");
}

export function backstageItemsDone(): boolean {
  return (
    (have($item`giant marshmallow`) ? 1 : 0) +
      (have($item`beer-scented teddy bear`) ? 1 : 0) +
      itemAmount($item`gin-soaked blotter paper`) >=
      2 &&
    (have($item`booze-soaked cherry`) ? 1 : 0) +
      (have($item`comfy pillow`) ? 1 : 0) +
      itemAmount($item`sponge cake`) >=
      2
  );
}

export interface Kmail {
  id: string;
  type: string;
  azunixtime: string;
  localtime: string;
  fromid: string;
  fromname: string;
  message: string;

  delete(): boolean;
}

export function getKmails(caller: string = "GreyDay"): Kmail[] {
  const buffer = visitUrl(`api.php?pwd&what=kmail&count=100&for=${urlEncode(caller)}`);

  const kmails: Kmail[] = JSON.parse(buffer);

  kmails.forEach((mail) => {
    mail.delete = () => {
      const del = `messages.php?the_action=delete&box=Inbox&pwd&sel${mail.id}=on`;

      return visitUrl(del).includes("1 message deleted.");
    };
  });

  return kmails.filter((k) => k.type === "normal");
}

function isJunkKmail(kmail: Kmail) {
  if (
    kmail.fromname === "Lady Spookyraven's Ghost" ||
    (kmail.fromname === "The Loathing Postal Service" &&
      kmail.message.includes("telegram from Lady Spookyraven"))
  ) {
    return true;
  }

  if (
    (kmail.fromname.toLowerCase() === "cheesefax" ||
      kmail.fromname.toLowerCase() === "averagechat") &&
    kmail.message.includes("completed your relationship fortune test!")
  ) {
    return true;
  }

  return false;
}

export function deleteJunkKmails() {
  getKmails().forEach((mail) => {
    if (!isJunkKmail(mail)) {
      return;
    }

    print(`Deleting junk kmail from ${mail.fromname}`);

    const state = mail.delete();

    if (state) {
      return;
    }

    print("Failed to delete kmail.", "red");
  });
}

export const realMonth = gameDay().getMonth();
export const realDay = gameDay().getDate();
export const halloween = gamedayToInt() === 79 || (realMonth === 10 && realDay === 31);

export function pvpCloset(num: number) {
  const threshold = 10000;
  $items``
    .filter(
      (it) =>
        itemAmount(it) > 0 &&
        it.tradeable &&
        it.discardable &&
        !it.quest &&
        !it.gift &&
        mallPrice(it) >= threshold,
    )
    .forEach((it) => {
      putCloset(itemAmount(it), it);
      print(`Closeting valuables (${mallPrice(it)} meat): ${it}`);
    });
  set(`_safetyCloset${num}`, true);
}

const goosoMultiplier = have($familiar`Grey Goose`) ? 2 : 1;

function meatOrItemFarm(): boolean {
  return mallPrice($item`jumping horseradish`) > mallPrice($item`Sacramento wine`)
    ? mallPrice($item`jumping horseradish`) > 3000 / goosoMultiplier
    : mallPrice($item`Sacramento wine`) > 3000 / goosoMultiplier;
}

export const copyTarget = () =>
  ChestMimic.differentiableQuantity($monster`Witchess Knight`) > 0
    ? `target="Witchess Knight"`
    : ChestMimic.differentiableQuantity($monster`Witchess Bishop`) > 0
    ? `target="Witchess Bishop"`
    : !meatOrItemFarm()
    ? ``
    : mallPrice($item`jumping horseradish`) > mallPrice($item`Sacramento wine`)
    ? `target="Witchess Knight"`
    : `target="Witchess Bishop"`;

