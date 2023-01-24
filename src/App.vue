<script setup lang="ts">
import Sidebar from './components/Layout/Sidebar.vue';
import Toast from 'primevue/toast';

</script>

<template>
  <div id="app" class="flex min-h-screen font-sans">
    <Toast />
    <Sidebar />
    <div style="height: 100vh; width: 100%" class="dark:bg-gray-700">
      <router-view />
    </div>
  </div>
</template>
