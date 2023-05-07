<script setup lang="ts">
import { Commands } from "@baklavajs/renderer-vue";
import { useViewModel } from "baklavajs";

import {
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  DocumentArrowDownIcon,
  DocumentArrowUpIcon,
  ArrowDownOnSquareStackIcon
} from "@heroicons/vue/24/outline";

const { viewModel } = useViewModel()

const emit = defineEmits(['upload', 'download', 'export']);
</script>

<template>
  <div class="baklava-toolbar">
    <div class="flex space-x-4">
      <ArrowUturnLeftIcon
        class="h-6 w-6 text-gray-500 hover:text-white hover:cursor-pointer"
        @click="viewModel.commandHandler.executeCommand(Commands.UNDO_COMMAND)" />
      <ArrowUturnRightIcon
        class="h-6 w-6 text-gray-500 hover:text-white hover:cursor-pointer"
        @click="viewModel.commandHandler.executeCommand(Commands.REDO_COMMAND)" />
      <div class="inline-block w-0.5 self-stretch bg-gray-500 opacity-100 dark:opacity-50"></div>
      <DocumentArrowUpIcon
        class="h-6 w-6 text-gray-500 hover:text-white hover:cursor-pointer"
        @click='emit("upload")' />
      <DocumentArrowDownIcon
        class="h-6 w-6 text-gray-500 hover:text-white hover:cursor-pointer"
        @click='emit("download")' />
      <ArrowDownOnSquareStackIcon
        class="h-6 w-6 text-gray-500 hover:text-white hover:cursor-pointer"
        @click='emit("export")' />
    </div>
  </div>
</template>
