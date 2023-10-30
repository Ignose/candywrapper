import {
    Class,
    getPermedSkills,
    gnomadsAvailable,
    inCasual,
    inHardcore,
    Item,
    myClass,
    print,
    printHtml,
    Skill,
    toClass,
  } from "kolmafia";
  import { $class, $classes, $item, $skills, get, have, set } from "libram";
  import { args } from "../args";

  function spanWrap(text: string, color: string): string {
    return `<font color="${color}">${text}</font>`;
  }

  function coloredSkill(sk: Skill, nPerms: Skill[], nClass: Class): string {
    return sk.name in getPermedSkills()
      ? spanWrap(sk.name, "#888")
      : nPerms.includes(sk) && have(sk)
      ? spanWrap(sk.name, "fuchsia")
      : nPerms.includes(sk)
      ? spanWrap(sk.name, "blue")
      : have(sk)
      ? spanWrap(sk.name, "purple")
      : nClass && nClass === sk.class && nClass !== $class`none`
      ? spanWrap(sk.name, "navy")
      : spanWrap(sk.name, "black");
  }

  export function getClass(property: string, _default: Class): Class {
    return toClass(get(property, _default.toString()));
  }
  export function setClass(property: string, value: Class): void {
    set(property, value.toString());
  }

  export const baseClasses = $classes`Seal Clubber, Turtle Tamer, Pastamancer, Sauceror, Disco Bandit, Accordion Thief`;
  export const gnomeSkills = $skills`Torso Awareness, Gnefarious Pickpocketing, Powers of Observatiogn, Gnomish Hardigness, Cosmic Ugnderstanding`;
  const permBlockList = [
    ...$skills`CLEESH, Chronic Indigestion`,
    ...Skill.all().filter((sk) =>
      Item.all().find((it) => it.skill === sk && it.reusable && have(it))
    ),
  ];

  export const permTiers = [
    "Tier 0 - All permable non-guild, non-gnome skills (never target these, but perm them if you know them)",
    "Tier 1 - Needed for the script to run at its best",
    "Tier 2 - Great skills",
    "Tier 3 - Good skills",
    "Tier 4 - QoL skills",
    "Tier 5 - Ascension-relevant skills",
    "Tier 6 - Skills with non-zero utility",
    "Tier 7 - All other guild skills",
    "Tier 8 - Otherwise-blocked skills",
  ];

  const permList = [
    //tier 0
    Skill.all().filter(
      (sk) =>
        sk.permable && sk.level === -1 && !permBlockList.includes(sk) && !gnomeSkills.includes(sk)
    ),
    //tier 1
    $skills`Curse of Weaksauce, Itchy Curse Finger, Torso Awareness, Cannelloni Cocoon`,
    //tier 2
    $skills`Nimble Fingers, Amphibian Sympathy, Leash of Linguini, Thief Among the Honorable, Expert Panhandling, Disco Leer, Wrath of the Wolverine, Furious Wallop, Five Finger Discount, Double-Fisted Skull Smashing, Impetuous Sauciness, Tao of the Terrapin, Saucestorm`,
    //tier 3
    $skills`Tongue of the Walrus, Mad Looting Skillz, Smooth Movement, Musk of the Moose, The Polka of Plenty, The Sonata of Sneakiness, Carlweather's Cantata of Confrontation, Mariachi Memory`,
    //tier 4
    $skills`Gnefarious Pickpocketing, Powers of Observatiogn, Gnomish Hardigness, Cosmic Ugnderstanding, Ambidextrous Funkslinging, The Long View, Wisdom of the Elder Tortoises, Inner Sauce, Springy Fusilli, Overdeveloped Sense of Self Preservation, Pulverize`,
    //tier 5
    $skills`Pastamastery, Advanced Cocktailcrafting, The Ode to Booze, The Magical Mojomuscular Melody, Advanced Saucecrafting, Saucemaven, The Way of Sauce, Fat Leon's Phat Loot Lyric, Empathy of the Newt, The Moxious Madrigal, Stuffed Mortar Shell, Flavour of Magic, Elemental Saucesphere, Spirit of Ravioli, Lunging Thrust-Smack, Entangling Noodles, Cold-Blooded Fearlessness, Northern Exposure, Diminished Gag Reflex, Tolerance of the Kitchen, Heart of Polyester, Irrepressible Spunk, Saucegeyser, Scarysauce, Ire of the Orca, Batter Up!, Disco Fever, Rage of the Reindeer, Testudinal Teachings, Disco Nap, Adventurer of Leisure, Armorcraftiness`,
    //tier 6
    $skills`Superhuman Cocktailcrafting, Transcendental Noodlecraft, Super-Advanced Meatsmithing, Patient Smile, Wry Smile, Knowing Smile, Aloysius' Antiphon of Aptitude, Pride of the Puffin, Ur-Kel's Aria of Annoyance, Sensitive Fingers, Master Accordion Master Thief, Skin of the Leatherback, Hide of the Walrus, Astral Shell, Ghostly Shell, Subtle and Quick to Anger, Master Saucier, Hero of the Half-Shell, Shield of the Pastalord, Saucy Salve, The Power Ballad of the Arrowsmith, Jalapeño Saucesphere, Claws of the Walrus, Shell Up, Brawnee's Anthem of Absorption, Reptilian Fortitude, The Psalm of Pointiness, Spiky Shell, Stiff Upper Lip, Blubber Up, Disco Smirk, Blood Sugar Sauce Magic, Cletus's Canticle of Celerity, Suspicious Gaze, Icy Glare, Dirge of Dreadfulness, Snarl of the Timberwolf, Stevedave's Shanty of Superiority, Northern Explosion, That's Not a Knife`,
    //tier 7
    $skills``.filter((sk) => sk.permable && sk.level >= 0),
    //tier 8
    permBlockList,
  ];

  export const defaultPermList = () => permList.slice(0, args.permtier + 1);

  export function permOptions(planning: boolean): Skill[][] {
    //planning = true: next run, false: this run
    const classChoices = planning
      ? baseClasses
      : baseClasses.includes(myClass())
      ? [myClass()]
      : [getClass("goorboNextClass", args.class)];
    const ctPerms = planning ? targetPerms(false) : [];
    return !planning //current run
      ? defaultPermList().map((sks) =>
          sks.filter(
            (sk) =>
              !(sk.toString() in getPermedSkills()) &&
              (have(sk) ||
                (gnomeSkills.includes(sk) && gnomadsAvailable()) ||
                (classChoices.includes(sk.class) && sk.level > 0))
          )
        ) //for current run, include skills that we know or that we can train in this run.
      : defaultPermList().map((sks) =>
          sks.filter(
            (sk) =>
              !(sk.toString() in getPermedSkills() || ctPerms.includes(sk)) &&
              (gnomeSkills.includes(sk) || (classChoices.includes(sk.class) && sk.level >= 0))
          )
        ); //for next run, exclude all skills that we are planning to perm this run, and allow all guild and gnome skills.
  }

  export function permTier(planning: boolean) {
    // the highest tier of unpermed skills available. Returns 0 if no non-tier 0 skills are available
    return (
      permOptions(planning)
        .slice(1)
        .findIndex((sks) => sks.length !== 0) + 1
    );
  }

  export function expectedKarma(planning: boolean): number {
    return (
      (!planning
        ? get("bankedKarma") + (inHardcore() ? 200 : inCasual() ? 0 : 100)
        : expectedKarma(false) -
          targetPerms(false).length * 100 +
          (inHardcore() ? 200 : inCasual() ? 0 : 100)) + (args.astralpet === $item`none` ? 10 : 0)
    );
  }

  function shouldBankKarma(planning: boolean): boolean {
    const tier = permTier(planning);
    return expectedKarma(planning) / 100 < tier || tier === 0;
  }

  export function targetClass(planning: boolean): Class {
    if (myClass() === $class`Grey Goo`) {
      if (args.class && args.class !== $class`none`) return args.class;
      return getClass("goorboNextClass", args.class);
    }
    if (planning && args.class && args.class !== $class`none`) return args.class;
    //can't access permed skill status in grey goo

    if (shouldBankKarma(planning)) return args.class;
    //if we will be banking skills

    const sk = permOptions(planning)
      .flat()
      .find((sk) => baseClasses.includes(sk.class));
    return sk ? sk.class : args.class;
  }

  export function targetPerms(planning: boolean): Skill[] {
    const pOptions = permOptions(planning);
    const tier = permTier(planning);
    const maxQty = Math.floor(expectedKarma(planning) / 100);
    if (tier > maxQty || tier === 0)
      //don't perm anything (bank karma), but do perm high-tier skills you happen to already know (probably due to Big Book or manually used skillbooks)
      return !planning
        ? pOptions
            .slice(0, tier + 1) //skills in tiers <= your current best perm target
            .flat()
            .filter((sk) => have(sk))
            .slice(0, maxQty) //don't plan to perm more than we have karma for
        : []; //don't plan to perm anything next run if we plan to bank karma

    const qty = Math.min(maxQty, tier + Math.ceil(Math.sqrt(Math.max(0, maxQty - tier))));
    const tClass = planning ? targetClass(true) : $class`none`;
    return (
      !planning
        ? pOptions.flat().filter((sk) => !gnomeSkills.includes(sk) || gnomadsAvailable())
        : //filter out gnome skills if not available (non-targetClass skills filtered out in permOptions already, for current run)
          pOptions.flat().filter((sk) => sk.class === tClass || gnomeSkills.includes(sk))
    ) //filter out non-targetClass skills
      .slice(0, qty);
  }

  function planHelper(perms: string[], cls: Class, karma: number) {
    if (perms.length > 0)
      return `Perm plan: [${perms.join(
        ", "
      )}] - Class: <span color="blue">${cls}</span>, Expected Karma: ${karma}`;
    else
      return `Perm Plan: bank karma - Class: <span color="blue">${cls}</span>, Expected Karma: ${karma}`;
  }

  export function printPermPlan() {
    const cClass = targetClass(false);
    const cPerms = targetPerms(false);
    const nClass = targetClass(true);
    const nPerms = targetPerms(true);
    print();
    printHtml(
      `Current ${planHelper(
        cPerms.map((sk) => coloredSkill(sk, cPerms, cClass)),
        cClass,
        expectedKarma(false)
      )}`,
      true
    );
    printHtml(
      `Next ${planHelper(
        nPerms.map((sk) => coloredSkill(sk, nPerms, nClass)),
        nClass,
        expectedKarma(true)
      )}`,
      true
    );
  }

  export function checkPerms(printout = true): string {
    const nPerms = targetPerms(false);
    const nClass = targetClass(false);
    let out = "";
    out = out.concat(`<p>Default Perm List</p>`);
    out = out.concat(
      `<div>Legend: <font color="#888">[permed]</font>, <font color="fuchsia">[targeted/known]</font>, <font color="blue">[targeted/unknown]</font>, <font color="purple">[known]</font>, <font color="navy">[class skills]</font>, <font color="black">[other]</font></div>`
    );
    let count = 0;
    defaultPermList().forEach(
      (sks) =>
        (out = out.concat(
          `<p><font color="blue">${permTiers[count++]}</font></p> ${sks
            .map((sk) => coloredSkill(sk, nPerms, nClass))
            .join(", ")}`
        ))
    );
    if (printout) printHtml(out, false);
    return out;
  }

