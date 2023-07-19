import React from "react";
import styles from "../../styles/Home.module.css";

import { synopsisPropertiesInterface } from "../../../interface/home.interface";

export default function HeaderCatagories(props: synopsisPropertiesInterface) {
  const { header, txt } = props;
  return (
    <article
      className={`text-center  max-w-xs list-none min-[602px]:mx-12 max-[601px]:py-8 font-tektur`}
    >
      <div className="text-center flex flex-col flex-shrink  min-[602px]:rounded-b-lg min-[602px]:rounded-t-none bg-white p-7 text-black rounded-full  min-[700px]:max-h-[600px] min-[1100px]:max-h-[400px]">
        <h3 className="font-bd-retrocentric underline font-bold text-xl">
          {header}
        </h3>
        <p>{txt}</p>
      </div>
    </article>
  );
}
