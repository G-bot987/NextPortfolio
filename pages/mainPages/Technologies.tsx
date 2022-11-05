import React from "react";
import styles from "../../styles/Home.module.css";
import { TechnologiesInterface } from "../../interface/technologies.interface";
import Skill from "../components/Skill";

export default function Technologies(props: TechnologiesInterface) {
  const { skills } = props;
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min flex flex-col text-center ${styles.neonBoxBody} text-base  italic ${styles.neonText}`}
    >
      <h3 className="border-b-2 border-solid border-white">{props.header}</h3>
      <ul className="flex-row flex justify-evenly flex-wrap">
        {skills &&
          Object.keys(skills).map((skill: any, index: number) => (
            <div key={`${index}`} className="max-w-xs my-3 mx-3">
              <Skill {...skills[skill]} />
            </div>
          ))}
      </ul>
    </div>
  );
}
