<script setup lang="ts">


const selectedLanguage = ref("en")
const languages = ref([
  {"name": "🇺🇸 English", "flag": "🇺🇸", code: "en"},
  {"name": "🇩🇪 German", "flag": "🇩🇪", code: "de"}
])
</script>

<template>
  <Dropdown v-model="selectedLanguage" :options="languages" optionLabel="flag" optionValue="code" />
</template>

<style scoped>
.p-dropdown{
  background: transparent;
  border: 0;
}
</style>
