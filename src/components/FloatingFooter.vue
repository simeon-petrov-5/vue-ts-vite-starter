<script setup lang="ts">
import { useModalStore } from "../store/modalsStore.ts";
const { toggle } = useModalStore();
</script>

<template>
  <footer>
    <button type="button" @click="toggle('add')">
      <font-awesome-icon class="primary" :icon="['fas', 'circle-plus']" />
    </button>
  </footer>
</template>

<style scoped lang="scss">
footer {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;

  button {
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    box-shadow: none;
  }

  svg {
    height: 4rem;
    width: 4rem;
    color: var(--primary);
    vertical-align: unset;
  }
}
</style>
