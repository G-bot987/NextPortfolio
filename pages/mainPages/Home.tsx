import React from "react";
import styles from "../../styles/Home.module.css";
import {
  HomePageInterface,
  synopsisPropertiesInterface,
} from "../../interface/home.interface";
import Bio from "../components/homePgComps/Bio";
import HeaderCatagories from "../components/homePgComps/HeaderCatagories";

export default function Home(props: HomePageInterface) {
  const { synopsisProperties } = props;

  return (
    <section className="mt-6 mr-8 ml-8  min-w-min  flex flex-col items-center min-h-screen	mb-8">
      <ul className=" flex  justify-evenly flex-wrap   ">
        {synopsisProperties && (
          <div>
            <Bio {...synopsisProperties[0]} />
          </div>
        )}
      </ul>
      <ul className="flex max-[601px]:flex-col max-[600px]:content-center grow  max-[600px]:items-center min-[601px]:justify-around min-[700px]:max-h-[400px] min-w-full">
        {synopsisProperties &&
          Object.entries(synopsisProperties).map(
            ([category, properties], index) => {
              const { portrait, ...rest }: synopsisPropertiesInterface =
                properties;
              if (!portrait) {
                return (
                  <li
                    className="flex flex-row max-[600px]:flex-col max-[600px]:place-content-center min-[600px]:justify-evenly min-[700px]:max-h-[400px] flex-shrink"
                    key={`${index}`}
                  >
                    <HeaderCatagories {...rest} />
                  </li>
                );
              }
              return null;
            }
          )}
      </ul>
    </section>
  );
}
