<template>
  <NuxtLayout name="app">
    <div class="grid grid-cols-1 space-y-5">
      <div class="rounded-lg shadow-sm bg-slate-50 py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2
              class="text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
            >
              manage reservation
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button class="btn text-slate-200" @click="show">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span class="hidden sm:inline">Add New Record</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Table Start -->
        <div class="overflow-x-auto rounded-b-lg px-5 mt-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="Headtitle" />
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
                <td>
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Table End -->
    </div>
    <template #RightModal>
      <FormAddReservation />
    </template>
  </NuxtLayout>
</template >

<script setup>
useHead({
  title: "Reservation | Sri Dharmaloka College",
});
const Headtitle = ["Book Name", "Reserver", "Reserve Date", "Due Date", "Info"];

const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function show() {
  isModalVisible.value = true;
  isContainerVisible.value = true;
}

const columns = ["Id", "Name", "Mobile", "Joined At", "Action"];
</script>