import React from "react";
import styles from "../../styles/Home.module.css";
import { SkillInterface } from "../../interface/skill.interface";
import Skill from "../components/Skill";
// import PDF from "../../img/pdf.png";
// import CVlink from "../../img/cv/CV.pdf";

export default function CV(props: SkillInterface[]) {
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <h1>Contact Page</h1>
      <h3>Proficent In:</h3>
      <ul>
        {Object.keys(props).map((skill: any, index: number) => (
          <div key={`${index}`}>
            <Skill {...props[skill]} />
          </div>
        ))}
      </ul>
      Please click on the logo to view my CV
    </div>
  );
}
