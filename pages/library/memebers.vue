<template>
  <NuxtLayout name="app">
    <div class="grid grid-cols-1 space-y-5">
      <div class="rounded-lg bg-slate-50 shadow-md py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2
              class="text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
            >
              MANAGE MEMBERS
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button
                class="btn bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
              >
                <Icon class="text-lg" name="mingcute:upload-2-fill" />
                <span class="hidden sm:inline">Export</span>
              </button>
              <button class="btn text-slate-200" @click="show">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span class="hidden sm:inline">Add New Record</span>
              </button>
            </div>
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: JOHN DOE" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="columns" />
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_1.showModal()"
                  />
                  <!-- The button to open modal -->
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
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
    </div>

    <!-- Table Modal Start -->
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl uppercase">
        <h3 class="font-bold text-lg mb-5">Info !</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput label="Name" placeholder="Your Name Here" />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput
              label="index/nic"
              placeholder="Your index/nic Here"
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput
              label="mobile"
              placeholder="Your mobile Here"
            />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput label="role" placeholder="Your role Here" />
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
      <FormAddUser />
    </template>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Users | Sri Dharmaloka College",
});

const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function show() {
  isModalVisible.value = true;
  isContainerVisible.value = true;
}

const columns = ["Id", "Name", "Mobile", "Joined At", "Action"];
const TableModal = ["Serial no", "Took", "gave"];
</script>
