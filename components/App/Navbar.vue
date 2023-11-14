<template>
  <div
    class="nav min-h-screen bg-gray-100"
    :class="{
      'nav-hide': !isVisible,
      'nav-show': isVisible,
    }"
  >
    <div class="sidebar min-h-screen overflow-hidden border-r">
      <div class="flex h-screen flex-col justify-between pt-2 pb-0">
        <div>
          <div class="w-full flex flex-col items-center text-center mt-3">
            <img
              src="/images/logo.png"
              alt="Dharmaloka Logo"
              class="w-full max-w-[80px] px-1"
            />
          </div>
          <ul class="mt-6 space-y-2 tracking-wide">
            <AppNavItem
              v-for="item in items"
              :key="item.name"
              :name="item.name"
              :icon="item.icon"
              :path="item.path"
            />
          </ul>
        </div>
      </div>
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
/* Set the width for screens smaller than lg */
@media (max-width: 767px) {
  .nav-show {
    width: 3.5rem;
    transition: width 0.3s ease;
  }

  .w-8 {
    width: 1.5rem;
  }
}

/* Hide the navbar on screens lg and above */
@include screens(lg) {
  .nav {
    width: 0;
  }

  .text-lg {
    font-size: 2rem;
  }

  .w-8 {
    width: 2rem;
  }
}

/* Hide the sidebar by default */
.nav-hide {
  width: 3.5rem;
  transition: width 0.3s ease;
}
</style>
