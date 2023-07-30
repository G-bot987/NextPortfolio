import React from "react";
import styles from "../../styles/Home.module.css";
import { fuseSkillInterface } from "../../../interface/technologies.interface";

export default function Skill(props: fuseSkillInterface) {
  const { item } = props ?? {};
  const { name } = item ?? {};

  return <li className="max-w-xs my-3 mx-3 text-white font-tektur">{name}</li>;
}
