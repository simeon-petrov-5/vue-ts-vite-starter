<script setup lang="ts">
import CardStack from "./CardStack.vue";
import { useCardStore } from "../../store/cardStore";

const cardStore = useCardStore();

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
</script>

<template>
  <section class="cardsGrid">
    <CardStack :item="demoCard" />
    <CardStack :item="demoCard2" />
    <CardStack v-for="card in cardStore.cards" :item="card" />
  </section>
</template>

<style lang="scss" scoped>
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 0.5rem;
}
</style>
