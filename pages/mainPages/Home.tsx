import React from "react";
import Image from "next/image";

import styles from "../../styles/Home.module.css";
import { HomePageInterface } from "../../interface/home.interface";
import Catagory from "../components/Catagory";

export default function Home(props: HomePageInterface) {
  const { synopsisProperties } = props;
  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <Image
        src={props.portrait?.IMG}
        alt={props.portrait?.alt}
        width={250}
        height={250}
        className="rounded-br-lg border-2"
      />
      <ul>
        {synopsisProperties &&
          Object.keys(synopsisProperties).map(
            (catagory: any, index: number) => (
              <div key={`${index}`}>
                <Catagory {...synopsisProperties[catagory]} />
              </div>
            )
          )}
      </ul>
    </div>
  );
}
