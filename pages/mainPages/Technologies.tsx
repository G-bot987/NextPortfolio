import React from "react";
import styles from "../../styles/Home.module.css";
import { TechnologiesInterface } from "../../interface/technologies.interface";
import Skill from "../components/Skill";
// import PDF from "../../img/pdf.png";
// import CVlink from "../../img/cv/CV.pdf";

export default function Technologies(props: TechnologiesInterface) {
  const { skills } = props;
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <h3>{props.header}</h3>
      <ul>
        {skills &&
          Object.keys(skills).map((skill: any, index: number) => (
            <div key={`${index}`}>
              <Skill {...skills[skill]} />
            </div>
          ))}
      </ul>
    </div>
  );
}
