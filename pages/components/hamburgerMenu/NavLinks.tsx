import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

interface Props {
  currentPage: any;
  handlePageChange: any;
}

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }: Props) {
  return (
    <ul className={`inline-flex text-base p-8 italic self-end ${styles.neonText}`}>
      <li className="pl-4">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home/about me
        </a>
      </li>
      <li className="pl-4">
        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="pl-4">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="pl-4">
        <a
          href="#Technologies"
          onClick={() => handlePageChange("Technologies")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "CV" ? "nav-link active" : "nav-link"}
        >
          Technologies
        </a>
      </li>

      <li className="pl-4">
        <Link href={"images/CV/CV.pdf"} legacyBehavior>
          <a
            href="#Cv"
            onClick={() => handlePageChange("Cv")}
            className={currentPage === "CV" ? "nav-link active" : "nav-link"}
          >
            CV
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
