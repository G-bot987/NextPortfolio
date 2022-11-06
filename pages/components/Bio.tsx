import React from "react";
import styles from "../../styles/Home.module.css";
import { synopsisPropertiesInterface } from "../../interface/home.interface";
import Image from "next/image";

export default function Catagory(props: synopsisPropertiesInterface) {
  const { header, txt, portrait } = props;

  return (
    <li
      className={`text-base italic border-b-2 border-solid border-white shrink-0 flex flex-row ${styles.neonText}`}
    >
      <Image
        src={portrait?.IMG}
        alt={portrait?.alt || "undefined"}
        width={250}
        height={250}
        className="rounded-br-lg border-r-2"
      />
      <div className=" flex flex-col text-center">
        <p className=" border-b-2 border-solid border-white">{header}</p>

        <p>{txt}</p>
      </div>
    </li>
  );
}
