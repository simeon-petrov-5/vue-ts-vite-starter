<script setup lang="ts">
import { useCardStore } from "../../store/cardStore";
import { Card } from "../../types/card";
import CardStack from "./CardStack.vue";
import Dialog from "../Dialog.vue";
import Form from "../Form.vue";

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

const selected = ref<Card | undefined>();

const onClick = (id: string) => {
  selected.value = cardStore.cardFromDeck(id);
  dialogOpen.value = true;
};

const dialogOpen = ref(false);
const toggle = () => {
  dialogOpen.value = !dialogOpen.value;
  if (!dialogOpen.value) selected.value = undefined;
};

const formEntry = ref();

const onCardUpdate = () => {
  const updateInfo = formEntry.value.onSave();
  cardStore.updateCard(updateInfo);
  selected.value = undefined;
};
</script>

<template>
  <section class="cardsGrid">
    <CardStack :item="demoCard" @click="onClick" />
    <CardStack :item="demoCard2" @click="onClick" />
    <CardStack v-for="card in cardStore.cards" :item="card" @click="onClick" />
  </section>

  <Dialog :open="dialogOpen" @close="toggle" @save="onCardUpdate">
    <template #title> {{ selected?.name }} </template>

    <Form v-if="selected" ref="formEntry" :card="selected" />
  </Dialog>
</template>

<style lang="scss" scoped>
.cardsGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(50px, 1fr));
  gap: 0.5rem;
}
</style>
