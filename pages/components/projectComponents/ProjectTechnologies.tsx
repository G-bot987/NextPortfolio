import React from "react";
import { PropertyInterface } from "../../../interface/projects.interface";

export default function ProjectTechnologies(props: PropertyInterface) {
  const { option } = props;
  return <li>{option}</li>;
}
