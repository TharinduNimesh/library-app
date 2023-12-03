<template>
  <form
    class="w-full flex flex-col py-5 px-8 gap-5"
    :class="{
      'animate-pulse': loading,
    }"
    @submit.prevent="submit"
  >
    <PrimaryIconInput
      label="Full Name"
      type="text"
      icon="mdi:account-outline"
      placeholder="JOHN DOE"
      v-model="addUserForm.name"
    />
    <PrimaryIconInput
      label="mobile"
      type="text"
      icon="majesticons:phone-dial-line"
      placeholder="071 000 00xx"
      v-model="addUserForm.mobile"
    />
    <PrimaryIconSelect
      label="Position"
      placeholder="select the position"
      :options="positions"
      icon="solar:posts-carousel-horizontal-line-duotone"
      v-model="addUserForm.position"
    />
    <template v-if="addUserForm.position != ''">
      <PrimaryIconInput
        :label="dynamicInput?.label"
        type="text"
        icon="material-symbols-light:app-registration-outline-sharp"
        :placeholder="dynamicInput?.placeholder"
        v-model="addUserForm.index"
      />
      <template v-if="addUserForm.position == 1 || addUserForm.position == 2">
        <PrimaryIconSelect
          label="Grade"
          placeholder="select the Grade"
          :options="grades"
          icon="majesticons:academic-cap-line"
          v-model="addUserForm.grade"
        />
        <PrimaryIconInput
          label="Class"
          type="text"
          icon="majesticons:home-line"
          placeholder="B"
          v-model="addUserForm.class"
        />
      </template>
      <PrimaryIconSelect
        v-if="addUserForm.position == 3"
        label="Role"
        placeholder="select the Role"
        :options="roles"
        icon="solar:posts-carousel-horizontal-line-duotone"
        v-model="addUserForm.role"
      />
    </template>
    <div class="w-full flex justify-center gap-3">
      <button
        class="btn text-slate-200 disabled:bg-gray-500 disabled:text-gray-800"
        :disabled="loading"
        type="submit"
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
import roles from "~/assets/data/user-roles";

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

const addUserForm = ref({
  name: "",
  mobile: "",
  position: "",
  index: "",
  grade: "",
  class: "",
  role: "",
});

async function submit() {
  loading.value = true;
  const body = {
    name: addUserForm.value.name,
    mobile: addUserForm.value.mobile,
    position: addUserForm.value.position,
    index: addUserForm.value.index,
    grade: addUserForm.value.grade,
    class: addUserForm.value.class,
    role: addUserForm.value.role,
  };
  
  const { data, error } = await useApiFetch("/members/new", {
    method: "POST",
    body,
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
}

const dynamicInput = computed(() => {
  if (addUserForm.value.position == 1) {
    return {
      label: "Index Number",
      placeholder: "Your index number Here",
    };
  } else if (addUserForm.value.position == 2 || addUserForm.value.position == 3) {
    return {
      label: "NIC Number",
      placeholder: "Your NIC number Here",
    };
  }
});

function reset() {
  addUserForm.value.name = "";
  addUserForm.value.mobile = "";
  addUserForm.value.position = "";
  addUserForm.value.index = "";
  addUserForm.value.grade = "";
  addUserForm.value.class = "";
  addUserForm.value.role = "";
}
</script>