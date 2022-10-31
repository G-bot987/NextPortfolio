import React from "react";
import styles from "../../styles/Home.module.css";
// import PDF from "../../img/pdf.png";
// import CVlink from "../../img/cv/CV.pdf";
export default function CV() {
  return (
    <div className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}>
      <h1>Contact Page</h1>
      <p>
        <h3>Proficent In:</h3>
        <div className="HTML">HTML5</div>
        <div className="div">CSS</div>
        <div className="JavaScript">JavaScript</div>
        <div className="jQuery">jQuery</div>
        <div className="Bootstrap">Bootstrap</div>
        <div className="Express.js">Express.js</div>
        <div className="React.js">React.js</div>
        <div className="Node.js ">Node.js</div>
        <div className="Database Theory">Database Theory</div>
        <div className="MongoDB">MongoDB</div>
        <div className="MySQL">MySQL</div>
        <div className="Command Line">Command Line</div>
        <div className="Java">Javascript</div>
        <div className="Git.">Git.</div>
        Please click on the logo to view my CV
      </p>
    </div>
  );
}
