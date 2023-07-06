import React, { useMemo, useState } from "react";
import {
  ProjectInterface,
  ProjectsDataInterface,
  PropertyInterface,
} from "../../interface/projects.interface";
import RenderProject from "../components/RenderProject";

export default function Projects(props: ProjectsDataInterface) {
  const { technologies, projects, projectSearch, recentProject, projectType } =
    props;

  const [selectedTechnologies, setSelectedTechnologies]: any = useState([]);

  const filterTechnologie = (techId: number) => {
    if (selectedTechnologies.includes(techId)) {
      setSelectedTechnologies((prev: any): any =>
        prev.filter((p: any) => p !== techId)
      );
    } else {
      setSelectedTechnologies((prev: any): any => [...prev, techId]);
    }
  };

  const projectsFound: any = useMemo(() => {
    const p = projects?.filter((project: any) => {
      return selectedTechnologies.every((id: any) =>
        project.technologies.includes(id)
      );
    });
    return p;
  }, [selectedTechnologies.length]);

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col justify-center  max-w-100%	">
        {projectSearch.txt}
        <section className="flex flex-row max-w-100%">
          {projectSearch &&
            projectSearch.params.map((paramHeader: string, index: number) => (
              <li key={index} className="flex flex-col max-w-md ">
                {paramHeader}
                <ul className="flex flex-row flex-wrap">
                  {paramHeader === "Technology" &&
                    technologies &&
                    technologies.map((tech: PropertyInterface) => (
                      <li className="m-2" key={tech.key}>
                        <button
                          className="max-w-fit rounded-full border-2 border-white p-2 my-2"
                          onClick={(event) => {
                            event.preventDefault();
                            filterTechnologie(tech.key);
                          }}
                          style={{
                            background: selectedTechnologies?.includes(tech.key)
                              ? "white"
                              : "",
                            color: selectedTechnologies?.includes(tech.key)
                              ? "black"
                              : "",
                            border: selectedTechnologies?.includes(tech.key)
                              ? "solid"
                              : "",
                          }}
                        >
                          {tech.option}
                        </button>
                      </li>
                    ))}
                </ul>

                <ul className="flex flex-row">
                  {paramHeader === "Recent Projects" &&
                    recentProject &&
                    recentProject.map((tech: PropertyInterface) => (
                      <li className="m-2" key={tech.key}>
                        <button
                          className="max-w-fit rounded-full border-2 border-white p-2 my-2"
                          onClick={(event) => {
                            event.preventDefault();
                            filterTechnologie(tech.key);
                          }}
                          style={{
                            background: selectedTechnologies?.includes(tech.key)
                              ? "white"
                              : "",
                            color: selectedTechnologies?.includes(tech.key)
                              ? "black"
                              : "",
                            border: selectedTechnologies?.includes(tech.key)
                              ? "solid"
                              : "",
                          }}
                        >
                          {tech.option}
                        </button>
                      </li>
                    ))}
                </ul>

                <ul className="flex flex-row">
                  {paramHeader === "Project Types" &&
                    projectType &&
                    projectType.map((tech: PropertyInterface) => (
                      <li className="m-2" key={tech.key}>
                        <button
                          className="max-w-fit rounded-full border-2 border-white p-2 my-2"
                          onClick={(event) => {
                            event.preventDefault();
                            filterTechnologie(tech.key);
                          }}
                          style={{
                            background: selectedTechnologies?.includes(tech.key)
                              ? "white"
                              : "",
                            color: selectedTechnologies?.includes(tech.key)
                              ? "black"
                              : "",
                            border: selectedTechnologies?.includes(tech.key)
                              ? "solid"
                              : "",
                          }}
                        >
                          {tech.option}
                        </button>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </section>
      </ul>
      <ul className="flex-row flex justify-evenly flex-wrap">
        {projectsFound &&
          projectsFound.map((p: ProjectInterface, index: number) => (
            <RenderProject {...p} key={index} />
          ))}
      </ul>
    </div>
  );
}
