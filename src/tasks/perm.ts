import { Skill, toInt } from "kolmafia";
import { get, have, Lifestyle, permedSkills } from "libram";

function filterPermableSkills(lifestyle: Lifestyle): Skill[] {
  const permedSkill = permedSkills();

  let filteredSkills = [];

  if (lifestyle === Lifestyle.softcore) {
    filteredSkills = Skill.all().filter(
      (sk) =>
        sk.permable &&
        have(sk) &&
        !(permedSkill.get(sk) === Lifestyle.softcore || Lifestyle.hardcore),
    );
  } else {
    filteredSkills = Skill.all().filter(
      (sk) => sk.permable && have(sk) && !(permedSkill.get(sk) === lifestyle),
    );
  }

  return filteredSkills;
}

export function targetPerms(): [Skill[], Lifestyle] {
  // Try filtering softcore skills first
  let pOptions = filterPermableSkills(Lifestyle.softcore);
  let lifestyle = Lifestyle.softcore;

  // If all skills are permed as softcore, move to hardcore
  if (pOptions.length === 0) {
    pOptions = filterPermableSkills(Lifestyle.hardcore);
    lifestyle = Lifestyle.hardcore;
  }

  const maxQty = Math.floor((toInt(get("bankedKarma", 0)) - 11) / 100);
  return [pOptions.slice(0, maxQty), lifestyle];
}
