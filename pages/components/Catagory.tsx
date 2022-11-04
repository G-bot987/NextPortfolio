import React from "react";
import { HomePageInterface } from "../../interface/home.interface";

export default function Catagory(props: HomePageInterface) {
  return (
    <li>
      {props.header}
      <br />
      {props.txt}
    </li>
  );
}
