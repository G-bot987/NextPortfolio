import React, { useState, useEffect, useMemo } from "react";

import Fuse from "fuse.js";
import styles from "../../styles/Home.module.css";
import {
  SkillInterface,
  TechnologiesInterface,
  fuseSkillInterface,
  SKillGroupsWithSkillsInterface,
} from "../../interface/technologies.interface";
import Skill from "../components/skillPgComps/Skill";
import AllSkills from "../components/skillPgComps/AllSkills";
import SkillGroup from "../components/skillPgComps/SkillsByGroupNavbar/SkillGroup";

export default function Technologies(props: TechnologiesInterface) {
  const { skills, header, skillgroups } = props;

  const [renderSkill, setRenderSKill]: any = useState([]);

  const [selectedTechnologies, setSelectedTechnologies]: any = useState([]);

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

  const SkillgroupsWithSkills = skillgroups?.map((skillgroup) => {
    const ownedSkills = skills?.filter(
      (skill) => skill.skillGroupKey === skillgroup.keyProp
    );

    return {
      name: skillgroup.groupName,
      keyProp: skillgroup.keyProp,
      ownedSkills,
    };
  });

  const filterSkillGroups = (techId: number) => {
    if (selectedTechnologies.includes(techId)) {
      setSelectedTechnologies([]);
    } else {
      setSelectedTechnologies([techId]);
    }
  };

  const foundTechGroup: SKillGroupsWithSkillsInterface[] | undefined =
    useMemo(() => {
      const tecGroup: SKillGroupsWithSkillsInterface[] =
        SkillgroupsWithSkills?.filter(
          (skillgroup: SKillGroupsWithSkillsInterface) => {
            if (selectedTechnologies.length === 0) {
              return SkillgroupsWithSkills;
            }
            return skillgroup.keyProp === selectedTechnologies[0];
          }
        );
      if (tecGroup && tecGroup.length === 1) {
        tecGroup[0].selected = true;
      }
      return tecGroup;
    }, [selectedTechnologies[0]]);

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
            {foundTechGroup &&
              foundTechGroup?.map(
                (skillgroup: SKillGroupsWithSkillsInterface, index: number) => (
                  <div key={index}>
                    <SkillGroup
                      {...skillgroup}
                      index={index}
                      key={index}
                      filterSkillGroups={filterSkillGroups}
                    />
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

      <article className="flex flex-col align-center">
        <hr className="text-white" />
        <h2
          className={`text-2xl font-bd-retrocentric self-center  uppercase  ${styles.neonText}`}
        >
          Technical Strengths coming soon!
        </h2>
        <hr className="text-white" />
      </article>
    </section>
  );
}
