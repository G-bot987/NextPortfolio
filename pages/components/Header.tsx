import React from "react";
import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <div
      className={`border-double border-4 border-sky-500 rounded-lg border-white min-w-min flex-wrap flex-col justify-center ${styles.neonBoxHeader}`}
    >
      <h1 className={`text-6xl p-8 italic ${styles.neonText}`}>
        Georgia Hobson
      </h1>

      <h2 className={`italic  ${styles.neonText} `}>A Portfolio</h2>

      <p className={`italic ${styles.neonText}`}>
        Powered by NextJS, TypeScript and Tailwind
      </p>
    </div>
  );
}
