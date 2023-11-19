<script setup>
useHead({
  title: "Holdings | Sri Dharmaloka College",
});

const availableHead = ["Title", "Copies", "Available", "action"];
const removedHead = ["Serial no", "Title", "Removed AT", "More"];
const TableModal = ["Serial no", "Reserved", "status"];

const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function show() {
  isModalVisible.value = true;
  isContainerVisible.value = true;
}

const availableDetails = ref({
  title: "",
  author: "",
  copies: "",
  available: "",
  holdings: [],
});

const removedDetails = ref({
  removed_by: "",
  removed_at: "",
  reason: "",
});

function availableInfo(info) {
  info = toRaw(info);
  availableDetails.value.title = info.title;
  availableDetails.value.author = info.author;
  availableDetails.value.copies = info.copies;
  availableDetails.value.available = info.available;
  availableDetails.value.holdings = info.holdings;

  document.getElementById("available_info").showModal();
}

function removedInfo(info) {
  info = toRaw(info);

  removedDetails.value.removed_by = info.User.name;
  removedDetails.value.removed_at = new Date(info.removed_at)
    .toISOString()
    .split("T")[0];
  removedDetails.value.reason = info.reason;

  document.getElementById("removed_modal").showModal();
}

function isAvailable(reservations) {
  reservations = toRaw(reservations);
  let is_received = true;
  reservations.forEach((reservation) => {
    if (!reservation.is_received) {
      is_received = false;
    }
  });
  if (is_received) {
    return '<span class="uppercase text-green-500 text-sm font-semibold">Available</span>';
  } else {
    return '<span class="uppercase text-red-500 text-sm font-semibold">No Available</span>';
  }
}

const {
  pending: isLoading,
  data,
  refresh,
} = useApiFetch("/issues", {
  lazy: false,
  watch: false,
});

const issues = ref([]);
watch(data, (newData) => {
  issues.value = newData.issues.map((issue) => {
    return {
      value: issue.id,
      label: issue.title,
    };
  });
});

const form = {
  serial_no: "",
  issue_id: "",
};

async function addHolding() {
  const { data: addData, error: addError } = await useApiFetch(
    "/holdings/new",
    {
      method: "POST",
      body: form,
    }
  );
}

const remove_form = {
  serial_no: "",
  reason: "",
};

async function removeHolding() {
  if (remove_form.serial_no === "") {
    iziToast.error({
      title: "Error",
      message: "Serial no is required",
    });
    return;
  }
  const { data: removeData, error: removeError } = await useApiFetch(
    `/holdings/${remove_form.serial_no}`,
    {
      method: "DELETE",
      body: remove_form,
      lazy: false,
    }
  );
  if (removeError.value) {
    if(Array.isArray(removeError.value.data.message)) {
      removeError.value.data.message.forEach((error) => {
        iziToast.error({
          title: "Error",
          message: error.msg,
        });
      });
      return;
    }
    iziToast.error({
      title: "Error",
      message: removeError.value.data.message,
    });
    return;
  }

  if (removeData.value) {
    iziToast.success({
      title: "Success",
      message: removeData.value.message,
    });
    remove_form.serial_no = "";
    remove_form.reason = "";
    refresh();
  }
}
</script>

