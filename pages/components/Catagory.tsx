import React from "react";
import { CatagoryInterface } from "../../interface/home.interface";

export default function Catagory(props: CatagoryInterface) {
  return (
    <li>
      {props.header}
      <br />
      {props.txt}
    </li>
  );
}
