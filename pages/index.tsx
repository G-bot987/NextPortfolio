import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Home from "./mainPages/Home";
import Projects from "./mainPages/Projects";
import Technologies from "./mainPages/Technologies";
import Contact from "./mainPages/Contact";
import Header from "./components/carouselComps/Header";
import NavLinks from "./components/hamburgerMenu/NavLinks";
import Footer from "./components/footerComps/Footer";
import ParticlesContainer from "./particles/ParticlesContainer";
import { footerData } from "../data/footerData";
import { projectsData } from "../data/projectsData";
import { skillsData } from "../data/skillsData";
import { homeData } from "../data/homeData";
import { contactData } from "../data/contactData";
import { carouselData } from "../data/carouselData";
import { NavbarData } from "../data/navbarData";
import { CarouselSlideInterface } from "../interface/carousel.interface";

export default function App() {
  const { projects } = projectsData;
  const [caraArr, setCaraArr] = useState<CarouselSlideInterface[]>([]); // Initialize with an empty array

  const [open, SetOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [currentPage, setCurrentPage] = useState("Technologies");
  const ref = useRef<null | HTMLDivElement>(null);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

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

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    const updatedCaraArr = [...caraArr];

    carouselData.slides.forEach(function (slide) {
      updatedCaraArr.push(slide);
    });

    setCaraArr(updatedCaraArr);
  }, []);

  useEffect(() => {
    setCaraArr((prevCaraArr) => {
      const updatedCaraArr = [...prevCaraArr];

      projects.forEach((project) => {
        const { showCase, links, imgs, header } = project;
        if (showCase) {
          const { deployed } = links;
          const { live, alt } = imgs;
          const showCaseSlide = {
            type: "showCase",
            mainHeader: header,
            img: live,
            alt,
            link: deployed,
          };
          const isDuplicate = updatedCaraArr.some(
            (slide) => slide.mainHeader === header
          );

          if (!isDuplicate) {
            updatedCaraArr.push(showCaseSlide);
          }
        }
      });

      return updatedCaraArr;
    });
  }, []);

  return (
    <div className="flex-col flex justify-evenly flex-wrap items-center">
      <ParticlesContainer />

      <button
        className={`self-end flex flex-row justify-between items-baseline  bg-white mb-12  ${
          open
            ? `rounded-tl-lg rounded-bl-lg min-w-[35%]`
            : `rounded-lg my-2 bg-transparent`
        }`}
      >
        {open && (
          <NavLinks {...{ NavbarData, currentPage, handlePageChange }} />
        )}
        <div
          className={`h-6  w-9 flex flex-col self-center  rounded-tl-lg rounded-bl-lg  ${
            styles.rainbowglow
          } ${open ? `pt-1.5` : `justify-between py-1`} ${hover ? `` : ``} `}
          onClick={() => SetOpen(!open)}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div
            className={`h-1 w-6 rounded-full place-self-center ${
              open ? `bg-black` : `bg-white`
            } `}
            style={{
              transform: open ? "rotate(45deg) translate(4px, 3px)" : "",
              transition: "transform 150ms ease",
            }}
          />
          <div
            className={`h-1 w-6 rounded-full place-self-center ${
              open ? `bg-black` : `bg-white`
            }`}
            style={{
              display: open ? "none" : "",
              transform: open ? "translateX(-60px)" : "translateX(0px)",
            }}
          />

          <div
            className={`h-1 w-6  rounded-full place-self-center ${
              open ? `bg-black` : `bg-white`
            } `}
            style={{
              transform: open ? "rotate(135deg) translate(0.5px)" : "",
              transition: "transform 150ms ease",
            }}
          />
        </div>
      </button>
      <Header slides={[]} {...caraArr} />
      <section ref={ref}>{renderPage()}</section>
      <Footer {...footerData} />
    </div>
  );
}
