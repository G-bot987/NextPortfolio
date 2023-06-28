export interface LinkInterface {
  deployed: string;
  repo: string;
  notes?: string;
}

export interface ImgsInterface {
  live: any;
  alt: string;
  git: any;
  gitAlt: string;
}

export interface TechnologyInterface {
  key: number;
  tec: string;
}

export interface ProjectInterface {
  header: string;
  showCase: boolean;
  technologies: Number[];
  description: string;
  links: LinkInterface;
  imgs: ImgsInterface;
}

export interface ProjectsDataInterface {
  technologies: TechnologyInterface[];
  projects: ProjectInterface[]
}
