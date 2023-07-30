import React, { useState } from "react";

import Fuse from "fuse.js";
import styles from "../../styles/Home.module.css";
import {
  SkillInterface,
  TechnologiesInterface,
  skillGroupInterface,
  fuseSkillInterface,
} from "../../interface/technologies.interface";
import Skill from "../components/skillPgComps/Skill";

export default function Technologies(props: TechnologiesInterface) {
  const { skills, header, skillgroups } = props;

  const [tecSearchInput, setTecSearchInput]: any = useState("");
  const [renderSkill, setRenderSKill]: any = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTecSearchInput(event.target.value);
    filterTechnology(event.target.value);
  };

  const filterTechnology = (tecSearchInput: string) => {
    const options = {
      includeScore: true,
      keys: ["name"],
    };
    const fuse = new Fuse(skills, options);
    const foundSkills = fuse.search(`${tecSearchInput}`, { limit: 3 });

    setRenderSKill(foundSkills);
  };

  return (
    <section className="flex flex-col text-white font-tektur">
      <ul className="flex flex-col items-center max-md:hidden ">
        <h2 className="font-bd-retrocentric uppercase underline">{header}</h2>
        <li className="flex flex-row"></li>
        <li className="max-w-fit rounded-full border-2 border-white p-2 my-2 uppercase">
          <label htmlFor="tec-search">Skill Search:</label>
          <input
            type="search"
            id="tec-search"
            name="tec"
            value={tecSearchInput}
            onChange={handleInputChange}
          />
        </li>
      </ul>
      <ul className="flex-row flex justify-evenly flex-wrap">
        {renderSkill &&
          renderSkill.map((skill: fuseSkillInterface, index: number) => (
            <Skill {...skill} key={`${index}`} />
          ))}
      </ul>
    </section>
  );
}
