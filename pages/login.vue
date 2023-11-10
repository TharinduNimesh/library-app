<template>
  <section
    class="bg-gray-100 h-screen flex justify-center items-center relative"
  >
    <div class="absolute w-full h-full bg-black opacity-60 z-10"></div>
    <div class="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
      <div
        class="relative max-w-full sm:max-w-md lg:max-w-[525px] mx-auto text-center bg-slate-50 rounded-lg overflow-hidden py-10 px-6 sm:px-8 lg:px-14 shadow-md z-20"
      >
        <div class="mb-8 text-center">
          <h1 class="text-3xl font-bold text-gray-800 mb-5 uppercase">
            Welcome Back
          </h1>
          <NuxtLink href="/" class="inline-block max-w-[140px] mx-auto">
            <img src="/images/logo.png" alt="logo" />
          </NuxtLink>
        </div>

        <FormLogin />

        <a
          href="javascript:void(0)"
          class="text-base inline-block mb-4 text-[#adadad] hover:underline hover:text-gray-800 duration-300"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url("/images/bg/login-bg.webp");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
