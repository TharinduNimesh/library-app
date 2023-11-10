<template>
  <div class="home-body">
    <HomeAppHeader />
    <slot />
    <HomeAppFooter />
  </div>
</template>

<script>
export default {};
</script>
<style>
.home-body {
  font-family: Urbanist, sans-serif;
  scroll-behavior: smooth;
  margin: 0;
}
</style>
