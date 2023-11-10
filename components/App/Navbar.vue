<template>
  <div
    class="nav absolute lg:static h-screen bg-slate-50 rounded-r-lg shadow-lg duration-300 z-50"
    :class="{
      'nav-hide': !isVisible,
      'nav-show': isVisible,
    }"
  ></div>
</template>

<script>
export default {
  props: ["isVisible"],
};
</script>

<style scoped>
.nav {
  width: 320px;
}

.nav-hide {
  margin-left: -320px;
}

.nav-show {
  margin-left: 0;
}

@media (min-width: 1024px) {
  .nav {
    margin-left: 0;
  }
  .nav-hide {
    margin-left: -320px;
  }

  .nav-show {
    margin-left: 0;
  }
}
</style>
