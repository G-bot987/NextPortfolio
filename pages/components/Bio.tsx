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
        className="sm:border-r-2 border-b-2 w-full"
      />
      <div className=" flex flex-col text-center justify-around">
        <p
          className={`border-b-2 border-solid border-black justify-center uppercase ${styles.neonText}`}
        >
          {header}
        </p>
        <div className="grow bg-white text-justify flex flex-col justify-center px-4">
          <p>{txt}</p>
        </div>
      </div>
    </li>
  );
}
