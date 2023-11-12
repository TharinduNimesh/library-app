<template>
  <div class="flex flex-col sm:flex-row w-full">
    <!-- Filter Option Select -->
    <div class="w-full flex sm:w-1/6 mb-2 sm:mb-0">
      <select
        class="w-full uppercase rounded sm:rounded-r-none bg-transparent outline-none border border-gray-400 focus:border-gray-700 text-gray-700 px-4 py-3 duration-300"
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
    </div>

    <!-- Input -->
    <input
      type="text"
      class="w-full sm:w-3/6 uppercase rounded sm:rounded-l-none bg-transparent outline-none border border-gray-400 focus:border-gray-700 text-gray-700 px-4 py-2 mr-3 duration-300 mb-2 sm:mb-0"
      :placeholder="placeholder"
      v-model="inputValue"
    />

    <!-- Buttons -->
    <div class="flex w-full sm:w-2/6 pl-2 sm:pl-0">
      <button
        class="w-1/2 btn rounded-r-none text-slate-200 mb-2 sm:mb-0"
        @click="filter"
      >
        <Icon class="text-lg" name="solar:rounded-magnifer-linear" />
        <span class="hidden sm:inline">Filter</span>
      </button>
      <button
        class="w-1/2 btn rounded-l-none bg-red-300 border-red-300 text-red-800 hover:bg-red-500 hover:text-slate-100 hover:border-red-500"
        @click="reset"
      >
        <Icon class="text-lg" name="solar:refresh-bold" />
        <span class="hidden sm:inline">Reload</span>
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
