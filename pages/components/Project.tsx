import React from "react";
import Image from "next/image";

import { ProjectInterface } from "../../interface/projects.interface";

export default function Project(props: ProjectInterface) {
  return (
    <li>
      <ul>
        <li>{props.header}</li>
        <li>{props.description}</li>
        <li>
          <a href={props.links?.repo}>
            <Image src={props.imgs?.git} alt={props.imgs?.gitAlt} />
          </a>
        </li>
        <li>
          <a href={props.links?.deployed}>
            <Image src={props.imgs?.live} alt={props.imgs?.alt} />
          </a>
        </li>
        <li></li>
      </ul>
    </li>
  );
}
