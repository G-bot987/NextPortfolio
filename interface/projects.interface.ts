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

export interface PropertyInterface {
  key: number;
  option: string;
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
  projectSearch:  ProjectSearchInterface;
  technologies: PropertyInterface[];
  recentProject: PropertyInterface[] ;
  projectType: PropertyInterface[];
  projects: ProjectInterface[]
}

export interface ProjectSearchInterface{
  txt: string;
  params: string[];
}


