<template>
  <NuxtLayout name="app">
    <div class="grid grid-cols-1 space-y-5">
      <div class="rounded-lg shadow-sm bg-slate-50 py-5">
        <!-- Button Start -->
        <div class="w-full flex flex-col gap-2">
          <h2
            class="text-gray-700 pt-1 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
          >
            overdue books
          </h2>
          <div class="flex items-center my-4 px-5 pt-1">
            <PrimaryFilter placeholder="EX: sherlock holmes" />
          </div>
        </div>
        <!-- Buttons End -->

        <!-- Table Start -->
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="Headtitle" />
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>10253</td>
                <td>Famous Five Part 1</td>
                <td>doe doe</td>
                <td>2023/10/25</td>
                <td>
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols:check-circle-outline"
                    colors="bg-green-700 text-white"
                  />
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                  <PrimaryIconButton
                    icon="ic:baseline-block"
                    colors="bg-red-700 text-white"
                  />
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>10253</td>
                <td>Famous Five Part 1</td>
                <td>doe doe</td>
                <td>2023/10/25</td>
                <td>
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols:check-circle-outline"
                    colors="bg-green-700 text-white"
                  />
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                  <PrimaryIconButton
                    icon="ic:baseline-block"
                    colors="bg-red-700 text-white"
                  />
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>10253</td>
                <td>Famous Five Part 1</td>
                <td>doe doe</td>
                <td>2023/10/25</td>
                <td>
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols:check-circle-outline"
                    colors="bg-green-700 text-white"
                  />
                  <PrimaryIconButton icon="material-symbols:info-outline" />
                  <PrimaryIconButton
                    icon="ic:baseline-block"
                    colors="bg-red-700 text-white"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Table End -->
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Overdue | Sri Dharmaloka College",
});
const Headtitle = ["Book id", "title", "reserver", "due date", "Action"];
</script>