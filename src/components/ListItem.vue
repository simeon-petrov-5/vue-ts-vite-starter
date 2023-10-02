<script setup lang="ts">
const props = defineProps<{ value: string; isHighlighted?: boolean }>();
const emit = defineEmits<{ (e: "onRemove", name: string): void }>();
</script>

<template>
  <li :class="{ highlighted: props.isHighlighted }">
    {{ props.value }}
    <button type="button" @click="emit('onRemove', props.value)">Remove</button>
  </li>
</template>

<style scoped>
.highlighted {
  background: lightcoral;
}
</style>
