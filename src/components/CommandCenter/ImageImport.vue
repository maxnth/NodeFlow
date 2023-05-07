<script setup lang="ts">
import {ArrowPathIcon, CloudArrowUpIcon} from "@heroicons/vue/24/outline";

import { useFileDialog } from '@vueuse/core'
import {ipcRenderer} from "electron";
import {useCommandCenterStore} from "../../stores/commandCenter.store";

const emit = defineEmits(["completed"])

const store = useCommandCenterStore()
const isUploading = ref(false)

const { files, open, reset, onChange } = useFileDialog({multiple: true})

onChange(async (files) => {
  if (files!.length > 0) {
    const paths = []
    // @ts-ignore
    for(const file of files){
      paths.push(file.path)
    }
    isUploading.value = true
    await ipcRenderer.invoke("upload-images-to-workspace", {paths: paths, workspaceName: store.workspace}).then((result) => {
      if(result) emit("completed")
    })
  }
})
function openFileDialog(){
  open()
}
</script>

<template>
  <section class="flex flex-col items-center justify-center sm:p-24 dark:text-gray-100">
    <h2 class="text-black text-center dark:text-white mb-2 text-xl font-bold sm:text-2xl md:text-3xl">We successfully created an OCR-D workspace!</h2>
    <h2 class="text-gray-700 dark:text-gray-200 mb-8 text-lg font-bold sm:text-lg md:text-lg">Now upload some images that you want to process.</h2>
    <button
      v-if="!isUploading"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="openFileDialog">
      <CloudArrowUpIcon class="inline w-6 h-6 mr-2 text-white" />
      Upload Images
    </button>
    <button
      v-if="isUploading"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
      <ArrowPathIcon class="inline w-6 h-6 mr-2 text-white animate-spin" />
      Uploading...
    </button>
  </section>
</template>
