export interface LinkInterface {
  deployed: string;
  repo: string;
}

export interface ImgInterface {
  ref: string;
  alt: string;
}

export interface ProjectInterface {
  header: string;
  description: string;
  links: LinkInterface;
  img: ImgInterface;
}