<template>
  <NuxtLayout name="app">
    <div class="grid grid-cols-1 space-y-5">
      <div class="rounded-lg bg-slate-50 shadow-md py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2
              class="text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
            >
              Available Holdings
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button
                class="btn bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
                @click="show"
              >
                <Icon class="text-lg" name="mdi:book-plus-outline" />
                <span class="hidden sm:inline">add issue</span>
              </button>
              <label for="my_modal_5" class="btn">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span class="hidden sm:inline">add holding</span>
              </label>

              <!-- Put this part before </body> tag -->
              <input type="checkbox" id="my_modal_5" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box bg-white">
                  <form
                    class="w-full flex flex-col gap-5"
                    @submit.prevent="addHolding"
                  >
                    <h3 class="font-bold text-2xl uppercase text-gray-800">
                      Add holding
                    </h3>
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
                    <div class="modal-action mt-40">
                      <label
                        for="my_modal_5"
                        type="button"
                        class="btn btn-neutral bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
                        >Close</label
                      >
                      <button class="btn btn-neutral">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: sherlock holmes" :reset="refresh" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="availableHead" />
            <tbody>
              <AppTableLoading count="4" v-if="isLoading || data == null" />
              <AppTableEmpty
                v-else-if="data.issues?.length === 0 && !isLoading"
                columns="4"
                message="Can't Find Any Holdings 😕"
              />
              <template v-else-if="data.issues?.length > 0 && !isLoading">
                <tr
                  v-for="issue in data.issues"
                  :key="issue.id"
                  class="bg-white border-b hover:bg-gray-50"
                >
                  <td class="flex flex-col">
                    <p>{{ issue.title }}</p>
                    <p class="text-gray-400">{{ issue.author }}</p>
                  </td>
                  <td>COPIES - {{ issue.copies }}</td>
                  <td>AVAILABLE - {{ issue.available }}</td>
                  <td>
                    <PrimaryIconButton
                      icon="material-symbols:info-outline"
                      @click="availableInfo(issue)"
                    />
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="rounded-lg bg-slate-50 shadow-md py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2
              class="text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
            >
              Removed Holdings
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <label for="quick_remove_modal" class="btn"
                ><Icon class="text-lg" name="material-symbols:delete-outline" />
                <span class="hidden sm:inline">quick remove</span>
              </label>
            </div>
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: sherlock holmes" :reset="refresh" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="removedHead" />
            <tbody>
              <AppTableLoading count="4" v-if="isLoading || data == null" />
              <AppTableEmpty
                v-else-if="data.removedHoldings?.length === 0 && !isLoading"
                columns="4"
                message="Can't Find Any Removed Holdings 😕"
              />
              <template
                v-else-if="data.removedHoldings?.length > 0 && !isLoading"
              >
                <tr
                  v-for="holding in data.removedHoldings"
                  :key="holding.id"
                  class="bg-white border-b hover:bg-gray-50"
                >
                  <td>{{ holding.Holding.serial_no }}</td>
                  <td class="flex flex-col">
                    <p>{{ holding.Holding.Issue.title }}</p>
                    <p class="text-gray-400">
                      {{ holding.Holding.Issue.Author.name }}
                    </p>
                  </td>
                  <td>
                    {{
                      new Date(holding.removed_at).toISOString().split("T")[0]
                    }}
                  </td>
                  <td>
                    <PrimaryIconButton
                      icon="material-symbols:info-outline"
                      @click="removedInfo(holding)"
                    />
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <dialog id="removed_modal" class="modal">
      <div class="modal-box bg-white uppercase p-6">
        <h3 class="font-bold text-lg mb-5 uppercase text-gray-700">
          More Information
        </h3>

        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 md:col-span-1">
            <PrimaryDisableInput
              label="Removed by"
              :placeholder="removedDetails.removed_by"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <PrimaryDisableInput
              label="Removed At"
              :placeholder="removedDetails.removed_at"
            />
          </div>
          <div class="col-span-2">
            <PrimaryDisableTextarea
              label="Reason"
              :placeholder="removedDetails.reason"
            />
          </div>
        </div>
        <div class="modal-action mt-14">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    <!-- Available Table Modal Start -->
    <dialog id="available_info" class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl uppercase">
        <h3 class="font-bold text-lg mb-5 uppercase text-gray-700">
          More Information
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 md:col-span-1">
            <PrimaryDisableInput
              label="Title"
              :placeholder="availableDetails.title"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <PrimaryDisableInput
              label="Author"
              :placeholder="availableDetails.author"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <PrimaryDisableInput
              label="Copies"
              :placeholder="availableDetails.copies"
            />
          </div>
          <div class="col-span-2 md:col-span-1">
            <PrimaryDisableInput
              label="Available"
              :placeholder="availableDetails.available"
            />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg mt-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="TableModal" />
            <tbody>
              <AppTableEmpty
                v-if="availableDetails.holdings.length === 0"
                :columns="TableModal.length"
                message="There Are No Holdings Available For This Issue 🧐"
              />
              <template v-else>
                <tr
                  v-for="holding in availableDetails.holdings"
                  :key="holding.id"
                  class="bg-white border-b hover:bg-gray-50"
                >
                  <td>{{ holding.serial_no }}</td>
                  <td>
                    {{
                      new Date(holding.reserved_at).toISOString().split("T")[0]
                    }}
                  </td>
                  <td v-if="holding.is_removed">
                    <span class="uppercase text-red-500 text-sm font-semibold">
                      Removed
                    </span>
                  </td>
                  <td v-else v-html="isAvailable(holding.Reservation)"></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <!-- Table Modal End -->

    <!-- Quick Remove Modal -->
    <input type="checkbox" id="quick_remove_modal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box bg-white">
        <form class="w-full flex flex-col gap-5">
          <PrimaryIconInput
            label="Serial no"
            type="text"
            icon="material-symbols-light:book-5"
            placeholder="Enter Serial no"
            v-model="remove_form.serial_no"
          />
          <PrimaryTextarea
            label="Reason"
            type="text"
            placeholder="Write a reason for removing this"
            v-model="remove_form.reason"
          />
        </form>
        <div class="modal-action">
          <label
            for="quick_remove_modal"
            type="button"
            class="btn btn-neutral bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
          >
            Close
          </label>
          <button type="button" class="btn btn-neutral" @click="removeHolding">
            Submit
          </button>
        </div>
      </div>
    </div>
    <!-- Quick Remove Modal End -->

    <template #RightModal>
      <FormAddIssue />
    </template>
  </NuxtLayout>
</template>
