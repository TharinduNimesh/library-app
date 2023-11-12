<template>
  <NuxtLayout name="app">
    <div class="rounded-lg bg-slate-50 shadow-md py-5">
      <div class="w-full flex flex-col gap-2">
        <div class="flex flex-col sm:flex-row justify-between">
          <h2
            class="text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase px-5 mb-4 sm:mb-0"
          >
            Manage Members
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
</script>
