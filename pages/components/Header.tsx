import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { CarouselInterface } from "../../interface/carousel.interface";
import CaroSlides from "./CaroSlides";

export default function Header(props: CarouselInterface) {
  const { slides } = props;

  const preMinus = slides?.length
  const slideArrLength = preMinus - 1

  var [slide, SetSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide > slideArrLength - 1) {
        SetSlide(slide = 0)
      } else {
        SetSlide(slide = slide + 1)
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [])

  return (

    <ul
      className={`border-double border-4  rounded-lg border-white flex-col my-6 mr-8 ml-8 min-w-full max-h-[25%] items-center shrink-0 ${styles.neonBoxHeader}`}
    >
      {slides &&
        <CaroSlides {...slides[slide]} />
      }
    </ul>
  );
}
