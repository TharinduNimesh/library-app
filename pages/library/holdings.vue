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
                  <form class="w-full flex flex-col gap-5">
                    <h3 class="font-bold text-lg uppercase">Add holding</h3>
                    <PrimaryIconInput
                      label="Serial no"
                      type="text"
                      icon="material-symbols:book-2-outline-rounded"
                      placeholder="enter Serial no"
                    />
                    <PrimaryIconSelect
                      label="Issue"
                      placeholder="select the Issue"
                      :options="positions"
                      icon="solar:posts-carousel-horizontal-line-duotone"
                      v-model="position"
                    />
                  </form>
                  <div class="modal-action mt-40">
                    <label for="my_modal_5" class="btn btn-neutral"
                      >Submit</label
                    >
                    <label
                      for="my_modal_5"
                      class="btn btn-neutral bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
                      >Close</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: sherlock holmes" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="availableHead" />
            <tbody>
              <tr
                v-for="(row, index) in 5"
                :key="index"
                class="bg-white border-b hover:bg-gray-50"
              >
                <td class="flex flex-col">
                  <p>sherlock holmes</p>
                  <p class="text-gray-400">Kumarathunga Munidasa</p>
                </td>
                <td>8 COPIES</td>
                <td>3 AVAILABLE</td>
                <td>
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_1.showModal()"
                  />
                </td>
              </tr>
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
              <label for="my_modal_6" class="btn"
                ><Icon class="text-lg" name="material-symbols:delete-outline" />
                <span class="hidden sm:inline">quick remove</span>
              </label>
            </div>

            <!-- Put this part before </body> tag -->
            <input type="checkbox" id="my_modal_6" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box bg-white">
                <form class="w-full flex flex-col gap-5">
                  <PrimaryIconInput
                    label="Serial no"
                    type="text"
                    icon="mdi:account-outline"
                    placeholder="Enter Serial no"
                  />
                  <PrimaryTextarea
                    label="Reason"
                    type="text"
                    placeholder="Write a reason for removing this book"
                  />
                </form>
                <div class="modal-action">
                  <label for="my_modal_6" class="btn btn-neutral">Submit</label>
                  <label
                    for="my_modal_6"
                    class="btn btn-neutral bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
                    >Close</label
                  >
                </div>
              </div>
            </div>
            <!--  -->
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: sherlock holmes" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="removedHead" />
            <tbody>
              <tr
                v-for="(row, index) in 5"
                :key="index"
                class="bg-white border-b hover:bg-gray-50"
              >
                <td>1024</td>
                <td class="flex flex-col">
                  <p>sherlock holmes</p>
                  <p class="text-gray-400">Kumarathunga Munidasa</p>
                </td>
                <td>2023/12/12</td>
                <td>
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_2.showModal()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <dialog id="my_modal_2" class="modal">
      <div class="modal-box bg-white uppercase p-6">
        <h3 class="font-bold text-lg mb-5">Info !</h3>

        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2">
            <PrimaryDisableInput
              label="Removed by"
              placeholder="removed by here"
            />
          </div>
          <div class="col-span-2">
            <PrimaryDisableInput
              label="Removed At"
              placeholder="Removed At Here"
            />
          </div>
          <div class="col-span-2">
            <PrimaryDisableTextarea label="Reason" placeholder="Reason Here" />
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
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl uppercase">
        <h3 class="font-bold text-lg mb-5">Info !</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput label="Title" placeholder="Book Title Here" />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput
              label="Author"
              placeholder="Author Name Here"
            />
          </div>
          <div class="col-span-2 sm:col-span-2">
            <PrimaryDisableInput label="Copies" placeholder="Copies Here" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg mt-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="TableModal" />
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
              </tr>
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
    <template #RightModal>
      <FormAddIssue />
    </template>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Holdings | Sri Dharmaloka College",
});

const availableHead = ["Title", "Copies", "Available", "action"];
const removedHead = ["Book ID", "Title", "Removed AT", "More"];
const TableModal = ["Serial no", "Reserved", "status"];

const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function show() {
  isModalVisible.value = true;
  isContainerVisible.value = true;
}
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
</script>
