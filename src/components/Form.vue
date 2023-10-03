<script setup lang="ts">
import { Card } from "../types/card";

const props = defineProps<{ card: Card }>();

const counter = ref({
  tapped: props.card.tapped,
  untapped: props.card.untapped,
});
const tapSection = ref<boolean>(true);

const sectionToggle = (e: any) => {
  e.preventDefault();
  tapSection.value = !tapSection.value;
};

const add = (e: any) => {
  console.log("add", e);
};
const remove = (e: any) => {
  console.log("remove", e);
};
const tap = (e: any) => {
  console.log("tap", e);
};

const onKeyDown = (e: any, mode: "add" | "remove" | "tap") => {
  const value = Number(e.target.value);
  let section: "tapped" | "untapped" = "tapped";
  if (tapSection) section = "untapped";
  switch (mode) {
    case "tap":
      let reverseSection: "tapped" | "untapped" = "untapped";
      if (tapSection) reverseSection = "tapped";
      counter.value[section] -= value;
      counter.value[reverseSection] += value;
      break;
    case "add":
      counter.value[section] += value;
      break;
    case "remove":
      counter.value[section] -= value;
      break;
  }
  console.log(counter.value);
};
</script>

<template>
  <div role="group">
    <button class="btnsec" @click="sectionToggle($event)">
      Untapped [ {{ counter.untapped }} ]
    </button>
    <button class="btnsec" @click="sectionToggle($event)">
      Tapped [ {{ counter.tapped }} ]
    </button>
  </div>
  <div class="edit">
    Add:
    <input
      type="number"
      id="add"
      name="add"
      placeholder="Add"
      @keydown.enter="onKeyDown($event, 'add')"
    />
    <a
      href="#"
      role="button"
      class="outline confirmbtn"
      @click="add($event)"
    ></a>
  </div>
  <div class="edit">
    Remove:
    <input
      type="number"
      id="remove"
      name="remove"
      placeholder="Remove"
      @keydown.enter="onKeyDown($event, 'remove')"
    />
    <a
      href="#"
      role="button"
      class="outline confirmbtn"
      @click="remove($event)"
    ></a>
  </div>

  <div class="edit">
    Un/Tap:
    <input
      type="number"
      id="tap"
      name="tap"
      placeholder="Tap"
      @keydown.enter="onKeyDown($event, 'tap')"
    />
    <a
      href="#"
      role="button"
      class="outline confirmbtn"
      @click="tap($event)"
    ></a>
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
