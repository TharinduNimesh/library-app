<template>
  <NuxtLink
    :to="path"
    class="nav-item w-full h-14 flex items-center justify-between rounded shadow-sm px-3 duration-300"
    :class="{
      active: $route.path === path,
      inactive: $route.path !== path,
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
