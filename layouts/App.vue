<template>
  <div class="w-full h-screen bg-slate-200 flex gap-5">
    <AppNavbar :is-visible="navbarVisible" />
    <div class="w-full relative flex flex-col pl-5 lg:pl-0 pr-5 py-2">
      <div
        class="absolute lg:hidden w-full h-full bg-gray-900 opacity-60 z-40"
        :class="{
          hidden: !navbarVisible,
        }"
        @click="toggleNavbar"
      ></div>
      <AppHeader :toggle-navbar="toggleNavbar" />
      <div
        class="w-full h-full overflow-y-scroll flex flex-col justify-between"
      >
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: true,
      isMobile: true,
    };
  },
  beforeMount() {
    this.isMobile = window.innerWidth < 720;
    this.navbar = this.isMobile ? false : true;
  },
  methods: {
    toggleNavbar() {
      console.log("clicked");
      this.navbar = !this.navbar;
    },
  },
  computed: {
    navbarVisible() {
      return this.navbar;
    },
  },
};
</script>
