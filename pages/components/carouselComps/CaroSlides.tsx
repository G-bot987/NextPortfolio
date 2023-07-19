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
    <li className="items-center flex flex-col uppercase font-bd-retrocentric">
      {type === "img" && img && alt && (
        <div className="min-w-[200px] min-h-[350px] flex flex-col justify-evenly">
          <h2 className="text-2xl ">{experience}</h2>
          <div className="relative w-[200px] h-[200px]">
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
            <div className="relative w-[150px] h-[150px]">
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
