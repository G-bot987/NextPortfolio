import React from "react";
import styles from "../../styles/Home.module.css";

import { synopsisPropertiesInterface } from "../../interface/home.interface";

export default function HeaderCatagories(props: synopsisPropertiesInterface) {
  const { header, txt } = props;
  return (
    <li
      className={`text-base  italic text-center  max-w-xs  sm:rounded-b-lg sm:bg-white p-4 sm:text-black`}
    >
      <p>{header}</p>
      <p>{txt}</p>
    </li>
  );
}
