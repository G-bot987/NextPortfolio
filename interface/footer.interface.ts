export interface LinkedinInterface {
  image: any;
  link: string;
}

export interface GithubInterface {
  image: any;
  link: string;
}

export interface CVInterface {
  pdficon: any;
  cvlink: string;
}

export interface FooterInterface {
  socials: string;
  linkedin: LinkedinInterface;
  git: GithubInterface;
  cv: CVInterface;

  //   image: any;
  //   link: string;
  //   gitimage: any;
  //   gitlink: string;
}
