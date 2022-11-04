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
          <Image src={props.imgs.git} alt={props.imgs.gitAlt} />
        </li>
        <li></li>
        <li></li>
      </ul>
    </li>
  );
}
