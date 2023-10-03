import { defineStore } from "pinia";
import { Card } from "../types/card";

export const useCardStore = defineStore("card", () => {
  const cards = ref<Card[]>([]);

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
    if (card[tapSection] < tap) tap = card[tapSection];
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
