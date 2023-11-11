<template>
    <div class="relative w-full flex flex-col">
      <label class="uppercase text-sm ml-2 text-gray-500">{{ label }}</label>
      <div class="w-full flex">
        <div
          class="absolute w-10 h-10 flex items-center justify-center text-xl text-gray-500"
        >
          <Icon :name="icon" />
        </div>
        <select
          class="w-full h-10 uppercase rounded-md bg-transparent outline-none border border-gray-400 focus:border-gray-700 text-gray-700 pl-10 duration-300"
        >
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >{{ option.label }}</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["label", "icon", "options", "modelValue"],
  };
  </script>
  