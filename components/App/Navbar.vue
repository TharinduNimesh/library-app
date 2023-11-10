<template>
  <div
    class="nav flex flex-col absolute lg:static h-screen bg-slate-50 rounded-r-lg shadow-lg duration-300 z-50"
    :class="{
      'nav-hide': !isVisible,
      'nav-show': isVisible,
    }"
  >
    <div class="w-full flex flex-col items-center text-center mt-3">
      <h3 class="text-3xl font-bold text-gray-700">Sri Dharmaloka College</h3>
      <img src="/images/logo.png" alt="Dharmaloka Logo" class="mt-2" />
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
}

.nav-hide {
  margin-left: -320px;
}

.nav-show {
  margin-left: 0;
}

/* Responsive styles for screens larger than 1024px */
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

/* Responsive styles for screens smaller than 640px (mobile) */
@media (max-width: 639px) {
  .nav {
    width: 100%; /* Full width on smaller screens */
    margin-left: 0 !important; 
  }

  .nav-hide {
    margin-left: 0 !important; 
  }

  .nav-show {
    margin-left: 0 !important; 
  }
}
</style>
