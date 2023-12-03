<script setup>
useHead({
  title: "Dashboard | Sri Dharmaloka College",
});

const { pending, data } = useApiFetch("/dashboard", {
  lazy: false,
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
          <div v-if="pending" class="loading-container animate-pulse">
            <div class="main"></div>
            <div class="sub"></div>
          </div>
          <div v-else>
            <span class="block font-bold uppercase text-xl text-gray-800"
              >Books Count</span
            >
            <span class="block text-lg font-bold">{{ data.all }}</span>
          </div>
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
          <div v-if="pending" class="loading-container animate-pulse">
            <div class="main"></div>
            <div class="sub"></div>
          </div>
          <div v-else>
            <span class="block font-bold uppercase text-xl text-gray-800"
              >Available</span
            >
            <span class="block text-lg font-bold">{{ data.available }}</span>
          </div>
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
          <div v-if="pending" class="loading-container animate-pulse">
            <div class="main"></div>
            <div class="sub"></div>
          </div>
          <div v-else>
            <span class="block font-bold uppercase text-xl text-gray-800"
              >Removed</span
            >
            <span class="inline-block text-lg font-bold">{{
              data.removed
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Card End -->

    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 pt-2">
      <div
        class="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg"
      >
        <div
          class="px-6 py-5 text-gray-700 uppercase text-lg font-semibold border-b border-gray-100"
        >
          This Month popular Books
        </div>
        <div class="p-4 flex-grow">
          <!-- Table Start -->
          <div class="overflow-x-auto rounded-b-lg">
            <table class="w-full text-md text-left text-gray-500 shadow-lg">
              <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                <tr class="bg-white border-b hover:bg-gray-50">
                  <th scope="col" class="px-6 py-3">Book</th>
                  <th scope="col" class="px-6 py-3">Copies</th>
                  <th scope="col" class="px-6 py-3">Reservation COunt</th>
                </tr>
              </thead>
              <tbody>
                <AppTableLoading v-if="pending" count="3" />
                <AppTableEmpty
                  v-else-if="data.popular.length == 0"
                  columns="3"
                />
                <tr v-else v-for="popular in data.popular" :key="popular.title" class="bg-white border-b hover:bg-gray-50">
                  <td class="px-6 py-4">
                    <div class="flex flex-col">
                      <span class="text-gray-800">{{ popular.title }}</span>
                      <span class="text-gray-500">{{ popular.author }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-4">Copied - {{ popular.copies }}</td>
                  <td class="px-6 py-4">{{ popular.count }} Reservations</td>
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
          <span>Recent Reservation</span>
        </div>
        <div class="overflow-y-auto" style="max-height: 24rem">
          <ul class="p-6 space-y-6" v-if="pending">
            <li v-for="count in 20" :key="count" class="flex items-center">
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <div class="loading-container">
                <div class="main"></div>
                <div class="sub"></div>
              </div>
            </li>
          </ul>
          <ul v-else class="p-6 space-y-6">
            <div
              v-if="data.reservations?.length == 0"
              class="w-full text-center"
            >
              <span class="text-gray-500 text-sm font-semibold"
                >No Any Reservations Available 😯</span
              >
            </div>
            <li
              v-for="reservation in data.reservations"
              v-else
              :key="reservation.id"
              class="flex items-center"
            >
              <div
                class="h-3 w-3 mr-3 bg-green-600 rounded-full overflow-hidden"
              ></div>
              <div class="flex flex-col">
                <span class="text-gray-800">{{
                  reservation.Holding.Issue.title
                }}</span>
                <span class="text-gray-500">{{
                  reservation.Holding.Issue.Author.name
                }}</span>
              </div>
              <span class="ml-auto font-semibold text-gray-500">{{
                reservation.Holding.serial_no
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>

<style scoped>
.loading-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.loading-container .main {
  width: 80%;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: #e6e6e6;
  margin-bottom: 0.5rem;
}
.loading-container .sub {
  width: 60%;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: #e6e6e6;
}
</style>
