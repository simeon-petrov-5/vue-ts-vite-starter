<script setup lang="ts">
import Dialog from "./components/Dialog.vue";
import TokenSearch from "./components/TokenSearch.vue";
import CardsGrid from "./components/cards/CardsGrid.vue";
import Form from "./components/Form.vue";
import { Card } from "./types/card";
import LifeCounter from "./components/LifeCounter.vue";
import Dice from "./components/Dice.vue";

const dialogOpen = ref(false);
const toggle = () => {
  dialogOpen.value = !dialogOpen.value;
};

const diceDialog = ref(false);
const toggleDiceDialog = () => {
  diceDialog.value = !diceDialog.value;
};

const card: Card = {
  id: "idgwolf",
  name: "Wolf",
  imgUrl: "",
  count: 12,
  tapped: 8,
  untapped: 4,
};
</script>

<template>
  <div>
    <LifeCounter />
    <div class="container">
      <CardsGrid />

      <Dialog :open="dialogOpen" @close="toggle">
        <template #title> {{ card.name }} </template>

        <Form :card="card" />
      </Dialog>

      <Dialog
        hide-save
        hide-cancel
        :open="diceDialog"
        @close="toggleDiceDialog"
      >
        <Dice />
      </Dialog>

      <button @click="toggle">toggle dialog</button>
      <button @click="toggleDiceDialog">d20</button>
      <TokenSearch />
    </div>
  </div>
</template>
