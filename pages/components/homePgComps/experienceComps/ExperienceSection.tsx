import React from "react";
import Employer from "./Employer";
import { experienceInterface } from "../../../../interface/home.interface";

export default function ExperienceSection(props: experienceInterface[]) {
  console.log(props);
  Object.keys(props).map((role: any, index: number) => console.log(role));
  return (
    <ul className="flex flex-col pt-28  min-w-full min-h-full space-y-14">
      {Object.keys(props).map((role: any, index: number) => (
        <li key={index} className="flex flex-col ">
          <Employer key={index} job={props[role]} index={role} />
        </li>
      ))}
    </ul>
  );
}
