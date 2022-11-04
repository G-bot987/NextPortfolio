import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import { ProjectInterface } from "../../interface/projects.interface";

export default function Project(props: ProjectInterface) {
  return (
    <li>
      <ul>
        <li>{props.header}</li>
        <li>{props.description}</li>
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
        <li></li>
      </ul>
    </li>
  );
}
