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
  experienceArticle: experienceArticleInterface;
  supplementaryArticles: supplementaryArticlesInterface[]
}

export interface experienceArticleInterface{
  header: string;
  experience: experienceInterface[]
} 

export interface experienceInterface{
  company: string,
  dates: string,
  leave: leaveInterface,
  jobtitle: string,
  stack: string[],
  role: string
}

export interface leaveInterface {
  header: string;
  body: string
}

export interface supplementaryArticlesInterface {
title: string;
body: string;
}
