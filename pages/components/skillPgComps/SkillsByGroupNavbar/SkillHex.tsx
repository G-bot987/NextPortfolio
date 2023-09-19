import React, { useState } from "react";
import styles from "../../../../styles/Home.module.css";
import { SkillInterface } from "../../../../interface/technologies.interface";

export default function SkillHex(Props: SkillInterface & { index: number }) {
  const { name, index } = Props;
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={` h-[95px] flex flex-col items-center justify-center flex ${
        (index + 1) % 3 == 0 ? `mx-[47px]` : ``
      } ${hover ? "w-[94px]" : "w-[94px]"} `}
      // ${hover ? "w-[90px]" : "w-[94px]"}
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
        className={`min-w-[98px] ${hover ? "" : ""}`}
        // ${hover ? "bg-white w-[120px]" : ""}
        // onClick={(event) => {
        //   event.preventDefault();
        //   filterSkillGroups(keyProp);
        // }}
      >
        <div
          className={`h-12 w-full border-white flex flex-row font-tektur  items-center justify-between  `}
        >
          <div className={`h-[48px] w-[2px] bg-white ${styles.glow}`} />
          <p
            className={`max-w-min text-[10px] uppercase text-white text-center ${
              hover ? " text-white" : "text-white"
            }`}
            // ${
            //   hover ? " text-black" : "text-white"
            // }
          >
            {name}
          </p>
          <div className={`h-[48px] w-[2px] bg-white ${styles.glow}`} />
        </div>
      </button>
      <div className="pt-1 pl-6">
        <div
          className={`h-[2px] w-[70px] bg-white transform -rotate-45 translate-x-3 translate-y-4 ${styles.glow}`}
        />
        <div
          className={`h-[2px] w-[69px] bg-white transform rotate-45  translate-y-4 -translate-x-9 ${styles.glow}`}
        />
      </div>
    </li>
  );
}
