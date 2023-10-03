<script setup lang="ts">
import { onLongPress } from "@vueuse/core";
import { useLifeStore } from "../store/lifeStore";

const lifeStore = useLifeStore();
const htmlRefHook = ref<HTMLElement | null>(null);
const wasPressedLong = ref(false);
const onLongPressCallbackHook = () => {
  console.log("LONGGG");
  wasPressedLong.value = true;
  lifeStore.undo();
};

onLongPress(htmlRefHook, onLongPressCallbackHook, {
  modifiers: { prevent: true },
});

const onClick = () => {
  if (wasPressedLong.value) {
    wasPressedLong.value = false;
  } else {
    lifeStore.decrease();
  }
};
</script>

<template>
  <button ref="htmlRefHook" @click="onClick" class="lifeBtn">
    {{ lifeStore.life }}
  </button>
  <progress
    class="lifeProgress"
    :value="lifeStore.life"
    :max="lifeStore.defLife"
  ></progress>
</template>

<style scoped>
.lifeBtn {
  margin-bottom: -12px;
  border-radius: 0px;
}
.lifeProgress {
  border-radius: 0px;
  margin: 0;
}
</style>
