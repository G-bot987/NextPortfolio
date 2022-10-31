import React from "react";
import styles from "../../styles/Home.module.css";

export default function Header() {
  return (
    <div className="flex-wrap">
      <h1 className={`text-9xl italic ${styles.neonText}`}>Georgia Hobson </h1>
      <h2>Portfolio</h2>
      <p>Powered by NextJS, TypeScript and Tailwind</p>
    </div>
  );
}
