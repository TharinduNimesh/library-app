<template>
  <form class="w-full flex flex-col py-10 px-8 gap-5" @submit.prevent="submit">
    <!-- <PrimaryIconSelect
      label="Position"
      placeholder="select the Position"
      :options="positions"
      icon="material-symbols:account-circle"
      v-model="position"
    /> -->
    <PrimaryIconInput
      label="SERIAL NO"
      type="text"
      icon="material-symbols:book-2-rounded"
      placeholder="SERIAL NO"
      v-model="form.holding_id"
      @input="isChecked = false"
    />
    <button type="button" class="btn" @click="checkBook">
      Check Availability
    </button>
    <label
      class="uppercase text-sm text-green-500"
      v-if="isAvailable && isChecked"
    >
      Book {{ title }} Is Available
    </label>
    <label
      class="uppercase text-sm text-red-500"
      v-else-if="!isAvailable && isChecked"
    >
      Book {{ title }} Is Not Available
    </label>
    <div class="w-full flex flex-col gap-5" v-if="isAvailable && isChecked">
      <PrimaryIconInput
        label="Registration NO"
        type="text"
        icon="material-symbols:clarify-rounded"
        placeholder="230xx"
        v-model="form.index"
      />
      <PrimaryIconSelect
        label="Duration"
        placeholder="select the duration"
        :options="durations"
        icon="material-symbols:browse-gallery-rounded"
        v-model="form.duration"
      />
      <div class="w-full flex justify-center gap-3">
        <button class="btn text-slate-200" @click="show">
          <Icon class="text-lg" name="majesticons:send" />
          <span>SUBMIT</span>
        </button>
        <button
          class="btn border-red-300 bg-red-300 text-red-800 hover:bg-red-500 hover:text-slate-100 hover:border-red-100"
          type="button"
          @click="reset"
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
    value: 7,
    label: "7 Days",
  },
  {
    value: 14,
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
const form = {
  position: 1,
  holding_id: "",
  index: "",
  duration: "",
};

export default {
  data() {
    return {
      position: 0,
      durations: "",
      isAvailable: false,
      book: "",
      isChecked: false,
      form,
      title: "",
    };
  },
  methods: {
    async checkBook() {
      if (form.holding_id == "" || isNaN(form.holding_id)) {
        iziToast.warning({
          title: "WARNING",
          message: "PLEASE ENTER A VALID SERIOL NO",
        });
        return;
      }
      const { data, error } = await useApiFetch(
        `/holdings/available/${form.holding_id}`,
        {
          watch: false,
          lazy: false,
        }
      );

      if (error.value) {
        iziToast.error({
          title: "Error",
          message: error.value.data.message,
        });
      } else {
        this.isAvailable = data.value.status;
        this.isChecked = true;
        this.title = data.value.title;
      }
    },
    async submit() {
      if (form.holding_id == "" || isNaN(form.holding_id)) {
        iziToast.warning({
          title: "WARNING",
          message: "PLEASE ENTER A VALID SERIOL NO",
        });
        return;
      }
      if (form.index == "") {
        iziToast.warning({
          title: "WARNING",
          message: "PLEASE ENTER A VALID INDEX NO",
        });
        return;
      }
      if (form.duration == "") {
        iziToast.warning({
          title: "WARNING",
          message: "PLEASE SELECT A VALID DURATION",
        });
        return;
      }

      const { data, error } = await useApiFetch("/reservation/new", {
        method: "POST",
        body: form,
        watch: false,
        lazy: false,
      });

      if (error.value) {
        if (Array.isArray(error.value.data.message)) {
          error.value.data.message.forEach((element) => {
            iziToast.error({
              title: "Error",
              message: element,
            });
          });
        } else {
          iziToast.error({
            title: "Error",
            message: error.value.data.message,
          });
        }
      } else {
        iziToast.success({
          title: "SUCCESS",
          message: data.value.message.toUpperCase(),
        });
        this.reset();
      }
    },
    reset() {
      this.form = {
        position: 1,
        holding_id: "",
        index: "",
        duration: "",
      };

      this.isChecked = false;
    }
  },
};
</script>

<style></style>
