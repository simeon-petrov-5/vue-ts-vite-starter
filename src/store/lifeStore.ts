import { defineStore } from "pinia";
import { useRefHistory } from "@vueuse/core";

export const useLifeStore = defineStore("life", () => {
  const defLife = ref(20);
  const life = ref(defLife.value);
  const { undo } = useRefHistory(life);

  const decrease = () => {
    life.value -= 1;
  };

  const reset = () => {
    life.value = defLife.value;
  };

  return { life, defLife, decrease, reset, undo };
});
