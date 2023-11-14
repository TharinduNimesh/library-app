<template>
  <div
    class="nav min-h-screen bg-slate-50"
    :class="{ 'nav-hide': !isVisible, 'nav-show': isVisible }"
  >
    <div class="sidebar min-h-screen overflow-hidden border-r">
      <div class="flex h-screen flex-col justify-between pt-2 pb-0">
        <div class="w-full flex flex-col items-center text-center my-3">
          <img
            src="/images/logo.png"
            alt="Dharmaloka Logo"
            class="w-full p-1 max-w-[100px]"
          />
        </div>
        <ul class="mb-64 space-y-2 tracking-wide">
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
</template>

<script setup>
import items from "~/assets/data/library-routes.js";

const isVisible = useNavbarVisible();

</script>

<style scoped>
/* Responsive styling */
@media (max-width: 767px) {
  .nav-show,
  .nav-hide {
    width: 3.5rem;
    transition: width 0.3s ease;
  }

  .w-8 {
    width: 1.5rem;
  }
}

/* Larger screens styling */
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

/* Default styling */
.nav-hide {
  width: 3.5rem;
}

.text-lg.lg\\:text-2xl {
  font-size: 2rem;
}
</style>
