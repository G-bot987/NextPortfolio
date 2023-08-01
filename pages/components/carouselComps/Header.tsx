import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import { projectsData } from "../../../data/projectsData";
import { CarouselInterface } from "../../../interface/carousel.interface";
import { ProjectInterface } from "../../../interface/projects.interface";
import CaroSlides from "./CaroSlides";

export default function Header(props: CarouselInterface) {
  const slides: any = Object.values(props);
  const [slide, setSlide] = useState(0);

  const preMinus = slides?.length;
  const slideArrLength = preMinus - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => {
        if (prevSlide >= slideArrLength - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [slideArrLength]);
  return (
    <ul
      className={`border border-4 rounded-lg border-white flex flex-col my-6 mr-8 ml-8 min-w-[925px] min-h-[325px] items-center shrink-0 ${styles.neonBoxHeader}`}
    >
      {slides && <CaroSlides {...slides[slide]} />}
    </ul>
  );
}
