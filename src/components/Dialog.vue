<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const props = defineProps<{
  open: boolean;
  hideSave?: boolean;
  hideCancel?: boolean;
}>();
const emit = defineEmits<{ (e: "close"): void; (e: "save"): void }>();

const bodyEl = ref(null);
onClickOutside(bodyEl, () => {
  emit("close");
});
</script>

<template>
  <dialog :open="props.open" @close="emit('close')">
    <div v-if="props.open" class="dialog" ref="bodyEl">
      <button class="closeBtn secondary outline" @click="emit('close')">
        X
      </button>
      <h2 v-if="$slots.title" class="title">
        <slot name="title" />
      </h2>
      <form method="dialog">
        <slot />
        <div class="btnGrid">
          <button
            v-if="!props.hideSave"
            type="submit"
            class="small mx-auto"
            @click="emit('save')"
          >
            Save
          </button>
          <button
            v-if="!props.hideCancel"
            type="button"
            class="secondary small mx-auto"
            @click="emit('close')"
          >
            Close
          </button>
        </div>
      </form>
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.dialog {
  position: relative;
  width: 90vw;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  padding: calc(var(--form-element-spacing-vertical) * 3)
    var(--form-element-spacing-horizontal) var(--form-element-spacing-vertical);

  .closeBtn {
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    margin: 0;
    width: auto;
    padding: 0.25rem 0.5rem;
    border: none;
  }

  .title {
    font-size: 1.25rem;
  }

  .btnGrid {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    button {
      margin: unset;
    }
  }
}
</style>
