<template>
  <div
    class="w-screen h-screen absolute bg-[#212a3883] z-50 backdrop-blur-sm duration-300 overflow-x-hidden"
    :class="{
      'opacity-0': !isModalVisible,
      'opacity-100': isModalVisible,
      invisible: !isContainerVisible,
    }"
    @click="hide"
  >
    <div
      class="w-full flex flex-col max-w-[400px] h-full overflow-scroll absolute bg-slate-50 rounded-l-lg"
      :class="{
        'modal-hide': !isModalVisible,
        'modal-show': isModalVisible,
      }"
      @click.stop
    >
      <div class="w-full h-full">
        <div class="w-full p-5 flex justify-between items-center text-gray-700">
          <h3 class="text-2xl font-bold uppercase">Add New Record</h3>
          <div
            class="w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center cursor-pointer hover:bg-slate-200 hover:text-black duration-300"
            @click="hide"
          >
            <Icon
              name="material-symbols-light:close-rounded"
              class="text-3xl"
            />
          </div>
        </div>
        <div class="px-3">
          <hr class="divide-y divide-blue-200" />
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
const isModalVisible = useRightModalVisible();
const isContainerVisible = useRightModalContainerVisible();

function hide() {
  isModalVisible.value = false;
  setTimeout(() => {
    isContainerVisible.value = false;
  }, 400);
}

function show() {
  isContainerVisible.value = true;
  isModalVisible.value = true;
}
</script>

<style scoped>
.modal-hide {
  right: -400px;
}

.modal-show {
  right: 0;
}
</style>
