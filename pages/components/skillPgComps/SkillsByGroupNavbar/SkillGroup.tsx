import React from "react";
import styles from "../../../../styles/Home.module.css";

import { SKillGroupsWithSkillsInterface } from "../../../../interface/technologies.interface";

export default function SkillGroup(
  Props: SKillGroupsWithSkillsInterface & { index: number }
) {
  const { index, ownedSkills, name } = Props;
  return (
    <li
      className={`w-[48px] h-[140px] flex flex-col items-center justify-center flex  ${
        index % 2 == 0 ? `mt-[92px]` : ``
      } `}
      key={index}
    >
      <div className="pr-2 pb-1">
        <div
          className={`mt-2 h-[2px] w-[69px] bg-white transform rotate-45 translate-x-7 -translate-y-4 ${styles.glow}`}
        ></div>
        <div
          className={`h-[2px] w-[68px] bg-white transform -rotate-45  -translate-y-4 -translate-x-5 ${styles.glow}`}
        ></div>
      </div>
      <div className="min-w-[98px]  ">
        <div
          className={`h-12 w-full border-white flex flex-row font-tektur  items-center justify-between`}
        >
          <div className={`h-[48px] w-[2px] bg-white ${styles.glow}`} />
          <p className=" max-w-min text-[10px] uppercase text-white text-center">
            {name}
          </p>
          <div className={`h-[48px] w-[2px] bg-white ${styles.glow}`} />
        </div>
      </div>

      <div className="pt-1 pl-6">
        <div
          className={`h-[2px] w-[70px] bg-white transform -rotate-45 translate-x-3 translate-y-4 ${styles.glow}`}
        ></div>
        <div
          className={`h-[2px] w-[69px] bg-white transform rotate-45  translate-y-4 -translate-x-9 ${styles.glow}`}
        ></div>
      </div>
    </li>
  );
}
