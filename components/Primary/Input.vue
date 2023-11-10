<template>
  <div class="flex flex-col">
    <label class="text-left ml-3 text-gray-400 uppercase" v-if="label">{{
      label
    }}</label>
    <div class="relative flex">
      <input
        :type="inputType"
        :placeholder="placeholder"
        class="w-full rounded-md border border-gray-300 py-3 px-4 text-base bg-transparent placeholder:text-sm placeholder:uppercase text-gray-600 placeholder-gray-400 outline-none focus-visible:shadow-none focus:border-gray-600 duration-300"
        :class="{
          'pr-10': ispassword,
        }"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span
        class="absolute h-full w-10 flex items-center justify-center right-0"
        v-if="ispassword"
        @click="toggleType"
      >
        <Icon name="ph:eye-light" v-show="inputType === 'text'" />
        <Icon name="ph:eye-slash" v-show="inputType === 'password'" />
      </span>
    </div>
    <div
      class="w-full text-left"
      :class="{
        hidden: !isInalid,
      }"
    >
      <span class="mt-1 ml-2 text-red-600">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputType: this.type.toLowerCase(),
    };
  },
  props: ["label", "type", "placeholder", "error", "isInalid", "modelValue"],
  computed: {
    ispassword() {
      return this.type.toLowerCase() === "password";
    },
  },
  methods: {
    toggleType() {
      this.inputType = this.inputType === "text" ? "password" : "text";
    },
  },
};
</script>

<style></style>
