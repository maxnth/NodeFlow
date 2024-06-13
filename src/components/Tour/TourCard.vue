<script setup lang="ts">
const emit = defineEmits(['activate-tour']);
</script>

<template>
  <div
    class="max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Tour the NodeFlow editor
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Interactively explore the NodeFlow editor and get to know all major
      functionalities
    </p>
    <button
      disabled
      class="inline-flex disabled:bg-blue-100 items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Coming Soon...
      <svg
        aria-hidden="true"
        class="ml-2 -mr-1 h-4 w-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
    </button>
  </div>
</template>
