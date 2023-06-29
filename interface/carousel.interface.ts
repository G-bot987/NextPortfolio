import { StaticImageData } from "next/image";


export interface CarouselInterface {
    slides: CarouselSlideInterface[];
}

export interface CarouselSlideInterface {
    type: string;
    mainHeader?: string;
    subHeader?: string;
    technologiesTxt?: string;
    experience?: string;
    img?: StaticImageData;
    alt?: string;
    link?:any

}