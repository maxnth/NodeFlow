<script setup></script>

<template>
  <div
    id="landing-page-container"
    class="h-screen bg-cover bg-fixed leading-normal tracking-normal"
  >
    <div>
      <!--Nav-->
      <div class="container mx-auto w-full">
        <div class="flex w-full items-center justify-between">
          <div class="mt-5 flex items-center">
            <img class="ml-2 mr-3 h-8" src="~/assets/images/icon.svg" />
            <a
              class="text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl"
              href="#"
            >
              NodeFlow
            </a>
          </div>
          <div class="mt-5 flex w-1/2 content-center justify-end">
            <a
              class="hover:text-underline inline-block h-10 transform p-2 text-center text-blue-300 no-underline duration-300 ease-in-out hover:scale-125 hover:text-pink-500 md:h-auto md:p-4"
              href="https://github.com/maxnth/NodeFlow"
            >
              <Icon name="uil:github" />
            </a>
          </div>
        </div>
      </div>

      <!--Main-->
      <div
        class="container mx-auto flex flex-col flex-wrap items-center pt-24 md:flex-row md:pt-36"
      >
        <!--Left Col-->
        <div
          class="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5"
        >
          <h1
            class="my-4 text-center text-3xl font-bold leading-tight text-white md:text-left md:text-5xl"
          >
            Kickstart your OCR workflows with
            <span
              class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              NodeFlow
            </span>
          </h1>
          <p
            class="mb-8 text-center text-base leading-normal text-white opacity-75 md:text-left md:text-2xl"
          >
            A multi-platform Desktop application for interactively constructing
            simple and complex OCR workflows
          </p>
        </div>

        <!--Right Col-->
        <div class="w-full overflow-hidden p-12 xl:w-3/5">
          <img
            class="mx-auto w-full -rotate-6 transform transition duration-700 ease-in-out hover:rotate-6 hover:scale-105 md:w-4/5"
            src="~/assets/images/app.png"
          />
        </div>

        <div class="mx-auto md:pt-16">
          <p class="pb-8 text-center text-2xl font-bold text-white lg:pb-6">
            Download
          </p>
          <div
            class="fade-in flex w-full justify-center pb-24 md:justify-start lg:pb-0"
          >
            <div class="grid grid-flow-row-dense grid-cols-3 gap-4">
              <a
                href="https://github.com/maxnth/NodeFlow/releases/download/0.0.1-alpha/NodeFlow_0.0.1.dmg"
                class="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
              >
                <Icon class="mr-5 text-white" name="simple-icons:apple" />
                <div class="text-left">
                  <div class="mb-1 text-xs">Download for</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">macOS</div>
                </div>
              </a>
              <a
                href="https://github.com/maxnth/NodeFlow/releases/download/0.0.1-alpha/NodeFlow-0.0.1.AppImage"
                class="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
              >
                <Icon class="mr-5 text-white" name="simple-icons:linux" />
                <div class="text-left">
                  <div class="mb-1 text-xs">Download for</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">Linux</div>
                </div>
              </a>
              <a
                href="https://github.com/maxnth/NodeFlow/releases/download/0.0.1-alpha/NodeFlow_0.0.1.msi"
                class="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
              >
                <Icon class="mr-5 text-white" name="simple-icons:windows" />
                <div class="text-left">
                  <div class="mb-1 text-xs">Download for</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    Windows
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!--Footer-->
      <!--      <div class="absolute bottom-0 h-16 absolute left-1/2 transform -translate-x-1/2">-->
      <!--          <a class="text-white no-underline hover:no-underline mr-2" href="#">&copy;{{ new Date().getFullYear() }}</a>-->
      <!--          <a class="text-white no-underline hover:no-underline" href="https://github.com/uniwue-zpd/">Center for Philology and Digitality</a>-->
      <!--        </div>-->
    </div>
  </div>
</template>

<style scoped>
#landing-page-container {
  background-image: url('~/assets/images/bg.png');
}
</style>
