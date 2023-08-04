import React, { useState, useEffect } from "react";

import Fuse from "fuse.js";
import styles from "../../styles/Home.module.css";
import {
  SkillInterface,
  TechnologiesInterface,
  skillGroupInterface,
  fuseSkillInterface,
} from "../../interface/technologies.interface";
import Skill from "../components/skillPgComps/Skill";
import AllSkills from "../components/skillPgComps/AllSkills";

export default function Technologies(props: TechnologiesInterface) {
  const { skills, header, skillgroups } = props;

  const [renderSkill, setRenderSKill]: any = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterTechnology(event.target.value);
  };

  const filterTechnology = (tecSearchInput: string) => {
    const options = {
      includeScore: true,
      keys: ["name"],
    };
    if (tecSearchInput.trim() !== "") {
      const fuse = new Fuse(skills, options);
      const foundSkills = fuse.search(`${tecSearchInput}`, { limit: 3 });

      return setRenderSKill(foundSkills);
    } else {
      return setRenderSKill(skills);
    }
  };
  useEffect(() => setRenderSKill(skills), []);
  return (
    <section className=" flex flex flex-col justify-between space-y-20 min-w-full">
      <div className="px-8">
        <article className="flex flex-col text-white font-tektur  px-10  py-4 justify-between items-center border-2 border-white rounded-full">
          <ul className="flex flex-col items-center max-md:hidden  rounded-full   ">
            <h2
              className={`text-2xl font-bd-retrocentric self-center uppercase underline ${styles.neonText}`}
            >
              {header}
            </h2>
            <li className="flex flex-row"></li>
            <li className="max-w-fit  p-2 my-2 uppercase">
              <label htmlFor="tec-search">Competencies Search:</label>
              <input
                type="search"
                id="tec-search"
                name="tec"
                className="text-white p-1 bg-transparent border-2 border-white rounded-full"
                onChange={handleInputChange}
              />
            </li>
          </ul>
          <ul className="flex-row flex justify-evenly flex-wrap   ">
            {renderSkill &&
              renderSkill.length >= 3 &&
              renderSkill.map((skill: SkillInterface, index: number) => (
                <AllSkills {...skill} key={`${index}`} />
              ))}

            {renderSkill &&
              3 >= renderSkill.length &&
              renderSkill.map((skill: fuseSkillInterface, index: number) => (
                <Skill {...skill} key={`${index}`} />
              ))}
          </ul>
        </article>
      </div>

      <article className="flex flex-col align-center  space-y-12">
        <hr className="text-white" />
        <h2
          className={`text-2xl font-bd-retrocentric self-center  uppercase  ${styles.neonText}`}
        >
          Competency breakdown coming soon!
        </h2>
        <hr className="text-white" />
        <nav className=" self-center max-w-[75%]">
          <ul className="flex flex-row flex-wrap space-x-12 ">
            {skillgroups &&
              skillgroups?.map(
                (skillgroup: skillGroupInterface, index: number) => (
                  // <li className={`${styles.hex}`} key={index}></li>
                  <div
                    className="w-20 h-20 flex flex-col items-center"
                    key={index}
                  >
                    <div className="mb-4">
                      <div className="h-1 w-10 bg-white transform rotate-45 transform translate-x-4 translate-y-3"></div>
                      <div className="h-1 w-10 bg-white transform -rotate-45  translate-y-2 -translate-x-2"></div>
                    </div>
                    <div className="pl-2">
                      <div className="h-12 w-14 border-x-4 border-white"></div>
                    </div>

                    <div>
                      <div className="h-1 w-10 bg-white transform -rotate-45 translate-x-4 translate-y-3"></div>
                      <div className="h-1 w-10 bg-white transform rotate-45 scale-x-[-1] translate-y-2 -translate-x-2"></div>
                    </div>
                  </div>
                )
              )}
          </ul>
        </nav>
      </article>

      <article className="flex flex-col align-center">
        <hr className="text-white" />
        <h2
          className={`text-2xl font-bd-retrocentric self-center  uppercase  ${styles.neonText}`}
        >
          Technical Passions coming soon!
        </h2>
        <hr className="text-white" />
      </article>

      <article className="flex flex-col align-center">
        <hr className="text-white" />
        <h2
          className={`text-2xl font-bd-retrocentric self-center  uppercase  ${styles.neonText}`}
        >
          Favoured Tec Stack coming soon!
        </h2>
        <hr className="text-white" />
      </article>
    </section>
  );
}
