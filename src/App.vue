<script setup lang="ts">
import Sidebar from './components/Layout/Sidebar.vue';
</script>

<template>
  <div id="app" class="flex min-h-screen font-sans">
    <Sidebar />
    <div
      style="height: 100vh; width: 100%"
      class="dark:bg-gray-700"
      >
      <router-view />
    </div>
  </div>
</template>
