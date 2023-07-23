import React from "react";
import { experienceInterface } from "../../../../interface/home.interface";
import Technology from "./Technology";

interface RoleInterface {
  job: experienceInterface;
  index: number;
}

export default function Employer(props: RoleInterface) {
  const { job, index } = props ?? {};
  const { company, dates, leave, jobtitle, tec, description } = job ?? {};

  const evenIndex = index % 2 === 0 ? true : false;

  console.log(evenIndex);
  return (
    <article
      className={`  bg-white  text-black	flex flex-col min-w-[50%] ${
        evenIndex ? ` self-start rounded-r-lg` : `self-end rounded-l-lg`
      }`}
    >
      <section className="flex flex-row min-w-full">
        <section className="flex flex-row min-w-full justify-between">
          <section className="flex flex-col">
            <h2>{company}</h2>
            <h3>{jobtitle}</h3>
          </section>
          <section className="flex flex-col justify-self-end">
            <h3>{dates}</h3>
            <h3>{leave}</h3>
          </section>
        </section>
      </section>
      <section>
        <ul className="flex flex-row">
          {tec.map((techology: string, index: number) => (
            <Technology key={index} techology={techology} />
          ))}
        </ul>
        {description}
      </section>
    </article>
  );
}
