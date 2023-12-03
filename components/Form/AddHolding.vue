<script setup>
defineProps({
  issues: {
    type: Array,
    required: true,
  },
});

async function addHolding() {
  const { data, error } = await useApiFetch(
    "/holdings/new",
    {
      method: "POST",
      body: form,
    }
  );

  if(error.value) {
    if(Array.isArray(error.value.data?.message)) {
      error.value.data.message.forEach((error) => {
        iziToast.show({
          title: "ERROR",
          message: error.msg,
          color: "red",
        });
      });
    } else {
      iziToast.show({
        title: "ERROR",
        message: error.value.data.message,
        color: "red",
      });
    }
  } else if(data.value) {
    iziToast.show({
      title: "SUCCESS",
      message: "Holding added successfully",
      color: "green",
    });
  }
}

const form = {
  serial_no: "",
  issue_id: "",
  publisher: "",
  price: "",
  published_at: "",
  reserved_at: "",
};
</script>

<template>
  <form
    class="w-full flex flex-col mt-4 gap-5 px-8"
    @submit.prevent="addHolding"
  >
    <PrimaryIconInput
      label="Serial no"
      type="text"
      icon="material-symbols:book-2-outline-rounded"
      placeholder="enter Serial no"
      v-model="form.serial_no"
    />
    <PrimaryIconSelect
      label="Issue"
      placeholder="select the Issue"
      :options="issues"
      icon="solar:posts-carousel-horizontal-line-duotone"
      v-model="form.issue_id"
    />
    <PrimaryIconInput
      label="Price"
      placeholder="Enter Price Of The Book"
      icon="material-symbols:attach-money-rounded"
      v-model="form.price"
    />
    <PrimaryIconInput
      label="Publisher"
      type="text"
      icon="material-symbols:print-outline-sharp"
      placeholder="Enter Publisher Name & Place"
      v-model="form.publisher"
    />
    <PrimaryIconInput
      label="Published At"
      type="date"
      icon="material-symbols:event-outline"
      v-model="form.published_at"
    />
    <PrimaryIconInput
      label="Reserved At"
      type="date"
      icon="material-symbols:calendar-add-on-sharp"
      v-model="form.reserved_at"
    />
    <div class="w-full flex justify-center gap-3">
      <button class="btn text-slate-200" type="button" @click="addHolding">
        <Icon class="text-lg" name="majesticons:send" />
        <span>SUBMIT</span>
      </button>
      <button
        class="btn border-red-300 bg-red-300 text-red-800 hover:bg-red-500 hover:text-slate-100 hover:border-red-100"
        @click="reset"
        type="button"
      >
        <Icon class="text-lg" name="mdi:refresh" />
        <span>RESET</span>
      </button>
    </div>
  </form>
</template>

<style></style>
