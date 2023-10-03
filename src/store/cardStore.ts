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

  const cardFromDeck = (cardId: string): Card | undefined => {
    return cards.value.find((token: Card) => token.id === cardId);
  };

  return { cards, addCard, cardFromDeck };
});
