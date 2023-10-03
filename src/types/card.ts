export interface Card {
  id: string; // scryfall id
  name: string; // -- name
  imgUrl: string;
  count: number;
  tapped: number;
  untapped: number;
}
