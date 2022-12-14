import React from "react";
import styles from "../../styles/Home.module.css";
import { HomePageInterface } from "../../interface/home.interface";
import Bio from "../components/Bio";
import HeaderCatagories from "../components/HeaderCatagories";

export default function Home(props: HomePageInterface) {
  const { synopsisProperties } = props;
  return (
    <div className={`mt-6 mr-8 ml-8  min-w-min  flex`}>
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
