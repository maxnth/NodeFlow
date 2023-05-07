<script setup lang="ts">
import { ArrowUturnUpIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["completed"])
</script>

<template>
  <section
    class="flex flex-col items-center justify-center sm:p-24 dark:text-gray-100">
    <h2 class="text-black text-center dark:text-white mb-2 text-xl font-bold sm:text-2xl md:text-3xl">Success!</h2>
    <h2 class="text-gray-700 text-center dark:text-gray-200 mb-8 text-lg font-bold sm:text-lg md:text-lg">You can now inspect the OCR results.</h2>
    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      @click='emit("completed")'>
      <ArrowUturnUpIcon class="inline w-6 h-6 mr-2 text-white" />
      Launch another workflow
    </button>

  </section>
</template>
