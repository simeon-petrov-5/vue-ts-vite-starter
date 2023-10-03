import { defineStore } from "pinia";
import { useRefHistory } from "@vueuse/core";

const Modals = ["add", "modify", "dice"] as const;

type Modal = (typeof Modals)[number];

export const useModalStore = defineStore("modal", () => {
  const visibility = reactive<{ [key in (typeof Modals)[number]]: boolean }>({
    dice: false,
    modify: false,
    add: false,
  });

  const toggle = (modal: Modal) => {
    visibility[modal] = !visibility[modal];
  };
  const close = (modal: Modal) => {
    visibility[modal] = false;
  };
  return { visibility, toggle, close };
});
