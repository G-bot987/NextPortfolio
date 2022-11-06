export interface synopsisPropertiesInterface {
  header: string;
  txt: string;
  portrait?: portraitInterface;
}
export interface portraitInterface {
  IMG: any;
  alt: string;
}

export interface HomePageInterface {
  synopsisProperties: synopsisPropertiesInterface[];
}
