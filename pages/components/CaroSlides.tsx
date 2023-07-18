import React from "react";
import { CarouselSlideInterface } from "../../interface/carousel.interface";
import Image from "next/image";

export default function CaroSlides(props: CarouselSlideInterface) {
  const {
    type,
    img,
    alt,
    experience,
    mainHeader,
    subHeader,
    technologiesTxt,
    link,
  } = props;
  return (
    <li className="items-center flex flex-col uppercase font-tektur">
      {type === "img" && img && alt && (
        <div className="min-w-[200px] min-h-[350px] flex flex-col justify-evenly">
          <h2 className="text-2xl ">{experience}</h2>
          <Image src={img} alt={alt} width={200} height={350} />
        </div>
      )}

      {type === "txt" && (
        <div className="min-w-[500px] min-h-[500px] flex flex-col justify-evenly">
          <h1 className={`text-6xl p-8 `}>{mainHeader}</h1>

          <h2>{subHeader}</h2>

          <p>{technologiesTxt}</p>
        </div>
      )}
      {type === "showCase" && img && alt && (
        <div className="min-w-[200px] min-h-[350px] flex flex-col justify-evenly">
          <h2 className="text-2xl">{mainHeader}</h2>
          <a className="flex justify-center" href={link}>
            <Image src={img} alt={alt} width={200} height={350} />
          </a>
        </div>
      )}
    </li>
  );
}
