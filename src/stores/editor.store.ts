import { acceptHMRUpdate, defineStore } from 'pinia';

export const useEditorStore = defineStore('editor', () => {
  const stack = ref();

  return {
    stack
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useEditorStore, import.meta.hot));
