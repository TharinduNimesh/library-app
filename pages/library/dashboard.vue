<script setup>
useHead({
  title: "Dashboard | Sri Dharmaloka College",
});
</script>

<template>
  <NuxtLayout name="app">
    <!-- Card Start -->
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="mr-4">
          <PrimaryIconButton
            icon="material-symbols:book-2-outline-rounded"
            class="bg-gray-800 w-16 h-16 text-center text-5xl flex justify-center"
          />
        </div>
        <div>
          <span class="block font-bold uppercase text-xl text-gray-800">All Books</span>
          <span class="block text-lg font-bold">62</span>
        </div>
      </div>

      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="mr-6">
          <PrimaryIconButton
            icon="material-symbols:article-outline"
            class="bg-gray-800 w-16 h-16 text-center text-5xl flex justify-center"
          />
        </div>
        <div>
          <span class="block font-bold uppercase text-xl text-gray-800">Article</span>
          <span class="block text-lg font-bold">6.8</span>
        </div>
      </div>

      <div class="flex items-center p-8 bg-white shadow rounded-lg">
        <div class="mr-6">
          <PrimaryIconButton
            icon="material-symbols:person-2-outline"
            class="bg-gray-800 w-16 h-16 text-center text-5xl flex justify-center"
          />
        </div>
        <div>
          <span class="block font-bold uppercase text-xl text-gray-800">Users</span>
          <span class="inline-block text-lg font-bold">50</span>
        </div>
      </div>
    </section>
    <!-- Card End -->

    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 pt-2">
      <div
        class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
      >
        <div class="px-6 py-5 text-gray-700 uppercase text-lg font-semibold border-b border-gray-100">
          This Month popular Books
        </div>
        <div class="p-4 flex-grow">
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
                    <PrimaryIconButton icon="material-symbols:info-outline" />
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
                    <PrimaryIconButton icon="material-symbols:info-outline" />
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
                    <PrimaryIconButton icon="material-symbols:info-outline" />
                    <PrimaryIconButton
                      icon="material-symbols:delete-outline"
                      colors="bg-red-700 text-white"
                    />
                  </td>
                </tr><tr class="bg-white border-b hover:bg-gray-50">
                  <td class="px-6 py-4">doe</td>
                  <td class="px-6 py-4">doe</td>
                  <td class="px-6 py-4">doe</td>
                  <td class="px-6 py-4 text-right flex justify-end space-x-1">
                    <!-- Assuming PrimaryIconButton is properly defined -->
                    <PrimaryIconButton icon="material-symbols:info-outline" />
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

      <div class="md:row-span-2 bg-white shadow rounded-lg">
        <div
          class="flex items-center justify-between text-gray-700 uppercase text-lg px-6 py-5 font-semibold border-b border-gray-100"
        >
          <span>Recent Books</span>
        </div>
        <div class="overflow-y-auto" style="max-height: 24rem">
          <ul class="p-6 space-y-6">
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Annette Watson</span>
              <span class="ml-auto font-semibold">9.3</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Calvin Steward</span>
              <span class="ml-auto font-semibold">8.9</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Annette Watson</span>
              <span class="ml-auto font-semibold">9.3</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Calvin Steward</span>
              <span class="ml-auto font-semibold">8.9</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Annette Watson</span>
              <span class="ml-auto font-semibold">9.3</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Calvin Steward</span>
              <span class="ml-auto font-semibold">8.9</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
            <li class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <span class="text-gray-600">Ralph Richards</span>
              <span class="ml-auto font-semibold">8.7</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>