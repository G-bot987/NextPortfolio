import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { HomePageInterface } from "../../interface/home.interface";
import Bio from "../components/Bio";
import HeaderCatagories from "../components/HeaderCatagories";
// import CaroSlides from "../components/CaroSlides";

export default function Home(props: HomePageInterface) {
  const { synopsisProperties, carouselSlides } = props;

  const slideArrLength = carouselSlides.length
  var [slide, SetSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide > slideArrLength) {
        slide = 0
      } else {
        SetSlide(slide = slide + 1)
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [])

  return (
    <div className={`mt-6 mr-8 ml-8  min-w-min  flex flex-col`}>
      {/* <CaroSlides {...carouselSlides} /> */}
      <ul className=" flex sm:flex-row justify-evenly flex-wrap border-double border-4 border-white rounded-lg sm:border-0  ">
        {synopsisProperties &&
          Object.keys(synopsisProperties).map(
            (catagory: any, index: number) => (
              <div key={`${index}`}>
                {synopsisProperties[catagory].portrait && (
                  <Bio {...synopsisProperties[catagory]} />
                )}
                {!synopsisProperties[catagory].portrait && (
                  <HeaderCatagories {...synopsisProperties[catagory]} />
                )}
              </div>
            )
          )}
      </ul>
    </div>
  );
}
