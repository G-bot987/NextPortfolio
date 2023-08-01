import React from "react";
import Image from "next/image";
import { CarouselSlideInterface } from "../../../interface/carousel.interface";

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
    <li className="items-center flex flex-col  w-[925px] h-[325px] uppercase font-bd-retrocentric p-4">
      {type === "img" && img && alt && (
        <div className="min-w-[900px] min-h-[300px] max-w-[900px] max-h-[300px] justify-evenly">
          <h2 className="text-2xl z-10 py-2">{experience}</h2>
          <div className="relative w-full h-[200px]">
            <Image
              src={img}
              alt={alt}
              style={{ objectFit: "fill" }}
              fill={true}
              quality={100}
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      {type === "txt" && (
        <div className="min-w-full min-h-full flex flex-col justify-evenly">
          <h1 className={`text-6xl p-8 `}>{mainHeader}</h1>
          {subHeader && <h2>{subHeader}</h2>}
          {technologiesTxt && <p>{technologiesTxt}</p>}
        </div>
      )}
      {type === "showCase" && img && alt && (
        <div className="min-w-full min-h-full flex flex-col justify-evenly">
          <h2 className="text-2xl">{mainHeader}</h2>
          <a className="flex justify-center" href={link}>
            <div className="relative w-full h-[200px]">
              <Image
                src={img}
                alt={alt}
                style={{ objectFit: "fill" }}
                fill={true}
                quality={100}
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </a>
        </div>
      )}
    </li>
  );
}
