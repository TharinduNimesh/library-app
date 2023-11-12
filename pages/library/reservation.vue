<template>
  <NuxtLayout name="app">
    <div class="rounded-lg bg-slate-50 p-5 shadow-md">
      <div class="p-5 flex justify-end">
        <button class="btn btn-neutral">
          <Icon class="text-lg" name="mingcute:add-circle-fill" /><span
            >Add Records</span
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
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Reservation | Sri Dharmaloka College",
});
const Headtitle = ["Book Name", "Reserver", "Reserve Date", "Due Date", "Info"];
</script>