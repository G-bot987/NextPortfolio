import React from "react";
import { ProjectsDataInterface } from "../../interface/projects.interface";
import styles from "../../styles/Home.module.css";
import Project from "../components/Project";
import ProjectTechnology from "../components/projectSearch/ProjectTechnology";

export default function Projects(props: ProjectsDataInterface) {

  const { projects, technologies } = props

  return (
    <div className="mt-6 mr-8 ml-8 border-double border-4 rounded-lg border-white min-w-min flex flex-col">
      <p className="text-center">Search for project by technology</p>
      <ul className="flex flex-row justify-around border-double border-y-4 border-white">
        {technologies.map((technology) => (
          <ProjectTechnology {...technology} />
        ))}
      </ul>
      <div
        className={`  flex-row`}
      >
        <ul className={`flex-row flex justify-evenly flex-wrap`}>
          {projects?.map((project: any, index: number) => (
            <Project {...project} key={`${index}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}
