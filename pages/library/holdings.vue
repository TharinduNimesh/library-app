<script setup>
useHead({
  title: "Holdings | Sri Dharmaloka College",
});
</script>

<template>
  <NuxtLayout name="app">
    <div class="space-y-5">
      <div class="rounded-lg shadow-sm bg-slate-50">
        <!-- Buttons Start -->
        <div
          class="p-5 space-y-2 lg:space-y-0 lg:space-x-2 flex flex-col lg:flex-row items-center"
        >
          <select
            class="select select-accent bg-accent-content w-full max-w-xs lg:w-auto"
          >
            <option disabled selected>Select Category</option>
            <option>Article</option>
            <option>News Paper</option>
            <option>Books</option>
          </select>

          <input
            type="text"
            placeholder="Type here"
            class="input input-accent bg-accent-content w-full max-w-xs lg:w-auto"
          />
        </div>

        <!-- Buttons End -->

        <!-- Table Start -->
        <div class="overflow-x-auto rounded-b-lg">
          <table class="w-full text-md text-left text-gray-500">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
              <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="col" class="px-6 py-3">book ID</th>
                <th scope="col" class="px-6 py-3">title</th>
                <th scope="col" class="px-6 py-3">author</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4 text-right flex justify-end space-x-1">
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols-light:info-outline"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:delete-outline"
                    colors="bg-red-700 text-white"
                  />
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4 text-right flex justify-end space-x-1">
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols-light:info-outline"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:delete-outline"
                    colors="bg-red-700 text-white"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Table End -->
      </div>
      <div class="rounded-lg bg-slate-50 shadow-sm">
        <!-- Buttons Start -->
        <div
          class="p-5 space-y-2 lg:space-y-0 lg:space-x-2 flex flex-col lg:flex-row items-center"
        >
          <select
            class="select select-accent bg-accent-content w-full max-w-xs lg:w-auto"
          >
            <option disabled selected>Select Category</option>
            <option>Article</option>
            <option>News Paper</option>
            <option>Books</option>
          </select>

          <input
            type="text"
            placeholder="Type here"
            class="input input-accent bg-accent-content w-full max-w-xs lg:w-auto"
          />
        </div>

        <!-- Buttons End -->

        <!-- Table Start -->
        <div class="overflow-x-auto rounded-b-lg">
          <table class="w-full text-md text-left text-gray-500">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
              <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="col" class="px-6 py-3">book ID</th>
                <th scope="col" class="px-6 py-3">title</th>
                <th scope="col" class="px-6 py-3">author</th>
                <th scope="col" class="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4 text-right flex justify-end space-x-1">
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols-light:info-outline"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:delete-outline"
                    colors="bg-red-700 text-white"
                  />
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4 text-right flex justify-end space-x-1">
                  <!-- Assuming PrimaryIconButton is properly defined -->
                  <PrimaryIconButton
                    icon="material-symbols-light:info-outline"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:delete-outline"
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