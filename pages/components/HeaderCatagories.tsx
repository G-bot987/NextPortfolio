import React from "react";
import styles from "../../styles/Home.module.css";

import { synopsisPropertiesInterface } from "../../interface/home.interface";

export default function HeaderCatagories(props: synopsisPropertiesInterface) {
  const { header, txt } = props;
  return (
    <li
      className={`text-base flex inline-flex  italic text-center  max-w-xs  min-[600px]:rounded-b-lg min-[600px]:rounded-t-none bg-white p-4 text-black rounded-full min-[600px]:max-w-min `}
    >
      <div className="">
        <p className="text-bold underline font-bold">{header}</p>
        <p>{txt}</p>
      </div>
    </li>
  );
}
