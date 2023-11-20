<template>
  <form
    class="w-full flex flex-col py-10 px-8 gap-5"
    :class="{
      'animate-pulse': loading,
    }"
  >
    <PrimaryIconInput
      label="Full Name"
      type="text"
      icon="mdi:account-outline"
      placeholder="JOHN DOE"
      v-model="form.name"
    />
    <PrimaryIconInput
      label="mobile"
      type="text"
      icon="majesticons:phone-dial-line"
      placeholder="071 000 00xx"
      v-model="form.mobile"
    />
    <!-- <PrimaryIconSelect
      label="Position"
      placeholder="select the position"
      :options="positions"
      icon="solar:posts-carousel-horizontal-line-duotone"
      v-model="form.position"
    /> -->
    <PrimaryIconInput
      label="Registration Number"
      type="text"
      icon="material-symbols-light:app-registration-outline-sharp"
      placeholder="Your index/nic Here"
      v-model="form.index"
    />
    <PrimaryIconSelect
      label="Grade"
      placeholder="select the Grade"
      :options="grades"
      icon="majesticons:academic-cap-line"
      v-model="form.grade"
    />
    <PrimaryIconInput
      label="Class"
      type="text"
      icon="majesticons:home-line"
      placeholder="B"
      v-model="form.class"
    />
    <div class="w-full flex justify-center gap-3">
      <button
        class="btn text-slate-200 disabled:bg-gray-500 disabled:text-gray-800"
        type="button"
        @click="addUser"
        :disabled="loading"
      >
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

const grades = [];
for (let i = 1; i < 14; i++) {
  grades.push({
    label: `Grade - ${i}`,
    value: i,
  });
}

const loading = ref(false);

const form = {
  name: "",
  mobile: "",
  position: 1,
  index: "",
  grade: "",
  class: "",
};

async function addUser() {
  loading.value = true;
  const { data, error } = await useApiFetch("/members/new", {
    method: "POST",
    body: form,
  });
  if (error.value) {
    let errors = error.value.data?.message;

    iziToast.show({
      title: "ERROR",
      color: "red",
      message: Array.isArray(errors)
        ? errors[0].msg.toUpperCase()
        : errors.toUpperCase(),
    });
  } else {
    iziToast.show({
      title: "SUCCESS",
      color: "green",
      message: data.value?.message?.toUpperCase(),
    });
    useCookie("access-token").value = data.value?.access_token;
  }
  loading.value = false;
  reset();
}

function reset() {
  form.name = "";
  form.mobile = "";
  form.position = 1;
  form.index = "";
  form.grade = "";
  form.class = "";
}
</script>
