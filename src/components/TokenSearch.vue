<script setup lang="ts">
import axios from "axios";
import { useCardStore } from "../store/cardStore";
import Dialog from "./Dialog.vue";
import { useModalStore } from "../store/modalsStore";

const { visibility, close } = useModalStore();

const initResult: { data: any[]; isLoading: boolean; hasError: boolean } = {
  data: [],
  isLoading: true,
  hasError: false,
};
const searchResult = reactive<{
  data: any[];
  isLoading: boolean;
  hasError: boolean;
}>(initResult);
const inputText = ref("");
const cardStore = useCardStore();

const toggleSearch = () => {
  searchResult.data = { ...initResult.data };
  searchResult.isLoading = initResult.isLoading;
  searchResult.hasError = initResult.hasError;
  inputText.value = "";
  close("add");
};

const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): T => {
  let timeoutID: number | undefined = undefined;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  } as T;
};

const searchToken = debounce(async (e: any) => {
  searchResult.isLoading = true;
  searchResult.hasError = false;
  try {
    const res = await axios.get(
      `https://api.scryfall.com/cards/search?q=name:${e.target.value}+is:token`
    );
    searchResult.data = res.data.data;
  } catch (e) {
    console.error("Ops", e);
    searchResult.hasError = true;
  } finally {
    searchResult.isLoading = false;
  }
}, 1000);

const addCard = (card: any) => {
  cardStore.addCard(card);
  toggleSearch();
};
</script>

<template>
  <Dialog hide-save hide-cancel :open="visibility.add" @close="close('add')">
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
