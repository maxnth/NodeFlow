<script setup lang="ts">
import {ipcRenderer} from "electron";
import {ArrowDownCircleIcon, ArrowPathIcon} from "@heroicons/vue/24/outline";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const isDockerAvailable = ref()
const isPullingImage = ref(false)

const emit = defineEmits(["completed"])

await ipcRenderer.invoke("is-docker-available").then((result) => {
  isDockerAvailable.value = result
})

async function pullOcrdDockerImage(){
  isPullingImage.value = true
  await ipcRenderer.invoke("pull-ocrd-docker-image").then((result) => {
    isPullingImage.value = false
    emit("completed")
  })
}
function openDockerSetupGuide(){
  ipcRenderer.send("open-docker-setup-guide")
}
</script>

<template>
  <section
    v-if="!isDockerAvailable"
    class="flex items-center justify-center sm:p-24 dark:text-gray-100">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-lg">
      <img
        class="flex-row"
        src="/images/application/docker_not_found.svg"
        alt="Image of a knocked out Docker mascot"/>
      <p class="text-3xl">{{ $t('command-center.docker.inactive.not-responding') }}</p>
      <button
        class="px-8 py-3 font-semibold rounded bg-blue-700 text-white"
        @click="openDockerSetupGuide">{{ $t('command-center.docker.inactive.install') }}</button>
    </div>
  </section>
  <section
    v-if="isDockerAvailable"
    class="flex flex-col items-center justify-center sm:p-24 dark:text-gray-100">
    <h2 class="text-black dark:text-white mb-2 text-xl font-bold sm:text-2xl md:text-3xl">Docker is running!</h2>
    <h2 class="text-gray-700 dark:text-gray-200 mb-8 text-lg font-bold sm:text-lg md:text-lg">Let's check if your OCR-D image is up-to-date.</h2>
    <button
      v-if="!isPullingImage"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="pullOcrdDockerImage">
      <ArrowDownCircleIcon class="inline w-6 h-6 mr-2 text-white" />
      Check for updates
    </button>
    <div v-else-if="isPullingImage">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
        <ArrowPathIcon class="inline w-6 h-6 mr-2 text-white animate-spin" />
        Pulling image...
      </button>
    </div>
  </section>
</template>
