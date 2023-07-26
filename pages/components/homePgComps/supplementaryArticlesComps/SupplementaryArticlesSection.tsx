import React from "react";
import styles from "../../../../styles/Home.module.css";
import Employer from "../experienceComps/Employer";
import { supplementaryArticlesInterface } from "../../../../interface/home.interface";
import Article from "./Article";

interface PropsInterace {
  supplements: supplementaryArticlesInterface[];
}

export default function SupplementaryArticlesSection(props: PropsInterace) {
  const { supplements } = props ?? {};

  const headerTxt = Object.keys(props || {})[0] || "";

  return (
    <ul className="flex flex-col pt-28  min-w-full min-h-full space-y-14">
      <hr className="text-white" />
      <li className="font-bd-retrocentric self-center  uppercase underline">
        <h2 className={`text-2xl ${styles.neonText}`}>{headerTxt}</h2>
      </li>
      <hr className="text-white" />

      {supplements &&
        supplements.map((supplement: any, index: number) => (
          <li key={index} className="flex flex-col ">
            <Article key={index} article={supplement} index={index} />
          </li>
        ))}
    </ul>
  );
}
