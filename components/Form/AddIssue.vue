<script setup>
import category from "~/assets/data/holding-category";

const form = {
  category: "",
  title: "",
  author: "",
};

const isLoading = ref(false);

async function submit() {
  isLoading.value = true;
  const { data, error } = await useApiFetch("/issues/new", {
    method: "POST",
    body: form,
  });

  if (data.value) {
    iziToast.show({
      title: "SUCCESS",
      message: "Issue added successfully",
      color: "green",
    });
    useCookie("access-token").value = toRaw(data.value).access_token;
  } else if (error.value) {
    if (Array.isArray(error.value.data?.message)) {
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
  }
  isLoading.value = false;
}

function reset() {
  Object.keys(form).forEach((key) => {
    form[key] = "";
  });
  refresh();
}

const {
  pending,
  data: authors,
  refresh,
} = useApiFetch("/authors", {
  lazy: false,
  watch: false,
  transform: (authors) => {
    return authors.authors.map((author) => ({
      value: author.id,
      label: author.name,
    }));
  },
});

</script>

<template>
  <form
    class="w-full flex flex-col py-10 px-8 gap-5"
    :class="{
      'animate-pulse': pending,
    }"
  >
    <PrimaryIconSelect
      label="Catogary"
      placeholder="select the Catogary"
      :options="category"
      icon="ph:stack"
      v-model="form.category"
    />
    <PrimaryIconInput
      label="title"
      type="text"
      icon="material-symbols:book-5-outline"
      placeholder="Book title"
      v-model="form.title"
    />
    <PrimaryIconSelect
      label="author"
      placeholder="select the author"
      :options="authors"
      icon="material-symbols:person-outline"
      v-model="form.author"
      :class="{
        'animate-pulse': pending,
      }"
    />
    <div class="w-full flex justify-center gap-3">
      <button class="btn text-slate-200" type="button" @click="submit">
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
