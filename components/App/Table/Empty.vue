<template>
  <tr class="bg-orange-100 text-sm font-semibold">
    <td class="text-center text-red-500" :colspan="columns">{{ message }}</td>
  </tr>
</template>

<script>
export default {
  props: ["columns", "message"],
};
</script>

<style></style>
