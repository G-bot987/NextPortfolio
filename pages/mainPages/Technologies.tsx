import React from "react";
import styles from "../../styles/Home.module.css";
import { TechnologiesInterface } from "../../interface/technologies.interface";
import Skill from "../components/Skill";

export default function Technologies(props: TechnologiesInterface) {
  const { skills } = props;
  return (
    <section
      className={`mt-6 mr-8 ml-8 border-double border-4  rounded-lg border-white min-w-min flex flex-col text-center  text-base`}
    >
      <h3
        className={`border-b-2 border-solid border-white font-bd-retrocentric uppercase ${styles.neonText}`}
      >
        {props.header}
      </h3>
      <ul className="flex-row flex justify-evenly flex-wrap">
        {skills &&
          Object.keys(skills).map((skill: any, index: number) => (
            <Skill {...skills[skill]} key={`${index}`} />
          ))}
      </ul>
    </section>
  );
}
