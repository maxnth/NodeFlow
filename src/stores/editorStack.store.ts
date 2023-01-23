import { acceptHMRUpdate, defineStore } from 'pinia';

export const useEditorStackStore = defineStore('editorStack', () => {
  const count = ref(0);

  function increment() {
    count.value += 1;
  }

  return {
    count,
    increment,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useEditorStackStore, import.meta.hot));
