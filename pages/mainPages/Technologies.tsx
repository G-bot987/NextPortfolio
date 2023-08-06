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
            <li className="max-w-fit  p-2 my-2 uppercase space-x-4">
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
          <ul className="flex flex-row flex-wrap">
            {skillgroups &&
              skillgroups?.map(
                (skillgroup: skillGroupInterface, index: number) => (
                  <li
                    className={`w-[48px] h-[140px] flex flex-col items-center justify-center flex ${
                      index % 2 == 0 ? `mt-[92px]` : ``
                    } `}
                    key={index}
                  >
                    <div className="pr-2 pb-1">
                      <div className="mt-2 h-[2px] w-[69px] bg-white transform rotate-45 translate-x-7 -translate-y-4"></div>
                      <div className="h-[2px] w-[68px] bg-white transform -rotate-45  -translate-y-4 -translate-x-5"></div>
                    </div>
                    <div className="min-w-[98px]  ">
                      <div className="h-12 w-full border-x-2 border-white flex flex-col font-tektur  items-center px-1 justify-center">
                        <p className=" max-w-min text-[10px]">
                          {skillgroup.groupName}
                        </p>
                      </div>
                    </div>

                    <div className="pt-1 pl-6">
                      <div className="h-[2px] w-[70px] bg-white transform -rotate-45 translate-x-3 translate-y-4"></div>
                      <div className="h-[2px] w-[69px] bg-white transform rotate-45  translate-y-4 -translate-x-9"></div>
                    </div>
                  </li>
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
