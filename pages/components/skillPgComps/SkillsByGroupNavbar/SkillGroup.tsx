import React, { useState } from "react";
import styles from "../../../../styles/Home.module.css";

import { SKillGroupsWithSkillsInterface } from "../../../../interface/technologies.interface";

export default function SkillGroup(
  Props: SKillGroupsWithSkillsInterface & {
    index: number;
    filterSkillGroups: Function;
  }
) {
  const { index, filterSkillGroups, name, keyProp } = Props;
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <li
      key={index}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!hover && (
        <div
          className={` h-[140px] flex flex-col items-center justify-center flex  ${
            index % 2 == 0 ? `mt-[92px]` : ``
          } ${hover ? "w-[90px]" : "w-[48px]"} `}
        >
          <div className="pr-2 pb-1">
            <div
              className={`mt-2 h-[2px] w-[69px] bg-white transform rotate-45 translate-x-7 -translate-y-4 ${styles.glow}`}
            ></div>
            <div
              className={`h-[2px] w-[68px] bg-white transform -rotate-45  -translate-y-4 -translate-x-5 ${styles.glow}`}
            ></div>
            <div className="h-0 w-0 border-t-12 border-l-6 border-r-6 border-white"></div>
          </div>
          <button
            className={`min-w-[98px] ${hover ? "bg-white w-[120px]" : ""}`}
            onClick={(event) => {
              event.preventDefault();
              filterSkillGroups(keyProp);
            }}
          >
            <div
              className={`h-12 w-full border-white flex flex-row font-tektur  items-center justify-between  `}
            >
              <div className={`h-[48px] w-[2px] bg-white ${styles.glow}`} />
              <p
                className={`max-w-min text-[10px] uppercase text-white text-center ${
                  hover ? " text-black" : "text-white"
                }`}
              >
                {name}
              </p>
              <div className={`h-[48px] w-[2px] bg-white ${styles.glow}`} />
            </div>
          </button>

          <div className="pt-1 pl-6">
            <div
              className={`h-[2px] w-[70px] bg-white transform -rotate-45 translate-x-3 translate-y-4 ${styles.glow}`}
            ></div>
            <div
              className={`h-[2px] w-[69px] bg-white transform rotate-45  translate-y-4 -translate-x-9 ${styles.glow}`}
            ></div>
          </div>
        </div>
      )}

      {hover && (
        <div
          className={` ${index % 2 == 0 ? `mt-[180px] ` : `mt-[40px]`} ${
            styles.hex
          } h-[140px]  `}
        >
          <div>
            <button
              onClick={(event) => {
                event.preventDefault();
                filterSkillGroups(keyProp);
              }}
              className=" min-w-full"
            >
              <p className="font-tektur text-[10px] uppercase  text-center text-black font-semibold self-center pb-6 pt-3">
                {name}
              </p>
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
