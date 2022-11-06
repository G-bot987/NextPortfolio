import React from "react";
import styles from "../../styles/Home.module.css";
import { synopsisPropertiesInterface } from "../../interface/home.interface";
import Image from "next/image";

export default function Catagory(props: synopsisPropertiesInterface) {
  const { header, txt, portrait } = props;

  return (
    <li
      className={`text-base italic border-b-2 border-solid border-white shrink-0 sm:flex sm:flex-row ${styles.neonText}`}
    >
      <Image
        src={portrait?.IMG}
        alt={portrait?.alt || "undefined"}
        width={250}
        height={250}
        className="sm:rounded-br-lg sm:border-r-2 border-b-2 w-full"
      />
      <div className=" flex flex-col text-center justify-around">
        <p className=" border-b-2 border-solid border-white justify-center">
          {header}
        </p>
        <p className=" self-center">{txt}</p>
      </div>
    </li>
  );
}
