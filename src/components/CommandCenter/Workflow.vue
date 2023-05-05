<script setup lang="ts">

import {useFileDialog} from "@vueuse/core";
import {ipcRenderer} from "electron";
import {CloudArrowUpIcon, PlayIcon } from "@heroicons/vue/24/outline";
import path from "path";
import {exportWorkflow} from "../Editor/logic/WorkflowExporter";

const { files, open, reset, onChange } = useFileDialog({multiple: false, accept: '.json'})

const emit = defineEmits(["completed"])
const selectedWorkflow = ref("")

onChange(async (files) => {
  if (files?.length === 1) {
    selectedWorkflow.value = files.item(0).path
  }
})
function openFileDialog(){
  open()
}

function launch(){
  ipcRenderer.invoke("load-workflow-from-file", selectedWorkflow.value).then((result) => {
    console.log(result)
  })
  emit("completed")
}
</script>

<template>
  <section
    v-if="!selectedWorkflow"
    class="flex flex-col items-center justify-center sm:p-24 dark:text-gray-100">
    <h2 class="text-black text-center dark:text-white mb-2 text-xl font-bold sm:text-2xl md:text-3xl">You successfully imported your images!</h2>
    <h2 class="text-gray-700 dark:text-gray-200 mb-8 text-lg font-bold sm:text-lg md:text-lg">Now upload a workflow and launch it!</h2>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="openFileDialog">
      <CloudArrowUpIcon class="inline w-6 h-6 mr-2 text-white" />
      Upload Workflow
    </button>
  </section>
  <section
    v-if="selectedWorkflow"
    class="flex flex-col items-center justify-center sm:p-24 dark:text-gray-100">
    <h2 class="text-black text-center dark:text-white mb-2 text-xl font-bold sm:text-2xl md:text-3xl">You're almost there!</h2>
    <h2 class="text-gray-700 text-center dark:text-gray-200 mb-8 text-lg font-bold sm:text-lg md:text-lg">You selected <span class="text-blue-700 dark:text-blue-300">{{ path.parse(selectedWorkflow).base }}</span>. <br /> Do you want to launch it?</h2>
    <div class="grid-cols-2">
      <button
        type="button"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 inline-flex items-center content-center"
        @click="launch">
        <PlayIcon class="inline w-6 h-6 mr-2 text-white" />
        Launch
      </button>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        @click="openFileDialog">
        <CloudArrowUpIcon class="inline w-6 h-6 mr-2 text-white" />
        Upload
      </button>
    </div>

  </section>
</template>
