<script setup lang="ts">
import { computed, onMounted, onUnmounted, reactive, ref, watch } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ListItem from "./components/ListItem.vue";
import Card from "./components/Card.vue";
import Fetcher from "./components/Fetcher.vue";

const test = "1212";
const bookNames = ref([
  "The Catcher in the Rye",
  "To Kill a Mockingbird",
  "1984",
  "The Great Gatsby",
  "The Hitchhiker's Guide to the Galaxy",
  "The Hobbit",
  "Sapiens: A Brief History of Humankind",
  "The Alchemist",
  "The Art of War",
  "The Road",
]);

// const bookNames = {
//   a: "1",
//   b: "2",
// };

const isVisible = ref(true);

const changeVisibility = (event) => {
  console.log(event);
  isVisible.value = !isVisible.value;
};

const person = reactive({
  name: "Eleanor Rigby",
  age: 30,
  occupation: "Detective",
  hometown: "Mysteryville",
  hobbies: ["Solving Puzzles", "Playing Chess", "Reading Mystery Novels"],
  isSolvingMystery: true,
  accomplishments: {
    solvedCases: 50,
    awards: ["Detective of the Year", "Mystery Solver Extraordinaire"],
  },
});

const newHobby = ref("");
const hobbyCount = computed(() => {
  console.log("hobbyCount");
  return person.hobbies.length;
});

const getHobbyCount = () => {
  console.log("getHobbyCount");
  return person.hobbies.length;
};

const onSubmit = () => {
  person.hobbies.push(newHobby.value);
  newHobby.value = "";
};

watch(
  () => person,
  (newState, oldState) => {
    console.log(newState, JSON.parse(JSON.stringify(oldState)));
  }
);

const onRemove = (val: string) => {
  bookNames.value = bookNames.value.filter((elem) => elem !== val);
};

onUnmounted;
</script>

<template>
  <Fetcher />
  <Card title="Title" desc="lorem ipsuim bla bla bla">
    <template #icon>
      <h1>🎃</h1>
      <ListItem value="terrrors" />
    </template>
    new exciting news
  </Card>
  <h1>{{ test.split("").join("-") }}</h1>
  <ul v-if="isVisible">
    <!-- <li v-for="name in bookNames" :key="name">
      {{ name }}
    </li> -->
    <ListItem
      v-for="name in bookNames"
      :key="name"
      :value="name"
      is-highlighted
      @on-remove="onRemove"
    />
  </ul>
  <span v-else>Nothing to see</span>
  <button @click="changeVisibility($event)">Toggle</button>

  <h2>I have {{ hobbyCount }} {{ getHobbyCount() }} hobbies for now!</h2>
  <form action="">
    <input type="text" v-model="person.name" />
    <input
      type="text"
      :value="person.occupation"
      @input="changeField('occupation', $event)"
    />

    <div>
      <input type="text" v-model="newHobby" />
      <button type="button" @click="onSubmit">Submit</button>
    </div>
  </form>

  <HelloWorld msg="Vite + Vue" />
</template>

<style lang="scss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
