<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{ (e: "close"): void }>();

const bodyEl = ref(null);
onClickOutside(bodyEl, () => {
  emit("close");
});
</script>

<template>
  <dialog :open="props.open" @close="emit('close')">
    <div v-if="props.open" class="dialog" ref="bodyEl">
      <h2 class="title">
        <slot name="title" />
      </h2>
      <form method="dialog">
        <slot />
        <button type="submit" class="save">Save</button>
      </form>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);

  .title {
    font-size: 1.25rem;
  }

  .save {
    width: auto;
    padding: var(--form-element-spacing-vertical)
      calc(2 * var(--form-element-spacing-horizontal));
    margin: 0 auto;
  }
}
</style>
