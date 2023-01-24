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
      Processor Description
    </h5>
    <p class="font-normal text-white dark:text-white">
      {{ value['description'] }}
    </p>
    <h5 v-if='value["parameter_descriptions"]'
      class="mb-2 mt-2 text-2xl font-bold tracking-tight text-white dark:text-white"
    >
      Parameter Descriptions
    </h5>
    <div
      v-for="(value, key, index) in value['parameter_descriptions']"
      :key=index>
      <h5
        class="mt-2 mb-2 font-bold tracking-tight text-white dark:text-white"
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
