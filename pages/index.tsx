import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Home from "./mainPages/Home";
import Projects from "./mainPages/Projects";
import Technologies from "./mainPages/Technologies";
import Contact from "./mainPages/Contact";
import Header from "./components/Header";
import NavLinks from "./components/hamburgerMenu/NavLinks";
import Footer from "./components/Footer";
import ParticlesContainer from "./particles/ParticlesContainer";
import footerData from "../data/footerData";
import projectsData from "../data/projectsData";
import { skillsData } from "../data/skillsData";
import { homeData } from "../data/homeData";
import { contactData } from "../data/contactData";
import { carouselData } from "../data/carouselData";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [open, SetOpen] = useState(false)

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home {...homeData} />;
    }
    if (currentPage === "Projects") {
      return <Projects {...projectsData} />;
    }
    if (currentPage === "Technologies") {
      return <Technologies {...skillsData} />;
    }
    if (currentPage === "Cv") {
      return <Home {...homeData} />;
    }
    return <Contact {...contactData} />;
  };

  const handlePageChange = (page: any) => setCurrentPage(page);

  return (
    <div className="flex-col flex justify-evenly flex-wrap items-center">
      <ParticlesContainer />

      <button className={`self-end flex flex-row justify-between items-baseline  bg-white mb-12 ${open ? `rounded-tl-lg rounded-bl-lg` : `rounded-lg my-2`}`} onClick={() => SetOpen(!open)}
      >

        {open &&
          <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
        }
        <div className={`h-6  w-9 flex flex-col self-center pt-1 bg-black ${open ? `rounded-tl-lg rounded-bl-lg` : `justify-between `} `}>
          <div className={`h-1 w-6 bg-white rounded-full place-self-center  `}
            style={{
              transform: open ? "rotate(45deg) translate(4px, 3px)" : "",
              transition: "transform 150ms ease",
            }}
          />
          <div className={`h-1 w-6 bg-white rounded-full place-self-center `}

            style={{
              display: open ? "none" : "",
              transform: open ? "translateX(-60px)" : "translateX(0px)",
            }}
          />

          <div className="h-1 w-6 bg-white rounded-full place-self-center "
            style={{
              transform: open ? "rotate(135deg) translate(0.5px)" : "",
              transition: "transform 150ms ease",
            }} />
        </div>
      </button>
      <Header {...carouselData} />
      {renderPage()}
      <Footer {...footerData} />
    </div>
  );
}
