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
                    onclick="my_modal_1.showModal()"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_2.showModal()"
                  />
                  <PrimaryIconButton
                    icon="ic:baseline-block"
                    colors="bg-red-700 text-white"
                    onclick="my_modal_3.showModal()"
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
                    onclick="my_modal_1.showModal()"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_2.showModal()"
                  />
                  <PrimaryIconButton
                    icon="ic:baseline-block"
                    colors="bg-red-700 text-white"
                    onclick="my_modal_3.showModal()"
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
                    onclick="my_modal_1.showModal()"
                  />
                  <PrimaryIconButton
                    icon="material-symbols:info-outline"
                    onclick="my_modal_2.showModal()"
                  />
                  <PrimaryIconButton
                    icon="ic:baseline-block"
                    colors="bg-red-700 text-white"
                    onclick="my_modal_3.showModal()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Table End -->
      </div>
    </div>

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

    <dialog id="my_modal_2" class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl uppercase">
        <h3 class="font-bold text-lg mb-5">Info !</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput label="Title" placeholder="Book Title Here" />
          </div>
          <div class="col-span-2 sm:col-span-1">
            <PrimaryDisableInput
              label="Author"
              placeholder="Author Name Here"
            />
          </div>
          <div class="col-span-2 sm:col-span-2">
            <PrimaryDisableInput label="Copies" placeholder="Copies Here" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg mt-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="TableModal" />
            <tbody>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
              </tr>
              <tr class="bg-white border-b hover:bg-gray-50">
                <td>doe</td>
                <td>doe</td>
                <td>doe</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>

    <dialog id="my_modal_3" class="modal">
      <div class="modal-box bg-white uppercase">
        <h3 class="font-bold text-lg mb-5">Block !</h3>
        <div class="grid">
          <p class="text-center">Dou you want to Block this</p>
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
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Overdue | Sri Dharmaloka College",
});
const Headtitle = ["Book id", "title", "reserver", "due date", "Action"];
const TableModal = ["Serial no", "Reserved", "status"];
</script>