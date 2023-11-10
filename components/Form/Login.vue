<template>
  <form class="w-full">
    <div class="mb-6">
      <PrimaryInput type="email" placeholder="Email Address" v-model="form.email" />
    </div>

    <div class="mb-6">
      <PrimaryInput type="password" placeholder="Password" v-model="form.password" />
    </div>

    <div class="mb-8">
      <button
        type="button"
        class="w-full rounded-md btn btn-gray-800 py-3 px-4 sm:px-5 text-base text-white cursor-pointer hover:bg-opacity-90 transition"
        @click="login"
      >
        Sign In
      </button>
    </div>
  </form>
</template>

<script>
const form = {
  email: "",
  password: "",
};

export default {
  data() {
    return {
      form,
    };
  },
  methods: {
    login() {
      this.$router.push("/library/dashboard");
    },
  },
};
</script>

<style></style>
