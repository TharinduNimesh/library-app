<template>
  <div class="relative" id="home">
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
      ></div>
    </div>
    <HomeContainer>
      <div class="relative pt-36 ml-auto">
        <div class="lg:w-2/3 text-center mx-auto">
          <h1
            class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl"
          >
            Shaping a world with
            <span class="text-primary dark:text-white">reimagination.</span>
          </h1>
          <p class="mt-8 text-gray-700 dark:text-gray-300">
            Inspired by the boundless realms of literature, our library fosters
            a community where knowledge blossoms, igniting imaginations and
            shaping enlightened, empowered individuals.
          </p>
          <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <NuxtLink
              to="/login"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-white"
                >LogIn</span
              >
            </NuxtLink>
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                class="relative text-base font-semibold text-primary dark:text-white"
                >Learn more</span
              >
            </a>
          </div>
          <div
            class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
          >
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                Powerful
              </h6>
              <p class="mt-2 text-gray-500">4x Powerful</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                Fastest
              </h6>
              <p class="mt-2 text-gray-500">5x fastest</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                Accuracy
              </h6>
              <p class="mt-2 text-gray-500">3x Accuracy</p>
            </div>
          </div>
        </div>
        <div class="mt-12 flex justify-center">
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/Untitled design (3).png"
              class="h-14 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/Untitled design (5).png"
              class="h-14 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
            />
          </div>
          <!-- Add more grid items as needed -->
        </div>
      </div>
    </HomeContainer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
