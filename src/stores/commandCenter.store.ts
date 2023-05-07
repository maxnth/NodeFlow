import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCommandCenterStore = defineStore('command-center', () => {
  const workspace = ref();

  return {
    workspace
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCommandCenterStore, import.meta.hot));
