import React from "react";
import styles from "../../styles/Home.module.css";
import { synopsisPropertiesInterface } from "../../interface/home.interface";
import Image from "next/image";

export default function Catagory(props: synopsisPropertiesInterface) {
  const { header, txt, portrait } = props;

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
      <div className=" flex flex-col text-center justify-around">
        <p
          className={`justify-center uppercase sm:border-double border-t-4 sm:border-r-4  sm:rounded-tr-lg border-white ${styles.neonText}`}
        >
          {header}
        </p>
        <div className="grow sm:text-white text-justify flex flex-col justify-center px-4 sm:rounded-br-lg sm:border-y-4  border-r-4 border-double  sm:bg-transparent bg-white text-black ">
          <p>{txt}</p>
        </div>
      </div>
    </li>
  );
}
