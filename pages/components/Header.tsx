import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { projectsData } from "../../data/projectsData";
import { CarouselInterface } from "../../interface/carousel.interface";
import { ProjectInterface } from "../../interface/projects.interface";
import CaroSlides from "./CaroSlides";

export default function Header(props: CarouselInterface) {
  const { slides } = props;
  const { projects } = projectsData;

  var [slide, SetSlide] = useState(0);

  useEffect(() => {
    projects.forEach(function (project: ProjectInterface) {
      const { showCase, links, imgs, header } = project;
      if (showCase) {
        const { deployed } = links;
        const { live, alt } = imgs;
        const ShowCaseSlide = {
          type: "showCase",
          mainHeader: header,
          img: live,
          alt,
          link: deployed,
        };
        const stopDuplication = slides.find((slide) => {
          if (slide.mainHeader === header) {
            return true; // stop searching
          }
        });

        if (!stopDuplication) {
          slides.push(ShowCaseSlide);
        } else {
          return;
        }
      }
    });
  }, [slides]);

  const preMinus = slides?.length;
  const slideArrLength = preMinus - 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide > slideArrLength - 1) {
        SetSlide((slide = 0));
      } else {
        SetSlide((slide = slide + 1));
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <ul
      className={`border-double border-4  rounded-lg border-white flex-col my-6 mr-8 ml-8 min-w-[75%] max-h-[25%] items-center shrink-0 ${styles.neonBoxHeader}`}
    >
      {slides && <CaroSlides {...slides[slide]} />}
    </ul>
  );
}
