<template>
  <div class="w-full h-screen bg-slate-200 flex gap-5">
    <!-- AppNavbar Component -->
    <AppNavbar :is-visible="navbarVisible" @toggle-navbar="toggleNavbar" />

    <!-- Main Content Area -->
    <div class="w-full relative flex flex-col pl-5 lg:pl-0 pr-5 py-2">
      <!-- Dark overlay for mobile -->
      <div
        class="w-full h-full bg-gray-900 opacity-60 fixed inset-0 z-40"
        :class="{ hidden: !isMobile || !navbarVisible }"
        @click="toggleNavbar"
      ></div>

      <!-- AppHeader Component -->
      <AppHeader :toggle-navbar="toggleNavbar" />

      <!-- Main Content and Footer -->
      <div class="w-full h-full overflow-y-scroll flex flex-col justify-between">
        <slot />
        <AppFooter />
      </div>
    </div>
    <AppRightModal>
      <slot name="RightModal" />
    </AppRightModal>
  </div>
</template>

<style scoped>
/* Media query for mobile screens */
@media (min-width: 720px) {
  .bg-gray-900.opacity-60 {
    display: none; /* Hide the dark overlay on desktop screens */
  }
}
</style>

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
    this.navbar = !this.isMobile;
  },
  methods: {
    toggleNavbar() {
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
