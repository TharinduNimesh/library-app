<template>
  <thead class="text-sm uppercase">
    <tr>
      <th scope="col" v-for="column in columns" :key="column">{{ column }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: ["columns"],
};
</script>
