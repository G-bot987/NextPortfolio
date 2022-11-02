import React from "react";
import styles from "../../styles/Home.module.css";
// import PDF from "../../img/pdf.png";
// import CVlink from "../../img/cv/CV.pdf";
export default function CV() {
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <h1>Contact Page</h1>
      <h3>Proficent In:</h3>
      <div>
        <p className="HTML">HTML5</p>
        <p className="p">CSS</p>
        <p className="JavaScript">JavaScript</p>
        <p className="jQuery">jQuery</p>
        <p className="Bootstrap">Bootstrap</p>
        <p className="Express.js">Express.js</p>
        <p className="React.js">React.js</p>
        <p className="Node.js ">Node.js</p>
        <p className="Database Theory">Database Theory</p>
        <p className="MongoDB">MongoDB</p>
        <p className="MySQL">MySQL</p>
        <p className="Command Line">Command Line</p>
        <p className="Java">Javascript</p>
        <p className="Git.">Git.</p>
        Please click on the logo to view my CV
      </div>
    </div>
  );
}
