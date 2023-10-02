<template>
  <div>
    <h2>Fetcher component</h2>

    <ul v-if="!isLoading && !hasError">
      <li v-for="poke in data">{{ poke.name }}</li>
    </ul>
    <span v-else-if="isLoading"> Loading ... </span>
    <span v-else> OOOPS error! </span>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { useAsyncState } from "../composables/useAsyncState";
const { data, isLoading, hasError } = useAsyncState(
  axios.get("https://pokeapi.co/api/v2/pokemon").then((e) => e.data.results),
  []
);
</script>

<style scoped></style>
