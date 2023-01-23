<script setup>
const t = useI18n({ useScope: 'global' });

const selectedLanguage = ref(t.locale.value);
const languages = ref([
  { name: '🇺🇸 English', flag: '🇺🇸', code: 'en' },
  { name: '🇩🇪 German', flag: '🇩🇪', code: 'de' },
]);

function changeLocale(event) {
  t.locale.value = event.value;
}
</script>

<template>
  <Dropdown
    v-model="selectedLanguage"
    :options="languages"
    optionLabel="flag"
    optionValue="code"
    @change="changeLocale($event)"
  />
</template>

<style scoped>
.p-dropdown {
  background: transparent;
  border: 0;
}
</style>
