<script setup lang="ts">
import axios from "axios";
import { useAsyncState } from "../composables/useAsyncState";
import { useCardStore } from "../store/cardStore";
import Dialog from "./Dialog.vue";

const initResult = { data: [], isLoading: true, hasError: false };
const isSearchOpen = ref(false);
const searchResult = ref(initResult);
const inputText = ref("");
const cardStore = useCardStore();

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  searchResult.value = initResult;
  inputText.value = "";
};

const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): T => {
  let timeoutID: number | null = null;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as T;
};

const searchToken = debounce((e: InputEvent) => {
  const { data, isLoading, hasError } = useAsyncState(
    axios
      .get(
        `https://api.scryfall.com/cards/search?q=name:${e.target.value}+is:token`
      )
      .then((result) => {
        return result.data.data;
      }),
    []
  );
  searchResult.value = { data, isLoading, hasError };
}, 1000);

const addCard = (card) => {
  cardStore.addCard(card);
  toggleSearch();
};
</script>

<template>
  <div>
    <Dialog :open="isSearchOpen" @close="toggleSearch">
      <div>
        <input type="text" @input="searchToken" v-model="inputText" />

        <div>
          <div
            class="searchResult"
            v-if="
              !searchResult.isLoading &&
              !searchResult.hasError &&
              searchResult.data.length
            "
          >
            <button
              v-for="card in searchResult.data"
              type="button"
              :key="card.id"
              @click="addCard(card)"
            >
              <img
                :src="
                  card?.card_faces
                    ? card.card_faces[0].image_uris.normal
                    : card.image_uris.normal
                "
                :alt="card.name"
              />
            </button>
          </div>
          <span v-else-if="searchResult.isLoading"> Search for tokens... </span>
          <span v-else> No matching results found! </span>
        </div>
      </div>
    </Dialog>

    <button @click="toggleSearch">Add tokens</button>
  </div>
</template>

<style scoped lang="scss">
.searchResult {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;
  overflow-y: auto;
  max-height: 60vh;

  button {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
  }
}
</style>
