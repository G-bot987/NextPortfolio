import React from "react";
import styles from "../../styles/Home.module.css";
import { HeaderInterface } from "../../interface/header.interface";

export default function Header(props: HeaderInterface) {
  return (
    <div
      className={`border-double border-4 border-sky-500 rounded-lg border-white min-w-min flex-wrap flex-col self-center my-8 ${styles.neonBoxHeader}`}
    >
      <h1 className={`text-6xl p-8 italic`}>{props.mainHeader}</h1>

      <h2 className={`italic`}>{props.subHeader}</h2>

      <p className={`italic`}>{props.technologiesTxt}</p>
    </div>
  );
}
