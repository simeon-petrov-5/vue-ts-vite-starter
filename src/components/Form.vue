<script setup lang="ts">
import { Card } from "../types/card";

const props = defineProps<{ card: Card }>();
const tapSection = ref<"tapped" | "untapped">("untapped");
const state = ref<{ add: number; remove: number; tap: number }>({
  add: 0,
  remove: 0,
  tap: 0,
});

const sectionToggle = () => {
  tapSection.value = tapSection.value === "tapped" ? "untapped" : "tapped";
};

const onInputChange = (e: any) => {
  const mode: "add" | "remove" | "tap" = e.target.id;
  state.value[mode] = Number(e.target.value);
};

const onSave = () => {
  return {
    cardId: props.card.id,
    tapSection: tapSection.value,
    ...state.value,
  };
};
defineExpose({ onSave });
</script>

<template>
  <div role="group">
    <button type="button" class="btnsec" @click.prevent="sectionToggle">
      Untapped [ {{ card.untapped }} ]
    </button>
    <button type="button" class="btnsec" @click.prevent="sectionToggle">
      Tapped [ {{ card.tapped }} ]
    </button>
  </div>
  <div class="edit">
    Add:
    <input
      type="number"
      id="add"
      name="add"
      placeholder="Add"
      @change="onInputChange"
    />
  </div>
  <div class="edit">
    Remove:
    <input
      type="number"
      id="remove"
      name="remove"
      placeholder="Remove"
      @change="onInputChange"
    />
  </div>

  <div class="edit">
    Un/Tap:
    <input
      type="number"
      id="tap"
      name="tap"
      placeholder="Tap"
      @change="onInputChange"
    />
  </div>
</template>

<style lang="scss" scoped>
div[role="group"] {
  display: inline-flex;
  position: relative;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 transparent;
  vertical-align: middle;
  transition: box-shadow 0.2s ease-in-out;
  .btnsec {
    width: 180px;
  }
}

.edit {
  display: flex;
  justify-content: center;
  .confirmbtn {
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 90px;
  }
}
</style>
