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
        className="sm:border-r-2 border-b-2 sm:rounded-tl-lg border-black sm:rounded-bl-lg w-full"
      />
      <div className=" flex flex-col text-center justify-around">
        <p
          className={`justify-center uppercase border-double border-t-4 border-r-4  rounded-tr-lg border-white ${styles.neonText}`}
        >
          {header}
        </p>
        <div className="grow text-white text-justify flex flex-col justify-center px-4 rounded-br-lg border-y-4  border-r-4 border-double">
          <p>{txt}</p>
        </div>
      </div>
    </li>
  );
}
