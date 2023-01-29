import { StaticImageData } from "next/image";

export interface synopsisPropertiesInterface {
  header: string;
  txt: string;
  portrait?: portraitInterface;
  hobbiesHeader?: string;
  hobbiesTxt?: string;
}
export interface portraitInterface {
  IMG: any;
  alt: string;
}

export interface slideInterface {
  img: StaticImageData
}

export interface HomePageInterface {
  carouselSlides: slideInterface[];
  synopsisProperties: synopsisPropertiesInterface[];
}
