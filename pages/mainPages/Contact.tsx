import React from "react";
import styles from "../../styles/Home.module.css";
import { ContactInterface } from "../../interface/contact.interface";

export default function Contact(props: ContactInterface) {
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <p className={`text-base p-8 italic ${styles.neonText}`}>{props.text}</p>
    </div>
  );
}
