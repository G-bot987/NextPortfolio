import React from "react";
import styles from "../../styles/Home.module.css";
import { ProjectInterface } from "../../interface/projects.interface";
import Project from "../components/Project";

export default function Projects(props: ProjectInterface[]) {
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <p>
        WHEN I am presented with the Portfolio section THEN I see titled images
        of six of the developer’s applications with links to both the deployed
        applications and the corresponding GitHub repositories
      </p>
      <ul className={`flex-row`}>
        {Object.keys(props).map((project: any, index: number) => (
          <div
            key={`${index}`}
            className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min =`}
          >
            <Project {...props[project]} />
          </div>
        ))}
      </ul>
    </div>
  );
}
