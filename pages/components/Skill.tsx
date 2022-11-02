import React from "react";

import { SkillInterface } from "../../interface/skill.interface";

export default function Skill(props: SkillInterface) {
  return <li>{props.name}</li>;
}
