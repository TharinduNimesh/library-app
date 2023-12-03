<script setup>
const form = {
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
    reset();
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
    class="w-full flex flex-col gap-5"
    :class="{
      'animate-pulse': pending,
    }"
  >
    <h2 class="text-2xl font-bold text-gray-800 uppercase">Add Issue</h2>
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
    <div class="modal-action">
      <label
        for="my_modal_5"
        type="button"
        class="btn btn-neutral bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
        >Close</label
      >
      <button type="button" class="btn btn-neutral" @click="submit">
        Submit
      </button>
    </div>
  </form>
</template>
