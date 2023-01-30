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
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
      // cv is returned through navtabs
      return <Home {...homeData} />;
    }
    return <Contact {...contactData} />;
  };

  const handlePageChange = (page: any) => setCurrentPage(page);

  return (
    <div className="flex-col flex justify-evenly flex-wrap items-center">
      <ParticlesContainer />

      <button className='self-end flex flex-col' onClick={() => SetOpen(!open)}
      >
        <div className={`h-6  w-9 self-end my-4  flex flex-col  ${open ? `` : `justify-between`} `}>
          <div className={`h-1 w-6 bg-white rounded-full place-self-center  `}
            style={{
              transform: open ? "rotate(140deg)" : "",
              transition: "transform 150ms ease",
            }}
          />
          <div className={`h-1 w-6 bg-white rounded-full place-self-center ${open ? `hidden` : ``} `}
            style={{
              transform: open ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }} />

          <div className="h-1 w-6 bg-white rounded-full place-self-center "
            style={{
              transform: open ? "rotate(225deg)" : "",
              transition: "transform 150ms ease",
            }} />
        </div>
        {open &&
          <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
        }
      </button>
      <Header {...carouselData} />
      {renderPage()}
      <Footer {...footerData} />
    </div>
  );
}
