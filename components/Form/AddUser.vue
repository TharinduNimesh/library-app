<template>
  <form class="w-full flex flex-col py-10 px-8 gap-5">
    <PrimaryIconInput
      label="Full Name"
      type="text"
      icon="mdi:account-outline"
      placeholder="JOHN DOE"
    />
    <PrimaryIconSelect
      label="Position"
      :options="positions"
      icon="mdi:account-outline"
    />
    <template v-for="(element, index) in elements[position]" :key="index">
      <template v-if="element.type === 'input'">
        <PrimaryIconInput
          :label="element.label"
          :type="element.type"
          :icon="element.icon"
          :placeholder="element.placeholder"
        />
      </template>
      <template v-else>
        <PrimaryIconSelect
          :label="element.label"
          :options="element.options"
          :icon="element.icon"
        />
      </template>
    </template>
    <div class="w-full flex justify-center gap-3">
      <button class="btn text-slate-200" @click="show">
        <Icon class="text-lg" name="majesticons:send" />
        <span>SUBMIT</span>
      </button>
      <button
        class="btn border-red-300 bg-red-300 text-red-800 hover:bg-red-500 hover:text-slate-100 hover:border-red-100"
        @click="show"
      >
        <Icon class="text-lg" name="mdi:refresh" />
        <span>RESET</span>
      </button>
    </div>
  </form>
</template>

<script setup>
import elements from "~/assets/data/user-elements";

const positions = [
  {
    value: 0,
    label: "select the poistion",
  },
  {
    value: 1,
    label: "Student",
  },
  {
    value: 2,
    label: "Teacher",
  },
  {
    value: 3,
    label: "Non-academic staff",
  },
];
</script>

<script>
export default {
  data() {
    return {
      position: 1,
    };
  },
};
</script>
