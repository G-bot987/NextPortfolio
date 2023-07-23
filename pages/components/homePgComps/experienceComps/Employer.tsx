import React from "react";
import { experienceInterface } from "../../../../interface/home.interface";

interface RoleInterface {
  job: experienceInterface;
  index: number;
}

export default function Employer(props: RoleInterface) {
  const { job, index } = props;
  console.log(index);
  const { company } = job;

  const evenIndex = index % 2 === 0 ? true : false;

  console.log(evenIndex);
  return (
    <article className={`max-w-xs   ${evenIndex ? ` self-start` : `self-end`}`}>
      {company} {index}
    </article>
  );
}
