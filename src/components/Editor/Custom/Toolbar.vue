<script setup lang="ts">
// @ts-nocheck
import { Commands } from "@baklavajs/renderer-vue";
import { useViewModel } from "baklavajs";

import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon,
  ArrowDownOnSquareStackIcon
} from "@heroicons/vue/24/outline";

const { t } = useI18n();

const { viewModel } = useViewModel()

const emit = defineEmits(['upload', 'download', 'export', '  "toggle-palette",']);
</script>

<template>
  <div class="baklava-toolbar">
    <div class="flex space-x-4">
      <ArrowUturnLeftIcon
        class="h-6 w-6 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black hover:cursor-pointer"
        @click="viewModel.commandHandler.executeCommand(Commands.UNDO_COMMAND)" />
      <ArrowUturnRightIcon
        class="h-6 w-6 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black hover:cursor-pointer"
        @click="viewModel.commandHandler.executeCommand(Commands.REDO_COMMAND)" />
      <div class="inline-block w-0.5 self-stretch bg-gray-500 opacity-100 dark:opacity-50"></div>
      <DocumentArrowUpIcon
        class="h-6 w-6 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black hover:cursor-pointer"
        @click='emit("upload")' />
      <DocumentArrowDownIcon
        class="h-6 w-6 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black hover:cursor-pointer"
        @click='emit("download")' />
      <ArrowDownOnSquareStackIcon
        class="h-6 w-6 text-gray-500 dark:text-gray-400 dark:hover:text-white hover:text-black hover:cursor-pointer"
        @click='emit("export")' />
      <div class="inline-block w-0.5 self-stretch bg-gray-500 opacity-100 dark:opacity-50"></div>
      <span v-tooltip="t('nodeflow.toolbar.toggle-palette.tooltip')">
          <i
            class="pi pi-align-right self-center text-xl text-zinc-600 hover:cursor-pointer hover:text-black dark:text-zinc-400 dark:hover:text-white"
            @click="emit('toggle-palette')"
          ></i>
        </span>
    </div>
  </div>
</template>

<style scoped>
.baklava-toolbar{
  @apply bg-white dark:bg-zinc-800 shadow-md z-10
}
</style>
