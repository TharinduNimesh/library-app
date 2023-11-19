<script setup>
useHead({
  title: "Members | Sri Dharmaloka College",
});

const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function show() {
  isModalVisible.value = true;
  isContainerVisible.value = true;
}

function moreInfo(member) {
  member = toRaw(member);
  info.value.name = member.name;
  info.value.index = member.registration_no || member.nic;
  info.value.mobile = member.mobile;
  info.value.position = member.position;
  info.value.grade = member.grade;
  info.value.class = member.class;
  info.value.role = role[member.position - 1].label;
  info.value.reservations = member.reservations;

  document.getElementById("member_modal").showModal();
}

const info = ref({
  name: "",
  index: "",
  mobile: "",
  position: "",
  grade: "",
  class: "",
  role: "",
  reservations: [],
});

const columns = ["Id", "Name", "Mobile", "Joined At", "Action"];
const TableModal = ["HOLDING", "Reserved At", "due date", "is returned"];
const role = [
  {
    value: 1,
    label: "Student",
  },
  {
    value: 2,
    label: "Teacher",
  },
  {
    value: 3,
    label: "Non-Academic Staff",
  },
];

const {
  pending,
  data: members,
  refresh,
} = useApiFetch("/members", {
  lazy: false,
  watch: false,
});
</script>

<template>
  <NuxtLayout name="app">
    <div class="grid grid-cols-1 space-y-5">
      <div class="rounded-lg bg-slate-50 shadow-md py-5">
        <div class="w-full flex flex-col gap-2">
          <div class="flex justify-between items-center">
            <h2
              class="text-gray-700 sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase px-5"
            >
              MANAGE MEMBERS
            </h2>
            <div class="flex justify-end px-5 gap-2">
              <button
                class="btn bg-gray-300 border-gray-300 text-gray-800 hover:bg-gray-800 hover:text-slate-200"
              >
                <Icon class="text-lg" name="mingcute:upload-2-fill" />
                <span class="hidden sm:inline">Export</span>
              </button>
              <button class="btn text-slate-200" @click="show">
                <Icon class="text-lg" name="mingcute:add-circle-fill" />
                <span class="hidden sm:inline">Add New Record</span>
              </button>
            </div>
          </div>
          <div class="flex items-center my-4 px-5">
            <PrimaryFilter placeholder="EX: JOHN DOE" :reset="refresh" />
          </div>
        </div>
        <div class="overflow-x-auto rounded-b-lg px-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="columns" />
            <tbody>
              <AppTableLoading :count="5" v-if="pending" />
              <AppTableEmpty
                v-if="members?.members.length === 0 && !pending"
                :columns="columns.length"
                message="No Members found !!! 🙄"
              />
              <template v-if="members?.members.length > 0 && !pending">
                <tr
                  v-for="member in members?.members"
                  :key="member.id"
                  class="bg-white border-b hover:bg-gray-50"
                >
                  <td>{{ member.registration_no }}</td>
                  <td>
                    <p>{{ member.name }}</p>
                    <span class="text-sm font-semibold text-gray-500"
                      >Student</span
                    >
                  </td>
                  <td>{{ member.mobile }}</td>
                  <td>
                    {{ new Date(member.joined_at).toISOString().split("T")[0] }}
                  </td>
                  <td>
                    <PrimaryIconButton
                      icon="material-symbols:info-outline"
                      @click="moreInfo(member)"
                    />
                    <!-- The button to open modal -->
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Table Modal Start -->
    <dialog id="member_modal" class="modal">
      <div class="modal-box bg-white w-11/12 max-w-5xl uppercase">
        <h3 class="font-bold text-lg mb-5 uppercase text-gray-700">
          More Informations
        </h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="md:col-span-1 col-span-2">
            <PrimaryDisableInput label="Name" :placeholder="info.name" />
          </div>
          <div class="md:col-span-1 col-span-2">
            <PrimaryDisableInput label="index/nic" :placeholder="info.index" />
          </div>
          <div class="md:col-span-1 col-span-2">
            <PrimaryDisableInput label="mobile" :placeholder="info.mobile" />
          </div>
          <template v-if="info.position">
            <div class="md:col-span-1 col-span-2">
              <PrimaryDisableInput
                label="position"
                :placeholder="role[info.position - 1].label"
              />
            </div>
            <template v-if="info.position === 1 || info.position === 2">
              <div class="md:col-span-1 col-span-2">
                <PrimaryDisableInput label="Grade" :placeholder="info.grade" />
              </div>
              <div class="md:col-span-1 col-span-2">
                <PrimaryDisableInput label="class" :placeholder="info.class" />
              </div>
            </template>
            <div class="col-span-2" v-else-if="info.position === 3">
              <PrimaryDisableInput label="Role" :placeholder="info.role" />
            </div>
          </template>
        </div>
        <div class="overflow-x-auto rounded-b-lg mt-5">
          <table class="w-full text-md text-left text-gray-500 shadow-lg">
            <AppTableHead :columns="TableModal" />
            <tbody>
              <AppTableEmpty
                :columns="TableModal.length"
                v-if="info.reservations.length === 0"
                message="This Member Haven't Any Reservation History !!! 😕"
              />
              <template v-else>
                <tr
                  v-for="reservation in info.reservations"
                  :key="reservation.id"
                  class="bg-white border-b hover:bg-gray-50"
                >
                  <td>
                    <p>
                      {{ reservation.Holding.id }} -
                      {{ reservation.Holding.Issue.title }}
                    </p>
                    <span class="text-sm font-semibold text-gray-500">
                      {{ reservation.Holding.Issue.Author.name }}
                    </span>
                  </td>
                  <td>
                    {{
                      new Date(reservation.reserved_at)
                        .toISOString()
                        .split("T")[0]
                    }}
                  </td>
                  <td>
                    {{
                      new Date(reservation.due_date).toISOString().split("T")[0]
                    }}
                  </td>
                  <td v-if="reservation.is_received" class="text-sm font-semibold text-green-500">
                    Returned
                  </td>
                  <td v-else class="text-sm font-semibold text-red-500">
                    Not Returned
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
    <!-- Table Modal End -->
    <template #RightModal>
      <FormAddUser />
    </template>
  </NuxtLayout>
</template>
