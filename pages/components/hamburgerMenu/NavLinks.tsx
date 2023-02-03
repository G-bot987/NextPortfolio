import Link from "next/link";
import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";
import NavLink from "./Navlink";

interface Props {
  currentPage: any;
  handlePageChange: any;
}

function NavTabs(Props: any) {
  console.log('props')
  console.log(Props)

  const { handlePageChange, currentPage, NavbarData } = Props

  const [hover, setHover] = useState(false);


  const handleMouseOver = () => {
    setHover(!hover);
  };
  const handleMouseOut = () => {
    setHover(!hover);
  };


  return (
    <ul className={`inline-flex text-base p-8 italic self-end ${styles.neonText}`}>
      {
        NavbarData.map((link: any, index: number) => (
          <NavLink {...{ link, handlePageChange, currentPage }} key={`${index}`} />
        ))

      }
      <li className="pl-4  bg-black rounded-tl-lg rounded-bl-lg"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home/about me
        </a>
      </li>
      <li className="pl-4  bg-black "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
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
      <li className="pl-4  bg-black "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="pl-4  bg-black "
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <a
          href="#Technologies"
          onClick={() => handlePageChange("Technologies")}
          className={currentPage === "CV" ? "nav-link active" : "nav-link"}
        >
          Technologies
        </a>
      </li>

      <li className={`px-4   bg-black  rounded-br-lg rounded-tr-lg ${hover ? `bg-sky-500` : ``}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
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
