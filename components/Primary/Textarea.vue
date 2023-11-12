<template>
  <div class="relative w-full flex flex-col">
    <label class="uppercase text-sm ml-2 text-gray-500">{{ label }}</label>
    <div class="w-full flex">
      <div
        class="absolute w-10 h-10 flex items-center justify-center text-xl text-gray-500"
      ></div>
      <!-- Use 'textarea' instead of 'input' for the textarea element -->
      <textarea
        class="w-full h-20 rounded-md bg-transparent placeholder:uppercase outline-none border border-gray-400 focus:border-gray-700 text-gray-700 pl-2 duration-300"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      ></textarea>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: ["label", "placeholder", "modelValue"],
};
</script>
  