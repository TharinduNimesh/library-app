<template>
  <div class="flex w-full">
    <select
      class="w-1/6 uppercase rounded-l-md bg-transparent outline-none border border-gray-400 focus:border-gray-700 text-gray-700 px-4 duration-300"
      v-model="filterOption"
    >
      <option value="0">Filter Option</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <input
      type="text"
      class="w-3/6 uppercase rounded-r-md bg-transparent outline-none border border-gray-400 focus:border-gray-700 text-gray-700 px-4 duration-300"
      :placeholder="placeholder"
      v-model="inputValue"
    />
    <div class="flex justify-end w-2/6 pl-2">
      <button class="w-1/2 btn rounded-r-none text-slate-200" @click="filter">
        <Icon class="text-lg" name="solar:rounded-magnifer-linear" />
        <span>Filter</span>
      </button>
      <button
        class="w-1/2 btn rounded-l-none bg-red-300 border-red-300 text-red-800 hover:bg-red-500 hover:text-slate-100 hover:border-red-500"
        @click="reset"
      >
        <Icon class="text-lg" name="solar:refresh-bold" />
        <span>reload</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options", "placeholder", "filter", "reset"],
  data() {
    return {
      filterOption: "0",
      inputValue: "",
    };
  },
  methods: {
    sendValues() {
      this.$emit("getValues", {
        option: this.filterOption,
        input: this.inputValue,
      });
    },
  },
};
</script>

<style scoped>
.btn:hover {
  transform: none;
}
</style>
