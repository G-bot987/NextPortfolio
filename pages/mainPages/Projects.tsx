import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProjectsDataInterface } from "../../interface/projects.interface";
import { projectRootState } from "../../slices/projectSlice";
import styles from "../../styles/Home.module.css";
import Project from "../components/Project";
import ProjectTechnology from "../components/projectSearch/ProjectTechnology";

export default function Projects(props: ProjectsDataInterface) {

  const { projects, technologies } = props

  const store = useSelector(projectRootState)
  var [border, SetBorder] = useState(false)

  useEffect(() => {

    if (store.length > 0) {
      SetBorder(border = true)
    } else {
      SetBorder(border = false)
    }

  }, [store])

  return (
    <div className="mt-6 mr-8 ml-8 border-double border-4 rounded-lg border-white min-w-min flex flex-col">
      <p className="text-center">Search for project by technology</p>
      <ul className="flex flex-row justify-around border-double border-t-4 border-white">
        {technologies?.map((technology, index) => (
          <ProjectTechnology {...{ technology }} key={`${index}`} />
        ))}
      </ul>
      <div
        className={`  flex-row border-double border-white ${border === true ? ` border-t-4` : ``} `}>
        <ul className={`flex-row flex justify-evenly flex-wrap`}>
          {projects?.map((project: any, index: number) => (
            <Project {...project} key={`${index}`} />
          ))}
        </ul>
      </div>
    </div>
  );
}
