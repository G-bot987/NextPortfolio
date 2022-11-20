import React from "react";
import styles from "../../styles/Home.module.css";
import { synopsisPropertiesInterface } from "../../interface/home.interface";
import Image from "next/image";

export default function Catagory(props: synopsisPropertiesInterface) {
  const { header, txt, portrait, hobbiesHeader, hobbiesTxt } = props;

  return (
    <li
      className={`text-base italic border-b-2 border-solid border-black shrink-0 sm:flex sm:flex-row text-black`}
    >
      <Image
        src={portrait?.IMG}
        alt={portrait?.alt || "undefined"}
        width={250}
        height={250}
        className="sm:border-r-2 sm:border-b-2 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none border-black sm:rounded-bl-lg w-full"
      />
      <div className=" flex flex-col text-center justify-around ">
        <p
          className={`justify-center uppercase sm:border-double border-t-4 sm:border-r-4  sm:rounded-tr-lg border-white ${styles.neonText}`}
        >
          {header}
        </p>
        <div className="grow sm:text-white text-justify flex flex-col justify-center  sm:rounded-br-lg sm:border-y-4  border-r-4 border-double  text-black w-full">
          <div className="px-4 flex flex-col text-justify sm:bg-transparent bg-white ">
            <p>{txt}</p>
          </div>
          <div className=" border-t-2 border-white sm:text-white flex flex-col sm:bg-transparent text-black  w-full">
            <div className="border-b-2 border-t-2 sm:border-t-0 sm:border-white border-black uppercase">
              <p
                className={`justify-center uppercase  text-center ${styles.neonText}`}
              >
                {hobbiesHeader}
              </p>
            </div>
            <div className="px-4 flex flex-col text-justify sm:bg-transparent bg-white ">
              <p>{hobbiesTxt}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
