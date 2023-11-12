<template>
  <div class="relative w-full flex flex-col">
    <label class="uppercase text-sm ml-2 text-gray-500">{{ label }}</label>
    <div class="w-full flex">
      <div
        class="absolute w-10 h-10 flex items-center justify-center text-xl text-gray-500"
      >
        <Icon :name="icon" />
      </div>
      <input
        :type="type"
        class="w-full h-10 rounded-md bg-transparent placeholder:uppercase outline-none border border-gray-400 focus:border-gray-700 text-gray-700 pl-10 duration-300"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)" 
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "type", "icon", "placeholder", "modelValue"],
};
</script>
