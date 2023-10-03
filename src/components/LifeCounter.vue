<script setup lang="ts">
import { onLongPress } from "@vueuse/core";
import { useLifeStore } from "../store/lifeStore";

const htmlRefHook = ref<HTMLElement | null>(null);
const longPressedHook = ref(false);
const onLongPressCallbackHook = (e: PointerEvent) => {
  longPressedHook.value = true;
};
const resetHook = () => {
  longPressedHook.value = false;
};

const lifeStore = useLifeStore();

onLongPress(htmlRefHook, onLongPressCallbackHook, {
  modifiers: { prevent: true },
});

const onClick = () => {
  lifeStore.subtract();
  resetHook();
};
</script>

<template>
  <button @click="onClick">{{ lifeStore.life }}</button>
</template>

<style scoped></style>
