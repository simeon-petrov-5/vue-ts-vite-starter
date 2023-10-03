<script setup lang="ts">
import Dialog from "./components/Dialog.vue";
import TokenSearch from "./components/TokenSearch.vue";
import CardsGrid from "./components/cards/CardsGrid.vue";

const dialogOpen = ref(false);
const toggle = () => {
  dialogOpen.value = !dialogOpen.value;
};
</script>

<template>
  <div class="container">
    <h1>Hello hackers</h1>

    <CardsGrid />

    <Dialog :open="dialogOpen" @close="toggle">
      <template #title> Hi I'm the title </template>

      <div>
        <input type="text" />
        <input type="text" />
        <button>test</button>
      </div>
    </Dialog>

    <button @click="toggle">toggle dialog</button>
    <TokenSearch />
  </div>
</template>
