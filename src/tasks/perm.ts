import { Skill, toInt } from "kolmafia";
import { get, have, Lifestyle, permedSkills } from "libram";

function filterPermableSkills(): Skill[] {
  const allSkills = Skill.all().filter((sk) => sk.permable);

  const permedSkill = permedSkills();

  const filteredSkills = allSkills.filter(
    (skill) =>
      skill.permable &&
      have(skill) &&
      !([Lifestyle.softcore, Lifestyle.hardcore] as (number | undefined)[]).includes(permedSkill.get(skill))
  );

  return filteredSkills;
}

export function targetPerms(): Skill[] {
  const pOptions = filterPermableSkills();
  const maxQty = Math.floor((toInt(get("bankedKarma", 0)) - 11) / 100);

  return pOptions.slice(0, maxQty);
}
