<script setup lang="ts">
import Dialog from "./components/Dialog.vue";
import TokenSearch from "./components/TokenSearch.vue";
import CardsGrid from "./components/cards/CardsGrid.vue";
import Form from "./components/Form.vue";
import { Card } from "./types/card";
import LifeCounter from "./components/LifeCounter.vue";
import FloatingFooter from "./components/FloatingFooter.vue";
import { useModalStore } from "./store/modalsStore";

const { visibility, close, toggle } = useModalStore();

const card: Card = {
  id: "idgwolf",
  name: "Wolf",
  imgUrl: "",
  tapped: 8,
  untapped: 4,
};
</script>

<template>
  <div>
    <LifeCounter />
    <div class="container">
      <CardsGrid />

      <Dialog :open="visibility.modify" @close="close('modify')">
        <template #title> {{ card.name }} </template>

        <Form :card="card" />
      </Dialog>

      <button @click="toggle('modify')">toggle dialog</button>
      <TokenSearch />

      <FloatingFooter />
    </div>
  </div>
</template>
