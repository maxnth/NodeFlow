<script setup lang="ts">
import { ipcRenderer } from 'electron';

import Docker from "../components/CommandCenter/Docker.vue";
import Export from "../components/CommandCenter/Export.vue";
import ImageImport from "../components/CommandCenter/ImageImport.vue";
import Workflow from "../components/CommandCenter/Workflow.vue";
import {useCommandCenterStore} from "../stores/commandCenter.store";

const steps = [{label: "Docker"}, {label: "Image Import"}, {label: "Workflow"}, {label: "Export"}]
const step = ref(0)

const store = useCommandCenterStore()

async function initOcrdWorkspace() {
  store.workspace = `${Date.now()}`
  ipcRenderer.invoke("init-ocrd-workspace", store.workspace).then((result) => {
    console.log(result)
  })
}

function next(completedStep: string){
  switch(completedStep){
    case "docker":
      initOcrdWorkspace()
      step.value += 1
      break;
    case "import":
      step.value += 1
      break;
    case "workflow":
      step.value += 1
      break;
    case "export":
      step.value = 0
  }
}

const { t } = useI18n();
</script>

<template>
  <Toast />
  <div id="stepper" class="p-20">
    <div
      class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
    >
      <ol
        class="relative z-10 flex justify-between text-sm font-medium"
      >
        <li
          v-for="(stepData, index) in steps"
          :key="index"
          class="flex items-center gap-2 bg-white dark:bg-gray-700 p-2">
          <span
            class="h-6 w-6 rounded-full text-center text-[10px]/6 font-bold text-gray-500"
            :class="{
            'bg-blue-600': index === step,
            'text-white': index === step,
            'bg-gray-100': index !== step }"
          >
            {{ index + 1 }}
          </span>

          <span class="hidden sm:block text-gray-500 dark:text-gray-100"> {{ stepData.label }} </span>
        </li>
      </ol>
    </div>
  </div>
  <Docker v-if="step === 0" @completed="next('docker')" />
  <ImageImport v-if="step === 1" @completed="next('import')" />
  <Workflow v-if="step === 2" @completed="next('workflow')" />
  <Export v-if="step === 3" @completed="next('export')" />
</template>

<style scoped>

</style>
