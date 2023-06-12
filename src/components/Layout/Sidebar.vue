<script setup lang="ts">
import {
  HomeIcon,
  CubeTransparentIcon,
  PresentationChartLineIcon,
  CommandLineIcon,
  MoonIcon,
  SunIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/solid';

import SettingsModal from "~/components/Settings/SettingsModal.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const settingsRef = ref()
const ctaHidden = ref(false);

const { t } = useI18n();

const sidebarEntries = [
  {
    label: "Dashboard",
    to: "/",
    icon: HomeIcon
  },
  {
    label: "Workflow Editor",
    to: "/editor",
    icon: CubeTransparentIcon
  },
  {
    label: "Command Center",
    to: "/command-center",
    icon: CommandLineIcon
  },
  {
    label: "Tour",
    to: "/tour",
    icon: PresentationChartLineIcon
  },
]

function openSettingsModel(){
  settingsRef.value.openModal()
}
</script>

<template>
  <SettingsModal ref="settingsRef" />
  <div
    class="flex w-16 sm:w-64 flex-col justify-between overflow-y-auto bg-gray-50 px-3 py-4 dark:bg-gray-800"
  >
    <div>
      <a class="mb-5 flex items-center pl-2.5">
        <img
          src="/images/application/icon.svg"
          class="mr-3 h-6 sm:h-7"
          alt="NodeFlow Logo"
        />
        <span
          class="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white hidden sm:block"
          >NodeFlow</span
        >
      </a>
      <ul class="space-y-2">
        <li v-for="(item, index) in sidebarEntries" :key="index">
          <router-link :to="item.to" class="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700">
            <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            <span class="ml-3 truncate hidden sm:block">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
      <div
        v-show="!ctaHidden"
        id="dropdown-cta"
        class="invisible mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900 md:visible"
        role="alert"
      >
        <div class="mb-3 flex items-center">
          <span
            class="mr-2 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-semibold text-orange-800 dark:bg-orange-200 dark:text-orange-900"
            >{{ $t('sidebar.cta.heading') }}</span
          >
          <button
            type="button"
            class="-mx-1.5 -my-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
            @click="ctaHidden = true"
          >
            <span class="sr-only">Close</span>
            <svg
              aria-hidden="true"
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
          {{ $t('sidebar.cta.content') }}
        </p>
      </div>
    </div>

    <div
      class="mt-4 justify-between border-t border-gray-200 pl-2.5 pr-2.5 pt-4 dark:border-gray-700 hidden sm:flex"
    >
      <div class="dark-toggle-container">
        <button class="text-center" @click="toggleDark()">
          <MoonIcon
            v-if="isDark"
            aria-hidden="true"
            class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
          <SunIcon
            v-else
            aria-hidden="true"
            class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          />
        </button>
      </div>
      <button class="settings">
        <Cog6ToothIcon
          aria-hidden="true"
          class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          @click="openSettingsModel"
        />
      </button>
    </div>
  </div>
</template>
