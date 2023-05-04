<script setup lang="ts">
import { ipcRenderer } from 'electron';
import { ArrowDownCircleIcon, ArrowPathIcon } from "@heroicons/vue/24/outline";

import { useToast } from "primevue/usetoast";
const toast = useToast();

const isDockerAvailable = ref()
const isPullingImage = ref(false)
const isOcrdDockerImagePulled = ref(false)

const ocrdWorkDir = ref()

const step = ref(0)


await ipcRenderer.invoke("is-docker-available").then((result) => {
  isDockerAvailable.value = result
})
function openDockerSetupGuide(){
  ipcRenderer.send("open-docker-setup-guide")
}

async function pullOcrdDockerImage(){
  isPullingImage.value = true
  await ipcRenderer.invoke("pull-ocrd-docker-image").then((result) => {
    isOcrdDockerImagePulled.value = result
    isPullingImage.value = false
    toast.add({ severity: 'success', summary: 'Success', detail: 'Docker image successfully pulled', life: 3000 })

    step.value = 1
  })
}

async function getDir() {
  ipcRenderer.invoke("get-directory").then((result) => {
    console.log(result)
    ocrdWorkDir.value = result
    step.value = 2
  })
}

async function initOcrdWorkspace() {
  ipcRenderer.invoke("init-ocrd-workspace", ocrdWorkDir.value).then((result) => {
    console.log(result)
    if(result){
      toast.add({ severity: 'success', summary: 'Success', detail: 'Workspace successfully initialized', life: 3000 })
    }else{
      toast.add({ severity: 'error', summary: 'Error', detail: "Directory is already a workspace!", life: 3000 })
    }
  })
}

const { t } = useI18n();
</script>

<template>
  <Toast />
  <section
    v-if="!isDockerAvailable"
    class="flex items-center justify-center h-full sm:p-24 dark:text-gray-100">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-lg">
      <img
        class="flex-row"
        src="/images/application/docker_ko.svg"
        alt="Image of a knocked out Docker mascot"/>
      <p class="text-3xl">{{ $t('command-center.docker.inactive.not-responding') }}</p>
      <button
        class="px-8 py-3 font-semibold rounded bg-blue-700 text-white"
        @click="openDockerSetupGuide">{{ $t('command-center.docker.inactive.install') }}</button>
    </div>
  </section>
  <section
    v-if="isDockerAvailable && !isOcrdDockerImagePulled"
    class="flex flex-col items-center justify-center h-full sm:p-24 dark:text-gray-100">
    <h2 class="text-black-800 mb-2 text-xl font-bold sm:text-2xl md:text-3xl">Docker is running!</h2>
    <h2 class="text-black-800 mb-8 text-lg font-bold sm:text-lg md:text-lg">Let's check if your OCR-D image is up-to-date.</h2>
    <button
      v-if="!isPullingImage"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="pullOcrdDockerImage">
        <ArrowDownCircleIcon class="inline w-6 h-6 mr-2 text-white" />
        Check for updates
    </button>
    <button
      v-else-if="isPullingImage"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
      <ArrowPathIcon class="inline w-6 h-6 mr-2 text-white animate-spin" />
      Pulling image...
    </button>
  </section>
  <section
    v-if="step == 1"
    class="flex flex-col items-center justify-center h-full sm:p-24 dark:text-gray-100">
    <h2 class="text-black-800 mb-2 text-xl font-bold sm:text-2xl md:text-3xl">You're good to go!</h2>
    <h2 class="dark:text-gray-200  text-black-800 mb-8 text-lg font-bold sm:text-lg md:text-lg">Now select a directory where our workspace should get stored.</h2>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="getDir">
      Open Directory
    </button>
  </section>
  <section
    v-if="step == 2"
    class="flex flex-col items-center justify-center h-full sm:p-24 dark:text-gray-100">
    <h2 class="text-black-800 mb-2 text-xl font-bold sm:text-2xl md:text-3xl">It's getting serious now!</h2>
    <h2 class="dark:text-gray-200 text-black-800 mb-8 text-lg font-bold sm:text-lg md:text-lg">Press the button below to initialize the OCR-D workpace.</h2>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click="initOcrdWorkspace">
      Initialize
    </button>
  </section>
</template>

<style scoped>

</style>
