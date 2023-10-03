<script setup lang="ts">
import { Card } from "../types/card";

const props = defineProps<{ card: Card }>();
const tapSection = ref<"tapped" | "untapped">("untapped");
const state = ref<{ add: number; remove: number; tap: number }>({
  add: 0,
  remove: 0,
  tap: 0,
});

const onSwitch = (e: any) => {
  tapSection.value = e.target.checked ? "tapped" : "untapped";
};

const tapText = computed(() =>
  tapSection.value === "tapped" ? "Untap" : "Tap"
);

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
  <label for="switch">
    Untapped [ {{ card.untapped }} ]
    <input
      type="checkbox"
      id="switch"
      name="switch"
      role="switch"
      @change="onSwitch"
    />
    Tapped [ {{ card.tapped }} ]
  </label>

  <label for="add">
    Add
    <input
      type="number"
      id="add"
      name="add"
      placeholder="Count of tokens to be added"
      @change="onInputChange"
    />
  </label>

  <label for="remove">
    Remove
    <input
      type="number"
      id="remove"
      name="remove"
      placeholder="Count of tokens to be removed"
      @change="onInputChange"
    />
  </label>

  <label for="tap">
    {{ tapText }}
    <input
      type="number"
      id="tap"
      name="tap"
      :placeholder="`Count of tokens to be ${tapText.toLowerCase()}ped`"
      @change="onInputChange"
    />
  </label>
</template>

<style lang="scss" scoped></style>
