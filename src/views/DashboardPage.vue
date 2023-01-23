<script setup lang="ts">
// @ts-nocheck
import { ArrowSmallRightIcon } from '@heroicons/vue/24/solid';

const { t } = useI18n();
</script>

<template>
  <div class="flex h-screen items-center justify-center p-20">
    <div class="container">
      <div>
        <h1
          class="my-4 text-center text-7xl font-bold leading-tight text-black opacity-90 dark:text-white"
        >
          {{ $t('dashboard.heading.welcome') }} <br />
          <span
            class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            {{ $t('dashboard.heading.tool-name') }}
          </span>
        </h1>
      </div>
      <div
        class="mx-auto grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
      >
        <div class="flex flex-col">
          <div
            class="mt-auto h-full rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t('dashboard.cta.create.heading') }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ $t('dashboard.cta.create.content') }}
            </p>
            <router-link to="/editor">
              <button
                class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ $t('dashboard.cta.create.button') }}
                <ArrowSmallRightIcon class="ml-2 -mr-1 h-4 w-4" />
              </button>
            </router-link>
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="mt-auto h-full rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t('dashboard.cta.edit.heading') }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ $t('dashboard.cta.edit.content') }}
            </p>
            <!-- TODO: Open Upload -->
            <button
              class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="emit('activate-tour')"
            >
              {{ $t('dashboard.cta.edit.button') }}
              <ArrowSmallRightIcon class="ml-2 -mr-1 h-4 w-4" />
            </button>
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="mt-auto h-full rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ $t('dashboard.cta.tour.heading') }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ $t('dashboard.cta.tour.content') }}
            </p>
            <router-link to="/tour">
              <button
                class="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ $t('dashboard.cta.tour.button') }}
                <ArrowSmallRightIcon class="ml-2 -mr-1 h-4 w-4" />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
