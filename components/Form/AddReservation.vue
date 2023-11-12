<template>
  <form class="w-full flex flex-col py-10 px-8 gap-5">
    <PrimaryIconSelect
      label="Position"
      placeholder="select the Position"
      :options="positions"
      icon="material-symbols:account-circle"
      v-model="position"
    />
    <PrimaryIconInput
      label="Book ID"
      type="text"
      icon="material-symbols:book-2-rounded"
      placeholder="BOOK ID"
      v-model="book"
    />
    <button type="button" class="btn" @click="checkBook">
      Check Availability
    </button>
    <label
      class="uppercase text-sm text-green-500"
      v-if="isAvailable && isChecked"
    >
      Book Madolduwa Is Available
    </label>
    <label
      class="uppercase text-sm text-red-500"
      v-else-if="!isAvailable && isChecked"
    >
      Book Madolduwa Is Not Available
    </label>
    <div class="w-full flex flex-col gap-5" v-if="isAvailable && isChecked">
      <PrimaryIconInput
        :label="labels[position].label"
        type="text"
        icon="material-symbols:clarify-rounded"
        :placeholder="labels[position].placeholder"
      />
      <PrimaryIconSelect
        label="Duration"
        placeholder="select the duration"
        :options="durations"
        icon="material-symbols:browse-gallery-rounded"
        v-model="durations"
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
    </div>
  </form>
</template>

<script setup>
const durations = [
  {
    value: 1,
    label: "7 Days",
  },
  {
    value: 2,
    label: "14 Days",
  },
];

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

const labels = [
  {},
  {
    label: "Registration Number",
    placeholder: "230xx",
  },
  {
    label: "NIC Number",
    placeholder: "887051XXX",
  },
  {
    label: "NIC Number",
    placeholder: "887051XXX",
  },
];
</script>

<script>
export default {
  data() {
    return {
      position: 0,
      durations: "",
      isAvailable: false,
      book: "",
      isChecked: false,
    };
  },
  methods: {
    checkBook() {
      this.isAvailable = true;
      this.isChecked = true;
    },
  },
};
</script>

<style></style>
