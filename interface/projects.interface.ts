export interface LinkInterface {
  deployed: string;
  repo: string;
}

export interface ImgsInterface {
  live: any;
  alt: string;
  git: any;
  gitAlt: string;
}

export interface ProjectInterface {
  header: string;
  description: string;
  links: LinkInterface;
  imgs: ImgsInterface;
}
