<template>
  <section class="bg-gray-100 h-screen flex justify-center items-center">
    <div class="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
      <div
        class="max-w-full sm:max-w-md lg:max-w-[525px] mx-auto text-center bg-white rounded-lg overflow-hidden py-10 px-6 sm:px-8 lg:px-20 shadow-md"
      >
        <div class="mb-8 text-center">
          <h1 class="text-3xl font-bold text-primary">Login</h1>
          <a
            href="javascript:void(0)"
            class="inline-block max-w-[160px] mx-auto"
          >
            <img src="/images/app/LibraryLogin.webp" alt="logo" />
          </a>
        </div>

        <form>
          <div class="mb-6">
            <input
              type="text"
              placeholder="Email"
              class="w-full rounded-md border border-[#E9EDF4] py-3 px-4 sm:px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
            />
          </div>

          <div class="mb-6">
            <input
              type="password"
              placeholder="Password"
              class="w-full rounded-md border border-[#E9EDF4] py-3 px-4 sm:px-5 bg-[#FCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary"
            />
          </div>

          <div class="mb-8">
            <button
              type="submit"
              class="w-full rounded-md border border-primary py-3 px-4 sm:px-5 bg-primary text-base text-white cursor-pointer hover:bg-opacity-90 transition"
            >
              Sign In
            </button>
          </div>
        </form>

        <a
          href="javascript:void(0)"
          class="text-base inline-block mb-4 text-[#adadad] hover:underline hover:text-primary"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  </section>
</template>
  