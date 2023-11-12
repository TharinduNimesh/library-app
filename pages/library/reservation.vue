<template>
  <NuxtLayout name="app">
    <div class="rounded-lg bg-slate-50 p-5 shadow-md">

      <div class="w-full flex flex-col gap-2">
          <h2
            class="text-gray-700 pt-1 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
          >
            Manage Reservation
          </h2>
          
        </div>
      <div class="p-5 flex justify-end">
        <button class="btn btn-neutral" @click="show">
          <Icon class="text-lg" name="mingcute:add-circle-fill" /><span
            >Add New Records</span
          >
        </button>
      </div>

      <!-- Table Start -->
      <div class="overflow-x-auto rounded-b-lg">
        <table class="w-full text-md text-left text-gray-500">
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