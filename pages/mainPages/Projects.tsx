import React from "react";
import styles from "../../styles/Home.module.css";
import { ProjectInterface } from "../../interface/projects.interface";
import Project from "../components/Project";

export default function Projects(props: ProjectInterface[]) {
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min  flex-row ${styles.neonBoxBody}`}
    >
      <ul className={`flex-row flex justify-evenly flex-wrap`}>
        {Object.keys(props).map((project: any, index: number) => (
          <div
            key={`${index}`}
            className={`mt-6 mb-6 border-double border-4 border-sky-500 rounded-lg border-white max-w-xs`}
          >
            <Project {...props[project]} />
          </div>
        ))}
      </ul>
    </div>
  );
}
