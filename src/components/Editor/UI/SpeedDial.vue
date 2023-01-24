<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const emit = defineEmits(['upload', 'download', 'clear']);


const items = ref([
  {
    label: 'Upload',
    icon: 'pi pi-upload',
    command: () => {
      // emit('upload');
      toast.add({ severity: 'info', summary: 'Info', detail: 'Currently not implemented', life: 1500 });
    },
  },
  {
    label: 'Download',
    icon: 'pi pi-download',
    command: () => {
      emit('download');
    },
  },
  {
    label: 'Clear Workflow',
    icon: 'pi pi-trash',
    command: () => {
      emit('clear');
    },
  },
]);
</script>

<template>
  <div class="absolute bottom-0 right-0 h-20 w-20">
    <SpeedDial
      :model="items"
      :radius="120"
      direction="up-left"
      type="quarter-circle"
      :tooltip-options="{ position: 'left' }"
    />
  </div>
</template>

<style>
.p-button {
  @apply bg-blue-600 dark:bg-blue-800 !important;
}
</style>
