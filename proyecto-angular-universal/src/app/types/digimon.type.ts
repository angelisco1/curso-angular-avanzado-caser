export interface Digimon {
  name: string,
  img: string,
  level: string,
  fav?: boolean,
}

export type Digimons = Array<Digimon>