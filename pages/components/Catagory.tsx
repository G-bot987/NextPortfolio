import React from "react";
import styles from "../../styles/Home.module.css";
import { synopsisPropertiesInterface } from "../../interface/home.interface";

export default function Catagory(props: synopsisPropertiesInterface) {
  return (
    <li className={`text-base p-8 italic ${styles.neonText}`}>
      {props.header}
      <br />
      {props.txt}
    </li>
  );
}
