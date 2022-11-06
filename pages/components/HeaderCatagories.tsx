import React from "react";
import styles from "../../styles/Home.module.css";

import { synopsisPropertiesInterface } from "../../interface/home.interface";

export default function HeaderCatagories(props: synopsisPropertiesInterface) {
  const { header, txt } = props;
  return (
    <li
      className={`text-base  italic text-center  max-w-xs ${styles.neonText}`}
    >
      <p>{header}</p>
      <p>{txt}</p>
    </li>
  );
}
