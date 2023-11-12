<template>
  <div
    class="nav flex flex-col absolute lg:static h-screen bg-slate-50 rounded-r-lg shadow-lg duration-300 z-50"
    :class="{
      'nav-hide': !isVisible,
      'nav-show': isVisible,
    }"
  >
    <div class="w-full flex flex-col items-center text-center mt-3">
      <h3 class="text-2xl font-bold text-gray-700">Sri Dharmaloka College</h3>
      <img src="/images/logo.png" alt="Dharmaloka Logo" class="mt-2 max-w-[110px]" />
    </div>

    <div class="flex flex-col gap-2 mt-3 px-2 h-full overflow-y-scroll">
      <AppNavItem
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :icon="item.icon"
        :path="item.path"
      />
    </div>
  </div>
</template>

<script>
import items from "~/assets/data/library-routes.js";

export default {
  data() {
    return {
      items,
    };
  },
  props: ["isVisible"],
};
</script>

<style scoped>
/* Common styles for all screen sizes */
.nav {
  width: 320px;
  transition: margin-left 0.3s ease; /* Added smooth transition */
}

.nav-hide {
  margin-left: -320px;
}

.nav-show {
  margin-left: 0;
}

/* Responsive styles using Tailwind CSS */
/* Mobile styles */
@include screens(md) {
  .nav {
    width: 100%;
  }

  .nav-show,
  .nav-hide {
    margin-left: 0; /* Adjust as needed for your mobile design */
  }
}

/* Tablet and larger screens */
@include screens(lg) {
  .nav {
    width: 320px; /* Adjust as needed for your tablet design */
  }
}
</style>
