import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectsDataInterface } from "../../interface/projects.interface";
import { overRide, resetOverRide } from "../../slices/overRideSlice";
import { projectRootState } from "../../slices/projectSlice";
import styles from "../../styles/Home.module.css";
import Project from "../components/Project";
import ProjectTechnology from "../components/projectSearch/ProjectTechnology";

export default function Projects(props: ProjectsDataInterface) {

  const { projects, technologies } = props

  const store = useSelector(projectRootState)
  const [showProjects, SetShowProjects] = useState(false)
  var [border, SetBorder] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.length > 0) {
      SetBorder(border = true)
    } else {
      SetBorder(border = false)
    }

    const reduxPayload = showProjects

    if (showProjects === true) {
      dispatch(overRide(reduxPayload))
    } else {
      dispatch(resetOverRide(reduxPayload))
    }
  }, [store, showProjects])

  return (
    <div className="mt-6 mr-8 ml-8 border-double border-4 rounded-lg border-white min-w-min flex flex-col">
      <p className="text-center">Search for project by technology</p>
      <div className="border-double border-t-4 border-white flex flex-col">
        {!showProjects && <ul className="flex flex-row justify-around ">
          {technologies?.map((technology, index) => (
            <ProjectTechnology {...{ technology }} key={`${index}`} />
          ))}
        </ul>}
        <div className=" flex flex-row justify-center	min-w-full border-t-4 border-double border-white ">
          <button onClick={() => SetShowProjects(!showProjects)} className={`my-2 border-2 rounded-full border-white p-2 ${showProjects === true ? 'bg-white text-black' : ''}`}>show all projects</button>
        </div>
      </div>
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
