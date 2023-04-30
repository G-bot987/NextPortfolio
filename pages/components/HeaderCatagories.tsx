import React from "react";
import styles from "../../styles/Home.module.css";

import { synopsisPropertiesInterface } from "../../interface/home.interface";

export default function HeaderCatagories(props: synopsisPropertiesInterface) {
  const { header, txt } = props;
  return (
    <li className={`italic text-center  max-w-xs list-none max-[602px]:mx-12 `}>
      <div className="text-center flex flex-col flex-shrink  min-[602px]:rounded-b-lg min-[602px]:rounded-t-none bg-white p-7 text-black rounded-full  min-[700px]:max-h-[600px] min-[1100px]:max-h-[400px]">
        <p className="text-bold underline font-bold">{header}</p>
        <p>{txt}</p>
      </div>
    </li>
  );
}
