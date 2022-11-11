import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { ProjectInterface } from "../../interface/projects.interface";

export default function Project(props: ProjectInterface) {
  // use state sequence for git
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  // use state sequence for img
  const [hoverImg, setHoverImg] = useState(false);

  const handleMouseOverImg = () => {
    setHoverImg(true);
  };
  const handleMouseOutImg = () => {
    setHoverImg(false);
  };

  return (
    <li
      className={`my-6 border-double border-4 rounded-lg border-white max-w-xs max-h-min `}
    >
      <ul
        className={`text-base  italic flex flex-col text-center  justify-around grow min-h-full`}
      >
        <li
          className={`text-center border-b-2 border-white min-w-full ${styles.neonText}`}
        >
          {props.header}
        </li>
        <li className="bg-white text-black">{props.description}</li>
        <div className="flex flex-row justify-around items-center grow">
          <div className="flex flex-col justify-center ">
            <li
              className={hover ? `${styles.glow} rounded-lg` : ``}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <a href={props.links?.repo}>
                <Image
                  src={props.imgs?.git}
                  alt={props.imgs?.gitAlt}
                  width={100}
                  height={100}
                />
              </a>
            </li>
          </div>
          <li
            className={hoverImg ? `${styles.glow}  rounded-lg` : ``}
            onMouseOver={handleMouseOverImg}
            onMouseOut={handleMouseOutImg}
          >
            <a href={props.links?.deployed}>
              <Image
                src={props.imgs?.live}
                alt={props.imgs?.alt}
                width={100}
                height={100}
              />
            </a>
          </li>
        </div>
      </ul>
    </li>
  );
}
