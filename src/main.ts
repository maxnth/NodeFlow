import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';

import './style.css';
import App from './App.vue';

import './samples/node-api';
import router from './router';

import { BaklavaVuePlugin } from '@baklavajs/plugin-renderer-vue3';
import '@baklavajs/plugin-renderer-vue3/dist/styles.css';

import PrimeVue from 'primevue/config';
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/tailwind-light/theme.css";
import 'primeicons/primeicons.css'
import SpeedDial from "primevue/speeddial";
import Dropdown from "primevue/dropdown";

const app = createApp(App);

const messages = Object.fromEntries(
  Object.entries(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    import.meta.glob<{ default: any }>('./locales/*.json', {
      eager: true,
    })
  ).map(([key, value]) => {
    return [key.slice(10, -5), value.default];
  })
);

app.use(
  createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    warnHtmlMessage: false,
    messages,
  })
);
app.use(createPinia());
app.use(router);
app.use(BaklavaVuePlugin);
app.use(PrimeVue)

// PrimeVue components
app.component("SpeedDial", SpeedDial)
app.component("Dropdown", Dropdown)

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*');
});
