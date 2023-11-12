<template>
  <div class="relative w-full flex flex-col">
    <label class="uppercase text-sm ml-2 text-gray-500">{{ label }}</label>
    <div class="relative w-full flex">
      <div
        class="absolute w-10 h-10 flex items-center justify-center text-xl text-gray-500"
      >
        <Icon :name="icon" />
      </div>
      <div class="flex flex-col w-full relative">
        <input
          type="text"
          class="w-full h-10 uppercase rounded-md bg-transparent outline-none border border-gray-400 focus:border-gray-700 text-gray-700 pl-10 duration-300"
          v-model="searched"
          :placeholder="placeholder"
          @input="filter"
        />
        <div
          class="flex flex-col w-full absolute mt-11 rounded-md bg-gray-200 p-2 gap-y-1 border border-gray-500 z-50"
          :class="{
            hidden: !searched || selected,
          }"
        >
          <span
            class="w-full h-10 px-5 bg-slate-100 rounded-md border-gray-500 flex items-center text-gray-600 uppercase cursor-pointer hover:bg-gray-800 hover:text-slate-100 duration-300"
            v-for="option in filter_options"
            :key="option.value"
            :data-value="option.value"
            @click="selectItem($event)"
          >
            {{ option.label }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "icon", "placeholder", "options", "modelValue"],
  data() {
    return {
      searched: "",
      filter_options: [],
      selected: 0,
    };
  },
  methods: {
    filter() {
      if (this.selected) {
        this.selected = 0;
      }
      if (this.searched === "") {
        this.filter_options = [];
      } else {
        const filter = this.searched.toUpperCase();
        this.filter_options = this.options.filter((option) =>
          option.label.toUpperCase().includes(filter)
        );
      }
    },
    selectItem(event) {
      this.selected = event.target.dataset.value;
      this.searched = event.target.innerHTML;

      this.$emit("update:modelValue", this.selected);
    },
  },
};
</script>
