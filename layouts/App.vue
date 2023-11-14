<template>
  <div class="w-full h-screen bg-slate-200 flex gap-2">
    <!-- AppNavbar Component -->
    <AppNavbar @toggle-navbar="toggleNavbar" />

    <!-- Main Content Area -->
    <div class="w-full relative flex flex-col lg:pl-0 pr-2 py-2">
      <!-- Dark overlay for mobile -->

      <!-- AppHeader Component -->
      <AppHeader :toggle-navbar="toggleNavbar" />

      <!-- Main Content and Footer -->
      <div
        class="w-full h-full overflow-y-scroll flex flex-col justify-between"
      >
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
</style>

<script setup>
const navbar = useNavbarVisible();

function toggleNavbar() {
  navbar.value = !navbar.value;
}
</script>
