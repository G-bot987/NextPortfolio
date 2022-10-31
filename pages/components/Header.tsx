import React from "react";
import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <div className="flex-wrap">
      <div
        className={`border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neon}`}
      >
        <h1 className={`text-9xl italic ${styles.neonText}`}>Georgia Hobson</h1>
      </div>
      <h2>Portfolio</h2>
      <p>Powered by NextJS, TypeScript and Tailwind</p>
    </div>
  );
}
