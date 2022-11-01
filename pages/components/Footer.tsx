import React from "react";
import styles from "../../styles/Home.module.css";
import { FooterInterface } from "../../interface/footer.interface";
export default function Footer(props: FooterInterface) {
  return (
    <div
      className={`border-solid border-b-1 border-sky-500 border-white min-w-min m-auto mr-0 my-12 bg-transparent ${styles.neonLineFooter}`}
    >
      <p>adfadsfasd</p>
    </div>
  );
}
