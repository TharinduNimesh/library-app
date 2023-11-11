<template>
  <NuxtLayout name="app">
    <div class="rounded-lg bg-slate-50 shadow-md">
      <div class="p-5">
        <!-- Modal -->
      </div>
      <div class="overflow-x-auto shadow-md rounded-b-lg">
        <table class="w-full text-md text-left text-gray-500">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50">
            <tr class="bg-white border-b hover:bg-gray-50">
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Book ID</th>
              <th scope="col" class="px-6 py-3">Role</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4 text-right">
                <!-- Assuming PrimaryIconButton is properly defined -->
                <PrimaryIconButton
                  icon="material-symbols-light:edit-square-outline"
                />
              </td>
            </tr>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4">doe</td>
              <td class="px-6 py-4 text-right">
                <!-- Assuming PrimaryIconButton is properly defined -->
                <PrimaryIconButton
                  icon="material-symbols-light:edit-square-outline"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </NuxtLayout>
</template>
  
  <script setup>
useHead({
  title: "Users | Sri Dharmaloka College",
});
</script>
  
  <style>
/* Add your styles here if needed */
</style>
  