<template>
  <article class="article">
    <slot name="icon" />
    <h2>{{ props.title }}</h2>
    <slot />
    <p>{{ props.desc }}</p>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; desc: string }>();
</script>

<style scoped>
.article {
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
}
</style>
