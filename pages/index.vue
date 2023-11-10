<script setup>
useHead({
  
});
</script>

<template>
  <NuxtLayout name="home">
    <main class="space-y-40 mb-40">
      <HomeHeroSection />
      <HomeFeatures />
      <HomeStats />
      <HomeTestimonials />
      <HomeCallToAction />
      <HomeBlog />
    </main>
  </NuxtLayout>
</template>

<script>
export default {};
</script>
