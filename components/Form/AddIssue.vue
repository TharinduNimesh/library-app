<template>
  <form class="w-full flex flex-col py-10 px-8 gap-5">
    <PrimaryIconSelect
      label="Catogary"
      placeholder="select the Catogary"
      :options="positions"
      icon="solar:posts-carousel-horizontal-line-duotone"
      v-model="position"
    />
    <PrimaryIconInput
      label="title"
      type="text"
      icon="material-symbols:subtitles-outline"
      placeholder="Book title"
    />
    <PrimaryIconSelect
      label="author"
      placeholder="select the author"
      :options="positions"
      icon="solar:posts-carousel-horizontal-line-duotone"
      v-model="position"
    />
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
const positions = [
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

<style>
</style>