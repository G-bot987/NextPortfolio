import React from "react";
import styles from "../../../../styles/Home.module.css";
import Employer from "./Employer";
import { experienceArticleInterface } from "../../../../interface/home.interface";

export default function ExperienceSection(props: experienceArticleInterface) {
  const { experience, header } = props ?? {};
  return (
    <ul className="flex flex-col pt-28  min-w-full min-h-full space-y-20">
      <hr className="text-white" />
      <li className="font-bd-retrocentric self-center  uppercase underline">
        <h2 className={`text-2xl ${styles.neonText}`}>{header}</h2>
      </li>
      <hr className="text-white" />

      {experience &&
        Object.keys(experience).map((role: any, index: number) => (
          <li key={index} className="flex flex-col ">
            <Employer key={index} job={experience[role]} index={role} />
          </li>
        ))}
    </ul>
  );
}
