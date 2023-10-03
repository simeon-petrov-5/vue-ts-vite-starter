<script setup lang="ts">
import { useCardStore } from "../../store/cardStore";
import { Card } from "../../types/card";
import CardStack from "./CardStack.vue";
import Dialog from "../Dialog.vue";
import Form from "../Form.vue";

const cardStore = useCardStore();

const selected = ref<Card | undefined>();
const formEntry = ref();
const dialogOpen = ref(false);

const onClick = (id: string) => {
  selected.value = cardStore.cardFromDeck(id);
  dialogOpen.value = true;
};

const toggle = () => {
  dialogOpen.value = !dialogOpen.value;
  if (!dialogOpen.value) selected.value = undefined;
};

const onCardUpdate = () => {
  const updateInfo = formEntry.value.onSave();
  cardStore.updateCard(updateInfo);
  selected.value = undefined;
};
</script>

<template>
  <section class="cardsGrid">
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
