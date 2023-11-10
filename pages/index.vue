<script setup>
useHead({
  title: "Home | Sri Dharmaloka College",
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
    </main>
  </NuxtLayout>
</template>

<script>
export default {};
</script>
