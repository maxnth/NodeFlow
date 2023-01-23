<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="mb-4 text-7xl font-extrabold tracking-tight text-black dark:text-white lg:text-9xl"
        >
          404
        </h1>
        <p
          class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl"
        >
          {{ $t('404.heading') }}
        </p>
        <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {{ $t('404.content') }}
        </p>
        <router-link
          to="/"
          class="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 dark:text-white"
          >{{ $t('404.link') }}</router-link
        >
      </div>
    </div>
  </div>
</template>
