import React from "react";
import styles from "../../styles/Home.module.css";
import { SkillInterface } from "../../interface/technologies.interface";

export default function Skill(props: SkillInterface) {
  return <li className="max-w-xs my-3 mx-3 text-white">{props.name}</li>;
}
