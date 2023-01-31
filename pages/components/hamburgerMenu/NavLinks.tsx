import Link from "next/link";
import React from "react";
import styles from "../../../styles/Home.module.css";

interface Props {
  currentPage: any;
  handlePageChange: any;
}

function NavTabs({ currentPage, handlePageChange }: Props) {
  return (
    <ul className={`inline-flex text-base p-8 italic self-end ${styles.neonText}`}>
      <li className="pl-4  bg-black rounded-tl-lg rounded-bl-lg">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home/about me
        </a>
      </li>
      <li className="pl-4  bg-black ">
        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="pl-4  bg-black ">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="pl-4  bg-black ">
        <a
          href="#Technologies"
          onClick={() => handlePageChange("Technologies")}
          className={currentPage === "CV" ? "nav-link active" : "nav-link"}
        >
          Technologies
        </a>
      </li>

      <li className="px-4   bg-black  rounded-br-lg rounded-tr-lg ">
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
