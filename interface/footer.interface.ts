export interface LinkedinInterface {
  image: any;
  link: string;
}

export interface GithubInterface {
  image: any;
  link: string;
}

export interface FooterInterface {
  socials: string;
  linkedin: LinkedinInterface;
  git: GithubInterface;

  //   image: any;
  //   link: string;
  //   gitimage: any;
  //   gitlink: string;
}
