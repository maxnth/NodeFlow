<script setup lang="ts">
import Sidebar from './components/Layout/Sidebar.vue';
import Toast from 'primevue/toast';
</script>

<template>
  <div id="app" class="flex min-h-screen font-sans dark:bg-gray-700">
    <Toast />
    <Sidebar />
    <div style="height: 100vh; width: 100%" class="dark:bg-gray-700">
      <Suspense>
        <router-view />
      </Suspense>
    </div>
  </div>
</template>
