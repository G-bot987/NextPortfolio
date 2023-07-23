import React from "react";
import { experienceInterface } from "../../../../interface/home.interface";
import Technology from "./Technology";

interface RoleInterface {
  job: experienceInterface;
  index: number;
}

export default function Employer(props: RoleInterface) {
  const { job, index } = props ?? {};
  const { company, dates, leave, jobtitle, stack, role } = job ?? {};
  const { header, body } = leave ?? {};

  const evenIndex = index % 2 === 0 ? true : false;

  const companyTxt = Object.keys(job || {})[0] || "";
  const stackTxt = Object.keys(job || {})[4] || "";
  const roleTxt = Object.keys(job || {})[5] || "";
  console.log(roleTxt);

  return (
    <article
      className={`  bg-white  text-black	flex flex-col min-w-[50%] font-bd-retrocentric p-4 space-y-2 ${
        evenIndex
          ? ` self-start rounded-r-lg mr-20`
          : `self-end rounded-l-lg ml-20`
      }`}
    >
      <section className="flex flex-row min-w-full">
        <section className="flex flex-row min-w-full justify-between">
          <section className="flex flex-col uppercase space-y-2">
            <h2>
              {` ${companyTxt} :
              ${company}`}
            </h2>
            <h3>{jobtitle}</h3>
          </section>
          <section className="flex flex-col justify-self-end space-y-2">
            <h3 className="uppercase">{dates}</h3>
            <article className="flex flex-row space-x-2">
              <h3 className="uppercase ">{`${header}:`}</h3>
              <p className="font-tektur">{body}</p>
            </article>
          </section>
        </section>
      </section>
      <section className="space-y-2">
        <ul className="flex flex-row justify-start uppercase">
          <li>{`${stackTxt} :`}</li>
          {stack &&
            stack.map((techology: string, index: number) => (
              <Technology key={index} techology={techology} />
            ))}
        </ul>
        <article className="flex flex-row justify-around space-x-2">
          <h3 className="font-bd-retrocentric uppercase min-w-[7%]">{`${roleTxt} :`}</h3>
          <p className="font-tektur">{role}</p>
        </article>
      </section>
    </article>
  );
}
