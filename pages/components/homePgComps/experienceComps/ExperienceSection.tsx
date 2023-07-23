import React from "react";
import Employer from "./Employer";
import {
  experienceInterface,
  experienceArticleInterface,
} from "../../../../interface/home.interface";

export default function ExperienceSection(props: experienceArticleInterface) {
  const { experience, header } = props ?? {};
  return (
    <ul className="flex flex-col pt-28  min-w-full min-h-full space-y-14">
      <li>{header}</li>

      {experience &&
        Object.keys(experience).map((role: any, index: number) => (
          <li key={index} className="flex flex-col ">
            <Employer key={index} job={experience[role]} index={role} />
          </li>
        ))}
    </ul>
  );
}
