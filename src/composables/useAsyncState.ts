import { ref } from "vue";

export const useAsyncState = (
  asyncMethod: Promise<any>,
  initState: unknown
) => {
  const data = ref(initState);
  const hasError = ref(false);
  const isLoading = ref(true);

  asyncMethod
    .then((res) => {
      data.value = res;
    })
    .catch((error) => {
      console.error("OOps", error);
      hasError.value = true;
    })
    .finally(() => {
      isLoading.value = false;
    });

  return { data, hasError, isLoading };
};
