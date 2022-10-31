import React from "react";
import styles from "../../styles/Home.module.css";
export default function Contact() {
  return (
    <div className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}>
      <h1>Contact Page</h1>
      <p>
        Please feel free to reach out to me on Linkedin, the icon in the footer
        will take you to my page. Alternatively please feel free to message me
        at developergbot987@gmail.com
      </p>
    </div>
  );
}