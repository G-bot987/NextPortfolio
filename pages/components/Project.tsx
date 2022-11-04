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
          <Image src={props?.imgs?.git} alt={props?.imgs?.gitAlt} />
        </li>
        <li>
          <Image src={props?.imgs?.live} alt={props?.imgs?.alt} />
        </li>
        <li></li>
      </ul>
    </li>
  );
}
