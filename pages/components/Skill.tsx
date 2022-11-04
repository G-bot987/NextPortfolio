import React from "react";

import { SkillInterface } from "../../interface/technologies.interface";

export default function Skill(props: SkillInterface) {
  return <li>{props.name}</li>;
}
