<template>
    <div
      ref="rightmodal"
      class="w-screen h-screen absolute bg-[#212a3883] z-50 backdrop-blur-sm duration-300"
      :class="{
        'opacity-0': !isModalVisible,
        'opacity-100': isModalVisible,
        'hidden': !isContainerVisible,
      }"
      @click="hide"
    >
      <div
        class="w-full max-w-[400px] h-full absolute bg-slate-50 rounded-l-lg"
        :class="{
          'modal-hide': !isModalVisible,
          'modal-show': isModalVisible,
        }"
      ></div>
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
    // isModalVisible.value = true;
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
  