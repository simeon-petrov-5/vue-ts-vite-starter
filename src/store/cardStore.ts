import { defineStore } from "pinia";
import { Card } from "../types/card";

const demoCard = {
  id: "asd",
  name: "Wolf",
  imgUrl:
    "https://cards.scryfall.io/normal/front/8/1/81605b8d-cf1d-49dc-aebb-a857d6796a77.jpg?1675456083",
  count: 10,
  tapped: 3,
  untapped: 7,
};

const demoCard2 = {
  id: "asd",
  name: "Wolf",
  imgUrl:
    "https://cards.scryfall.io/normal/front/8/1/81605b8d-cf1d-49dc-aebb-a857d6796a77.jpg?1675456083",
  count: 10,
  tapped: 2,
  untapped: 1,
};

export const useCardStore = defineStore("card", () => {
  const cards = ref<Card[]>([demoCard, demoCard2]);

  const addCard = (newCard: any) => {
    let card: Card | undefined = cardFromDeck(newCard.id);
    if (!card) {
      card = {
        id: newCard.id,
        name: newCard.name,
        imgUrl: newCard?.card_faces
          ? newCard.card_faces[0].image_uris.normal
          : newCard.image_uris.normal,
        tapped: 0,
        untapped: 1,
      };
      cards.value.push(card);
    } else {
      card.untapped += 1;
    }
    console.log(cards);
  };

  const updateCard = ({
    cardId,
    tapSection,
    add,
    remove,
    tap,
  }: {
    cardId: string;
    tapSection: "tapped" | "untapped";
    add: number;
    remove: number;
    tap: number;
  }) => {
    const card = cardFromDeck(cardId);
    if (!card) return;
    const reverseSection = tapSection === "tapped" ? "untapped" : "tapped";
    card[tapSection] -= tap;
    card[reverseSection] += tap;
    card[tapSection] += add;
    card[tapSection] -= remove;
    if (card[tapSection] < 0) card[tapSection] = 0;

    cards.value.find((token: Card, idx: number) => {
      if (token.id === card.id) {
        cards.value[idx] = card;
      }
    });
  };

  const cardFromDeck = (cardId: string): Card | undefined => {
    return cards.value.find((token: Card) => token.id === cardId);
  };

  return { cards, addCard, cardFromDeck, updateCard };
});
