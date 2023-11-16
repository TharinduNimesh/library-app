<template>
  <tr class="animate-pulse" v-for="row in 3" :key="row">
    <td>
      <div class="flex items-center">
        <div class="w-10 h-10 rounded-full bg-gray-200"></div>
        <div class="flex flex-col px-1 gap-y-2">
          <div class="h-3 w-20 rounded-lg bg-gray-200"></div>
          <div class="h-3 w-14 rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </td>
    <td v-for="i in count - 1" :key="i">
      <div class="flex flex-col px-1 gap-y-2">
        <div class="h-3 w-32 rounded-lg bg-gray-200"></div>
        <div class="h-3 w-14 rounded-lg bg-gray-200"></div>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["count"],
};
</script>

<style></style>
