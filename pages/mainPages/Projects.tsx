import React from "react";
import { ProjectsDataInterface } from "../../interface/projects.interface";
import styles from "../../styles/Home.module.css";
import Project from "../components/Project";

export default function Projects(props: ProjectsDataInterface) {
  const { projects } = props

  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 rounded-lg border-white min-w-min  flex-row`}
    >
      <ul className={`flex-row flex justify-evenly flex-wrap`}>
        {projects?.map((project: any, index: number) => (
          <Project {...project} key={`${index}`} />
        ))}
      </ul>
    </div>
  );
}
