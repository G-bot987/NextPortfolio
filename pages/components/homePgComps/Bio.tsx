import React from "react";
import styles from "../../../styles/Home.module.css";
import { synopsisPropertiesInterface } from "../../../interface/home.interface";
import Image from "next/image";

export default function Catagory(props: synopsisPropertiesInterface) {
  const { header, txt, portrait, hobbiesHeader, hobbiesTxt } = props;

  return (
    <article
      className={`text-base font-tektur border-b-2 border-solid border-black shrink-0 sm:flex sm:flex-row text-black px-8`}
    >
      <Image
        src={portrait?.IMG}
        alt={portrait?.alt || "undefined"}
        width={250}
        height={250}
        className="sm:border-r-2 sm:border-b-2 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none border-black sm:rounded-bl-lg w-full"
      />
      <section className=" flex flex-col text-center justify-around ">
        <h2
          className={`justify-center font-bd-retrocentric uppercase sm:border  border-x-2 sm:border-l-0  sm:rounded-tr-lg border-white text-2xl ${styles.neonText} `}
        >
          {header}
        </h2>
        <article className="grow sm:text-white text-justify flex flex-col justify-around   text-black w-full">
          <section className="px-4 flex flex-col text-justify bg-white  justify-center text-black grow ">
            <p>{txt}</p>
          </section>
          <article className="sm:text-white flex flex-col sm:bg-transparent text-black  w-full 2xl:min-h-[50%] ">
            <section className="sm:border-t-0 sm:border-white border-black uppercase ">
              <h2
                className={`justify-center uppercase font-bd-retrocentric text-center text-2xl border-x-2  sm:border-l-0 ${styles.neonText}`}
              >
                {hobbiesHeader}
              </h2>
            </section>
            <article className="px-4 flex flex-col text-justify text-black  bg-white justify-center min-h-[70%] rounded-br-lg  max-sm:rounded-bl-lg grow">
              <p>{hobbiesTxt}</p>
            </article>
          </article>
        </article>
      </section>
    </article>
  );
}
