<template>
  <button
    type="button"
    class="py-2 px-2 inline-flex text-2xl font-medium rounded-lg border border-gray-200 shadow-sm hover:-translate-y-1 duration-300"
    :class="colors"
    @click="method"
  >
    <Icon :name="icon" />
  </button>
</template>

<script>
export default {
  props: {
    colors: {
      type: String,
      default: "bg-gray-800 text-white",
    },
    icon: String,
    method: Function,
  },
};
</script>

<style>
</style>