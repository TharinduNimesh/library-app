<template>
  <form class="w-full">
    <div
      class="w-full bg-red-200 p-2 font-bold rounded-lg mb-3 text-center text-sm text-red-600 uppercase"
      v-if="display_error"
    >
      <span>
        {{ display_error }}
      </span>
    </div>
    <div
      class="w-full bg-red-200 p-2 font-bold rounded-lg mb-3 text-sm text-red-600 uppercase"
      v-else-if="display_errors.length != 0"
    >
    <ul>
      <li v-for="error in display_errors" :key="error.msg">
        {{ error.msg }}
      </li>
    </ul>
  </div>
    <div class="mb-6">
      <PrimaryInput
        type="email"
        placeholder="Email Address"
        v-model="form.email"
      />
    </div>

    <div class="mb-6">
      <PrimaryInput
        type="password"
        placeholder="Password"
        v-model="form.password"
      />
    </div>
    <div class="mb-8">
      <button
        type="button"
        class="w-full rounded-md btn btn-gray-800 py-3 px-4 sm:px-5 text-base text-white cursor-pointer hover:bg-opacity-90 transition disabled:bg-gray-600 disabled:text-slate-100 disabled:cursor-wait"
        @click="login"
        :disabled="loading"
      >
        Sign In
      </button>
    </div>
  </form>
</template>

<script setup>
const form = {
  email: "",
  password: "",
};

const loading = ref(false);
const display_error = ref(null);
const display_errors = ref([]);

async function login() {
  display_error.value = null;
  display_errors.value = [];
  loading.value = true;
  const { data, error } = await useApiFetch("/auth/login", {
    method: "POST",
    body: form,
  });
  const statusCode = error.value?.statusCode;

  const values = toRaw(data.value);

  if (!statusCode) {
    const access_token = useCookie("access-token", {
      priority: "high",
      secure: true,
      sameSite: true,
    });

    const refresh_token = useCookie("refresh-token", {
      priority: "high",
      secure: true,
      sameSite: true,
    });

    access_token.value = values?.access_token;
    refresh_token.value = values?.refresh_token;

    navigateTo("/library/dashboard");
  } else {
    const errors = error?.value?.data?.message;
    console.log(errors);
    if (Array.isArray(errors)) {
      display_errors.value = errors;
    } else {
      display_error.value = errors;
    }
  }

  loading.value = false;
}
</script>
