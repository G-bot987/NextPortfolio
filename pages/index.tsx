import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Home from "./mainPages/Home";
import Projects from "./mainPages/Projects";
import CV from "./mainPages/Cv";
import Contact from "./mainPages/Contact";
import Header from "./components/Header";
import NavLinks from "./components/hamburgerMenu/NavLinks";
import Footer from "./components/Footer";
import ParticlesContainer from "./particles/ParticlesContainer";
import footerData from "../data/footerData";
import { headerData } from "../data/headerData";
import projectsData from "../data/projectsData";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "CV") {
      return <CV />;
    }
    return <Contact />;
  };

  const handlePageChange = (page: any) => setCurrentPage(page);

  return (
    <div className="flex-col">
      <ParticlesContainer />

      <NavLinks currentPage={currentPage} handlePageChange={handlePageChange} />
      <Header {...headerData} />
      {/* We are passing the currentPage from state and the function to update it */}

      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer {...footerData} />
    </div>
  );
}
