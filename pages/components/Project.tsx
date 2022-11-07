import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { ProjectInterface } from "../../interface/projects.interface";

export default function Project(props: ProjectInterface) {
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
          <li>
            <a href={props.links?.repo}>
              <Image
                src={props.imgs?.git}
                alt={props.imgs?.gitAlt}
                width={100}
                height={100}
              />
            </a>
          </li>
          <li>
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
