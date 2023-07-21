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

export interface HomePageInterface {
  synopsisProperties: synopsisPropertiesInterface[];
  experience: experienceInterface[];
  supplementaryArticles: supplementaryArticlesInterface[]
}

export interface experienceInterface{
  company: string,
  dates: string,
  leave: string,
  jobtitle: string,
  tec: string[],
  description: string

}

export interface supplementaryArticlesInterface {
title: string;
body: string;
}
