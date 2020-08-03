export interface IBet {
  bet: string;
  entry: string;
  game: string;
  market: string;
  odd: string;
  result: string;
}

export interface ICategories {
  [key: string]: {
    championship: { name: string; };
    market: { name: string; };
  }
}
