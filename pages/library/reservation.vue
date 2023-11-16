<script setup>
useHead({
  title: "Reservation | Sri Dharmaloka College",
});
const Headtitle = ["Holding", "Reserver", "Reserve Date", "Due Date", "Info"];

const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function show() {
  isModalVisible.value = true;
  isContainerVisible.value = true;
}

const { pending: isLoading, data: reservations } = useApiFetch("/reservation", {
  lazy: false,
  watch: false,
});
</script>

<template>
  <NuxtLayout name="app">
    <div class="grid grid-cols-1 space-y-5">
      <div class="rounded-lg shadow-sm bg-slate-50 py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2
              class="text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
            >
              manage reservation
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button class="btn text-slate-200" @click="show">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span class="hidden sm:inline">Add New Record</span>
              </button>
            </div>
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: sherlock holmes" />
          </div>
        </div>

        <!-- Table Start -->
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="Headtitle" />
            <tbody>
              <AppTableLoading count="5" v-if="isLoading" />
              <AppTableEmpty
                v-else-if="!isLoading && reservations.length === 0"
                columns="5"
                message="There Is No Any Reservations 😊"
              />
              <tr
                v-for="reservation in reservations?.reservations"
                :key="reservation.id"
                class="bg-white border-b hover:bg-gray-50"
              >
                <td>
                  <p>
                    {{ reservation.Holding.serial_no }} -
                    {{ reservation.Holding.Issue.title }}
                  </p>
                  <span class="text-sm font-semibold text-gray-500">
                    {{ reservation.Holding.Issue.Author.name }}
                  </span>
                </td>
                <td>Tharindu Nimesh</td>
                <td>
                  {{
                    new Date(reservation.reserved_at)
                      .toISOString()
                      .split("T")[0]
                  }}
                </td>
                <td>
                  {{
                    new Date(reservation.due_date)
                      .toISOString()
                      .split("T")[0]
                  }}
                </td>
                <td>
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_1.showModal()"
                  />
                  <!-- The button to open modal -->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Table End -->

      <!-- Modal Start -->
      <!-- Open the modal using ID.showModal() method -->
      <dialog id="my_modal_1" class="modal">
        <div class="modal-box bg-white uppercase">
          <h3 class="font-bold text-lg mb-5">Hello !</h3>
          <div class="grid">
            <p class="text-center">Dou you want to mark this</p>
          </div>
          <div class="modal-action">
            <form method="dialog" class="pt-10">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn mr-2">Yes</button>
              <button
                class="btn btn-neutral bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
              >
                No
              </button>
            </form>
          </div>
        </div>
      </dialog>
      <!-- Modal End -->
    </div>
    <template #RightModal>
      <FormAddReservation />
    </template>
  </NuxtLayout>
</template>
