import React from "react";
import styles from "../../styles/Home.module.css";
import {
  HomePageInterface,
  synopsisPropertiesInterface,
} from "../../interface/home.interface";
import Bio from "../components/homePgComps/Bio";
import HeaderCatagories from "../components/homePgComps/HeaderCatagories";
import ExperienceSection from "../components/homePgComps/experienceComps/ExperienceSection";

export default function Home(props: HomePageInterface) {
  const { synopsisProperties, experience } = props;

  return (
    <section className="mt-6   min-w-min  flex flex-col items-center min-h-screen	mb-8 ">
      <ul className="flex  justify-evenly flex-wrap">
        {synopsisProperties && (
          <li>
            <Bio {...synopsisProperties[0]} />
          </li>
        )}
      </ul>
      <ul className="flex max-[601px]:flex-col max-[600px]:content-center   max-[600px]:items-center min-[601px]:justify-around  min-w-full shrink">
        {synopsisProperties &&
          Object.entries(synopsisProperties).map(
            ([category, properties], index) => {
              const { portrait, ...rest }: synopsisPropertiesInterface =
                properties;
              if (!portrait) {
                return (
                  <li
                    className="flex flex-row max-[600px]:flex-col max-[600px]:place-content-center min-[600px]:justify-evenly shrink"
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
      <ExperienceSection {...experience} />
    </section>
  );
}
