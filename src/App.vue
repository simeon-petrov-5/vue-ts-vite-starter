<script setup lang="ts">
import TokenSearch from "./components/TokenSearch.vue";
import CardsGrid from "./components/cards/CardsGrid.vue";
import LifeCounter from "./components/LifeCounter.vue";
import Dice from "./components/Dice.vue";
import FloatingFooter from "./components/FloatingFooter.vue";
import { useModalStore } from "./store/modalsStore";
import Dialog from "./components/Dialog.vue";

const { visibility, close, toggle } = useModalStore();
</script>

<template>
  <div>
    <LifeCounter />
    <div class="container">
      <CardsGrid />

      <Dialog
        hide-save
        hide-cancel
        :open="visibility.dice"
        @close="close('dice')"
      >
        <Dice />
      </Dialog>
      <TokenSearch />
    </div>
    <FloatingFooter />
  </div>
</template>

<style scoped>
.container {
  height: calc(100vh - 50px - 105px);
  overflow: auto;
  margin-top: var(--form-element-spacing-horizontal);
  margin-bottom: var(--form-element-spacing-horizontal);
  padding-top: 0;
  padding-bottom: 0;
}
</style>
