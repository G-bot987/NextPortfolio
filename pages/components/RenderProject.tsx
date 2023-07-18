import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { ProjectInterface } from "../../interface/projects.interface";

export default function RenderProject(props: ProjectInterface) {
  const { links, header, description, imgs } = props;
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

  return (
    <div
      className={`my-6 border border-4 rounded-lg border-white max-w-sm max-h-min `}
    >
      <ul
        className={`text-base  italic flex flex-col text-center  justify-around grow min-h-full`}
      >
        <li
          className={`text-center border-b-2 border-white min-w-full ${styles.neonText}`}
        >
          {header}
        </li>
        <li className="bg-white text-black">{description}</li>
        <div className="flex flex-row justify-around items-center grow px-6 py-2">
          <div className="flex flex-col justify-center ">
            <li
              className={hover ? `${styles.glow} rounded-lg mr-1` : `mr-1`}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a href={repo}>
                <h3
                  className={
                    hover
                      ? `text-center  min-w-full ${styles.neonText} `
                      : `hidden`
                  }
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
          </div>
          <li
            className={hoverImg ? `${styles.glow}  rounded-lg ml-1` : `ml-1`}
            onMouseOver={handleMouseOverImg}
            onMouseOut={handleMouseOutImg}
          >
            <a href={deployed}>
              <h3
                className={
                  hoverImg
                    ? `text-center min-w-full ${styles.neonText} `
                    : `hidden`
                }
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
        </div>
      </ul>
    </div>
  );
}
