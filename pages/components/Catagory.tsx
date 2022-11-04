import React from "react";
import { synopsisPropertiesInterface } from "../../interface/home.interface";

export default function Catagory(props: synopsisPropertiesInterface) {
  return (
    <li>
      {props.header}
      <br />
      {props.txt}
    </li>
  );
}
