<template>
  <li class="min-w-max">
    <NuxtLink
      :to="path"
      :class="{
        active: $route.path === path,
        inactive: $route.path !== path,
      }"
      class="nav-item relative h-14 rounded-r-md flex items-center space-x-4 px-4 py-3 duration-300 transition-colors"
    >
      <Icon :name="icon" class="text-3xl" />
      <span class="text-lg font-bold uppercase">{{ name }}</span>
    </NuxtLink>
  </li>
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
