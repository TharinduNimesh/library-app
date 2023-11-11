<template>
  <NuxtLink
    :to="path"
    class="nav-item w-full h-14 flex items-center justify-between rounded-md px-3 duration-300 transition-colors"
    :class="{
      'bg-blue-500 text-white': $route.path === path,
      'bg-gray-200 text-gray-800 hover:bg-blue-300 hover:text-blue-800': $route.path !== path,
    }"
  >
    <Icon :name="icon" class="text-3xl" />
    <span class="text-xl font-bold uppercase">{{ name }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: ["name", "icon", "path"],
};
</script>

<style scoped>
.nav-item:hover, 
.active {
  @apply bg-gray-800 text-slate-100;
}

.inactive {
  @apply bg-slate-100 text-gray-800;
}
</style>
