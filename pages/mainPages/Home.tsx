import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import { HomePageInterface } from "../../interface/home.interface";
import Bio from "../components/Bio";
import HeaderCatagories from "../components/HeaderCatagories";
import CaroSlides from "../components/CaroSlides";

export default function Home(props: HomePageInterface) {
  const { synopsisProperties } = props;

  return (
    <div className='mt-6 mr-8 ml-8  min-w-min  flex flex-col items-center min-h-screen	mb-8'>
      <ul className=" flex  justify-evenly flex-wrap border-double border-4 border-white rounded-lg sm:border-0  ">
        {synopsisProperties && <div >
          <Bio {...synopsisProperties[0]} />
        </div>}
      </ul>
      <div className="flex max-[601px]:flex-col max-[600px]:content-center grow  max-[600px]:items-center min-[601px]:justify-around min-[700px]:max-h-[400px]">
        {synopsisProperties &&
          Object.keys(synopsisProperties).map(
            (catagory: any, index: number) => (
              <div className=" flex flex-row max-[600px]:flex-col max-[600px]:place-content-center min-[600px]:justify-evenly min-[700px]:max-h-[400px] flex-shrink" key={`${index}`}>
                {!synopsisProperties[catagory].portrait && (
                  <HeaderCatagories {...synopsisProperties[catagory]} />
                )}
              </div>
            )

          )
        }
      </div>
    </div>
  );
}
