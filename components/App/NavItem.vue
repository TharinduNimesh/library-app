<template>
  <NuxtLink
    :to="path"
    class="nav-item w-full h-14 flex items-center justify-between rounded-md px-3 duration-300 transition-colors"
    :class="{
      'active': $route.path === path,
      'inactive': $route.path !== path,
    }"
  >
    <Icon :name="icon" class="text-3xl" />
    <span class="text-lg font-bold uppercase">{{ name }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: ["name", "icon", "path"],
};
</script>

<style scoped>
.nav-item:hover {
  @apply bg-gray-300 text-gray-800;
}

.active {
  @apply bg-gray-800 text-white;
}

.active:hover {
  @apply bg-gray-800 text-white; 
}

.inactive {
  @apply bg-slate-100 text-gray-800;
}
</style>
