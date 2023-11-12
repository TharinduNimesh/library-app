<template>
  <NuxtLayout name="app">
    <div class="space-y-5">
      <div class="rounded-lg bg-slate-50 shadow-md py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2 class="text-gray-700 text-4xl font-extrabold uppercase px-5">
              Available Holdings
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button class="btn text-slate-200" @click="show">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span>Add New Record</span>
              </button>
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
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="rounded-lg bg-slate-50 shadow-md py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2 class="text-gray-700 text-4xl font-extrabold uppercase px-5">
              Removed Holdings
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button class="btn text-slate-200" @click="show">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span>Add New Record</span>
              </button>
            </div>
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
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Holdings | Sri Dharmaloka College",
});

const availableHead = ["Title", "Copies", "Available", "action"];
const removedHead = ["Book ID", "Title", "Removed AT", "More"];
</script>
