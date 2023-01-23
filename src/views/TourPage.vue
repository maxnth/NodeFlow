<script setup lang="ts">
import Tour from '../components/Tour/Tour.vue';
import TourCard from '../components/Tour/TourCard.vue';

const isTourActive = ref(false);

function activateTour() {
  isTourActive.value = true;
}
</script>

<template>
  <div v-if="!isTourActive" class="flex h-screen items-center justify-center">
    <TourCard @activate-tour="activateTour" />
  </div>
  <Tour v-else />
</template>
