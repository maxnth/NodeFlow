<script setup lang="ts">
import {ArrowPathIcon, CloudArrowDownIcon, CloudArrowUpIcon} from "@heroicons/vue/24/outline";
import {ipcRenderer} from "electron";
import {useCommandCenterStore} from "../../stores/commandCenter.store";

const emit = defineEmits(["completed"])

const store = useCommandCenterStore()
const isExporting = ref(false)

async function openSaveDialog(){
  isExporting.value = true
  await ipcRenderer.invoke("export-results", store.workspace).then(() => {
    emit("completed")
  })
}
</script>

<template>
  <section
    class="flex flex-col items-center justify-center sm:p-24 dark:text-gray-100">
    <h2 class="text-black text-center dark:text-white mb-2 text-xl font-bold sm:text-2xl md:text-3xl">That's it!</h2>
    <h2 class="text-gray-700 text-center dark:text-gray-200 mb-8 text-lg font-bold sm:text-lg md:text-lg">Your images were successfully processed and are ready to be exported!</h2>
    <button
      v-if="!isExporting"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="openSaveDialog">
      <CloudArrowDownIcon class="inline w-6 h-6 mr-2 text-white" />
      Save
    </button>
    <button
      v-if="isExporting"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
      <ArrowPathIcon class="inline w-6 h-6 mr-2 text-white animate-spin" />
      Exporting...
    </button>
  </section>
</template>
