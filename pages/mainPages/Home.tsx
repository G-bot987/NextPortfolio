import React from "react";
import styles from "../../styles/Home.module.css";
import { HomePageInterface } from "../../interface/home.interface";
import Catagory from "../components/Catagory";

export default function Home(props: HomePageInterface) {
  const { catagories } = props;

  return (
    <div
      className={`mt-6 mr-8 ml-8 border-double border-4 border-sky-500 rounded-lg border-white min-w-min ${styles.neonBoxBody}`}
    >
      <h1></h1>
      {/* <img src={Georgia} className="Georgia" alt="its me" /> */}
      <ul>
        {Object.keys(catagories).map((catagory: any, index: number) => (
          <div key={`${index}`}>
            {/* {console.log("sfadf", catagories[catagory])} */}
            <Catagory {...catagories[catagory]} />
          </div>
        ))}
      </ul>
    </div>
  );
}
