export interface LinkedinInterface {
  image: any;
  link: string;
  alt: string;
}

export interface GithubInterface {
  image: any;
  link: string;
  alt: string;
}

export interface CVInterface {
  pdficon: any;
  cvlink: string;
  alt: string;
}

export interface FooterInterface {
  socials: string;
  linkedin: LinkedinInterface;
  git: GithubInterface;
  cv: CVInterface;
}
