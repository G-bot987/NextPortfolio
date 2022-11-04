export interface synopsisPropertiesInterface {
  header: string;
  txt: string;
}
export interface portraitInterface {
  IMG: any;
  alt: string;
}

export interface HomePageInterface {
  portrait: portraitInterface;
  synopsisProperties: synopsisPropertiesInterface[];
}
