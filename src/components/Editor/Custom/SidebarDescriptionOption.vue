<script setup lang="ts">
// @ts-nocheck
const props = defineProps({
  value: Object,
});
</script>

<template>
  <div>
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white"
    >
      Processor
    </h5>
    <p class="font-normal text-white dark:text-white mb-4 block max-w-sm p-2 border border-gray-200 rounded-lg shadow">
      {{ value['description'] }}
    </p>
    <h5 v-if='value["parameter_descriptions"]'
      class="mb-2 mt-2 text-2xl font-bold tracking-tight text-white dark:text-white"
    >
      Parameter
    </h5>
    <div
      v-for="(value, key, index) in value['parameter_descriptions']"
      class="mb-4 block max-w-sm p-2 border border-gray-200 rounded-lg shadow"
      :key=index>
      <h5
        class="underline font-bold tracking-tight text-white dark:text-white"
      >
        {{ key }}
      </h5>
      <p class="font-normal text-white dark:text-white">
        {{ value }}
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>
