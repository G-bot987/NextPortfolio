import React from "react";
import { SkillInterface } from "../../../interface/technologies.interface";

export default function AllSkills(props: SkillInterface) {
  const { name } = props;
  return <li className="max-w-xs my-3 mx-3 text-white font-tektur">{name}</li>;
}
