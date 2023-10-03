import { defineStore } from "pinia";

export const useLifeStore = defineStore("life", () => {
  const defLife = ref(20);
  const life = ref(defLife.value);
  const subtract = () => {
    life.value -= 1;
  };

  const reset = () => {
    life.value = defLife.value;
  };

  return { life, subtract, reset };
});
