import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { ProjectInterface } from "../../../interface/projects.interface";
import Description from "./Description";

export default function RenderProject(props: ProjectInterface) {
  const { links, header, summary, imgs, description } = props;
  const { deployedTxt, repoTxt, repo, deployed } = links ?? {};
  const { git, gitAlt, live, alt } = imgs ?? {};

  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  const [hoverImg, setHoverImg] = useState(false);

  const handleMouseOverImg = () => {
    setHoverImg(true);
  };
  const handleMouseOutImg = () => {
    setHoverImg(false);
  };

  const link = Object.keys(props)[5];
  const descriptionTxt = Object.keys(props)[4];

  const [open, setOpen] = useState(false);

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
          <li className="bg-white text-black uppercase font-bd-retrocentric underline flex flex-col justify-around  items-center">
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
          <div
            className={`transform transition-opacity duration-1000  ${
              open ? " opacity-100" : "opacity-0"
            }`}
          >
            <li>{open && <Description {...{ description }} />}</li>
          </div>
        </button>
      </ul>
    </section>
  );
}
