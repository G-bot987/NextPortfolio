import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import {
  ProjectInterface,
  PropertyInterface,
} from "../../../interface/projects.interface";
import Description from "./Description";
import ProjectTechnologies from "./ProjectTechnologies";

interface RenderProjectsInterface {
  project: ProjectInterface;
  allTechnologies: PropertyInterface[];
}

export default function RenderProject(props: RenderProjectsInterface) {
  const { project, allTechnologies } = props;

  // Check if p and technologies are defined before destructuring
  const { links, header, summary, imgs, description, technologies } =
    project ?? {};
  const { deployedTxt, repoTxt, repo, deployed } = links ?? {};
  const { git, gitAlt, live, alt } = imgs ?? {};

  // taking project tecs array and mapping over to find the name of each tec from technologies prop passed, flat map as some project tecs arent tecs joining nested arrays
  const tecsToMap = allTechnologies || [];
  const projectTecs = (
    technologies: Number[] | undefined,
    tecsToMap: PropertyInterface[]
  ) => {
    if (!Array.isArray(technologies)) {
      return [];
    }

    return technologies.flatMap((tec: Number) => {
      const tecName = tecsToMap.filter(
        (tecDetails: PropertyInterface) => tecDetails.key === tec
      );
      return tecName;
    });
  };

  const usedTechnologies = (() => {
    if (!technologies && !tecsToMap) {
      return [];
    } else {
      return projectTecs(technologies, tecsToMap);
    }
  })();

  // hover for links
  const [hover, setHover] = useState(false);
  const [hoverImg, setHoverImg] = useState(false);
  //description open tab
  const [open, setOpen] = useState(false);
  //technologies open tab
  const [openTecs, setOpenTecs] = useState(false);

  // implementation of hovers
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const handleMouseOverImg = () => {
    setHoverImg(true);
  };
  const handleMouseOutImg = () => {
    setHoverImg(false);
  };

  // using property name for txt
  const link = Object.keys(props.project || {})[5] || "";
  const descriptionTxt = Object.keys(props.project || {})[4] || "";
  const TechnologiesTxt =
    Object.keys(project || {}).find(
      (property) => property === "technologies"
    ) || "";

  return (
    <section
      className={`my-6 border border-4 rounded-lg border-white max-w-sm max-h-min `}
    >
      <ul
        className={`text-base flex flex-col text-center justify-around grow min-h-full`}
      >
        <li
          className={`text-center border-b-2 border-white min-w-full uppercase font-bd-retrocentric ${styles.neonText}`}
        >
          {header}
        </li>
        <li className="bg-white text-black">{summary}</li>

        <button
          className="max-h-min mt-10"
          onClick={() => {
            setOpenTecs(!openTecs);
          }}
        >
          <li className="bg-white text-black uppercase font-bd-retrocentric underline flex flex-col justify-around  items-center">
            <div className="flex flex-row justify-around  min-w-full">
              <div className="pt-4">
                <div
                  className={`inline-block w-6 h-6 border-t-4 border-r-4 border-black transform transition-transform ${
                    openTecs ? " rotate-[135deg]" : "-rotate-45"
                  }`}
                ></div>
              </div>
              <p className="pt-3">{TechnologiesTxt}</p>
              <div className="pt-4">
                <div
                  className={`inline-block w-6 h-6 border-t-4 border-r-4 border-black transform transition-transform ${
                    openTecs ? " rotate-[135deg]" : "-rotate-45"
                  }`}
                ></div>
              </div>
            </div>
          </li>
          <ul
            className={`transform transition-opacity duration-1000  ${
              openTecs ? " opacity-100" : "opacity-0"
            }`}
          >
            {usedTechnologies !== undefined &&
              usedTechnologies.map((projectTec: PropertyInterface) => {
                return (
                  // Use the 'openTecs' condition to render the component conditionally.
                  openTecs && <ProjectTechnologies {...projectTec} />
                );
              })}
          </ul>
        </button>

        <li className="bg-white text-black uppercase font-bd-retrocentric underline mt-10">
          {link}
        </li>
        <section className="flex flex-row justify-around items-center grow px-6 py-2">
          <article className="flex flex-col justify-center ">
            <li
              className={hover ? `${styles.glow} rounded-lg mr-1` : `mr-1`}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a href={repo}>
                <h3
                  className={` font-bd-retrocentric uppercase
                  ${
                    hover
                      ? `text-center  min-w-full ${styles.neonText} `
                      : `hidden`
                  }
                  `}
                >
                  {repoTxt}
                </h3>

                <div className="relative w-[150px] h-[150px]">
                  <Image
                    src={git}
                    alt={gitAlt}
                    style={{ objectFit: "fill" }}
                    fill={true}
                    quality={100}
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </a>
            </li>
          </article>
          <li
            className={hoverImg ? `${styles.glow}  rounded-lg ml-1` : `ml-1`}
            onMouseOver={handleMouseOverImg}
            onMouseOut={handleMouseOutImg}
          >
            <a href={deployed}>
              <h3
                className={` font-bd-retrocentric uppercase
                 ${
                   hoverImg
                     ? `text-center min-w-full ${styles.neonText} `
                     : `hidden`
                 }`}
              >
                {deployedTxt}
              </h3>
              <div className="relative w-[150px] h-[150px] ">
                <Image
                  src={live}
                  alt={alt}
                  style={{ objectFit: "fill" }}
                  fill={true}
                  quality={100}
                  loading="lazy"
                  className={hoverImg ? ` rounded-b-lg ` : `rounded-lg`}
                />
              </div>
            </a>
          </li>
        </section>
        <button
          className="max-h-min mt-10"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <li
            className={`bg-white text-black uppercase font-bd-retrocentric underline flex flex-col justify-around  items-center  ${
              open ? "" : "rounded-b-lg"
            }`}
          >
            <div className="flex flex-row justify-around  min-w-full">
              <div className="pt-4">
                <div
                  className={`inline-block w-6 h-6 border-t-4 border-r-4 border-black transform transition-transform ${
                    open ? " rotate-[135deg]" : "-rotate-45"
                  }`}
                ></div>
              </div>
              <p className="pt-3">{descriptionTxt}</p>
              <div className="pt-4">
                <div
                  className={`inline-block w-6 h-6 border-t-4 border-r-4 border-black transform transition-transform ${
                    open ? " rotate-[135deg]" : "-rotate-45"
                  }`}
                ></div>
              </div>
            </div>
          </li>
          <section
            className={`transform transition-opacity duration-1000  ${
              open ? " opacity-100" : "opacity-0"
            }`}
          >
            {open && <Description {...{ description }} />}
          </section>
        </button>
      </ul>
    </section>
  );
}
