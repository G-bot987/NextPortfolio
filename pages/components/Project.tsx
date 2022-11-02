import React from "react";
import { ProjectInterface } from "../../interface/projects.interface";

export default function Project(props: ProjectInterface) {
  return <li>{props.header}</li>;
}
