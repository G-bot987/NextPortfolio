import React, { useState } from "react";
import styles from "../../styles/Home.module.css";

import { synopsisPropertiesInterface } from "../../../interface/home.interface";
import HeaderDescription from "./HeaderDescription";

export default function HeaderCatagories(props: synopsisPropertiesInterface) {
  const { header, txt } = props;

  const [open, setOpen] = useState(false);

  return (
    <article
      className={`text-center  max-w-xs list-none  max-[601px]:py-8 font-tektur`}
    >
      <button
        className="max-h-min text-center flex flex-col flex-shrink  min-[602px]:rounded-b-lg min-[602px]:rounded-t-none bg-white pb-3 text-black rounded-full  min-[700px]:max-h-[600px] min-[1100px]:max-h-[400px] items-center px-2"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <article className="bg-white text-black uppercase font-bd-retrocentric underline flex flex-col justify-around  items-center max-w-full">
          <div className="flex flex-row justify-around  min-w-full">
            <div className="pt-4">
              <div
                className={`inline-block w-6 h-6 border-t-4 border-r-4 border-black transform transition-transform ${
                  open ? " rotate-[135deg]" : "-rotate-45"
                }`}
              ></div>
            </div>
            <h3 className="pt-3 font-bd-retrocentric underline font-bold text-xl px-5">
              {header}
            </h3>
            <div className="pt-4">
              <div
                className={`inline-block w-6 h-6 border-t-4 border-r-4 border-black transform transition-transform ${
                  open ? " rotate-[135deg]" : "-rotate-45"
                }`}
              ></div>
            </div>
          </div>
        </article>
        <div
          className={`transform transition-opacity duration-1000  ${
            open ? " opacity-100" : "opacity-0"
          }`}
        >
          <li>{open && <HeaderDescription {...{ txt }} />}</li>
        </div>
      </button>
    </article>
  );
}
