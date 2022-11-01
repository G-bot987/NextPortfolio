import React from "react";
import styles from "../../styles/Home.module.css";
import { ProjectInterface } from "../../interface/projects.interface";

export default function Projects() {
  console.log("props in projects ");
  // console.log(props);
  console.log("---");
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <h1>Projects</h1>
      <p>
        WHEN I am presented with the Portfolio section THEN I see titled images
        of six of the developer’s applications with links to both the deployed
        applications and the corresponding GitHub repositories
      </p>
    </div>
  );
}
