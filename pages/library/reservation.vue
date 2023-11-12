<script setup>
useHead({
    title: 'Reservation | Sri Dharmaloka College',
});
</script>

<template>
    <NuxtLayout name="app">
        <div class="rounded-lg bg-slate-50 p-5 shadow-md">
            <!-- Code Here -->
        
        <div
          class=" p-5 flex justify-end">
          <button class="btn btn-neutral"><Icon class="text-lg" name="mingcute:add-circle-fill"/><span>Add Records</span></button>
            
          
        </div> 
        
        <!-- Table Start -->
        <div class="overflow-x-auto rounded-b-lg">
          <table class="w-full text-md text-left text-gray-500">
            <thead class="text-sm text-gray-700 uppercase bg-gray-50">
              <tr class="bg-white border-b hover:bg-gray-50">
                <th scope="col" class="px-6 py-3">Book Name</th>
                <th scope="col" class="px-6 py-3">Reserver</th>
                <th scope="col" class="px-6 py-3">Reserve Date</th>
                <th scope="col" class="px-6 py-3">Due Date</th>
                <th scope="col" class="px-6 py-3">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4 text-right flex justifify-center space-x-1">
                    <PrimaryIconButton
                    icon="material-symbols:info-outline"
                  />
                </td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4">doe</td>
                <td class="px-6 py-4 text-right flex justifify-center space-x-1">
                    <PrimaryIconButton
                    icon="material-symbols:info-outline"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Table End -->


        </div>
    </NuxtLayout>
</template>