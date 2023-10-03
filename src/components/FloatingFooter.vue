<script setup lang="ts">
import { useModalStore } from "../store/modalsStore.ts";
const { toggle } = useModalStore();
</script>

<template>
  <footer>
    <button class="secondary" @click="">
      <font-awesome-icon class="primary" :icon="['fas', 'arrows-rotate']" />
    </button>
    <button class="secondary" @click="toggle('dice')">
      <font-awesome-icon class="primary" :icon="['fas', 'dice-d20']" />
    </button>
    <button class="secondary" type="button" @click="toggle('add')">
      <font-awesome-icon class="primary" :icon="['fas', 'circle-plus']" />
    </button>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  button {
    margin: 0;
  }

  svg {
    height: 1.75rem;
    width: 1.75rem;
    vertical-align: unset;
  }
}
</style>
