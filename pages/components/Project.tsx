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
    <li>
      <ul className={`text-base  italic flex flex-col text-center `}>
        <li
          className={`text-center border-b-2 border-white min-w-full ${styles.neonText}`}
        >
          {props.header}
        </li>
        <li className="bg-white text-black">{props.description}</li>
        <div className="flex flex-row justify-around items-center ">
          <li
            className={hover ? `${styles.glow}` : ``}
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
          <li
            className={hoverImg ? `${styles.glow}` : ``}
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
