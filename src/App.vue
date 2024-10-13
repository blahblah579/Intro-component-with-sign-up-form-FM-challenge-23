<template>
  <v-app>
    <v-main
      class="main d-flex align-sm-center"
      :style="{
        backgroundImage: isScreenLarge
          ? 'url(/src/assets/bg-intro-desktop.png)'
          : 'url(/src/assets/bg-intro-mobile.png)',
      }"
    >
      <HomePage />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import HomePage from "./components/HomePage.vue";

const store = useStore();

const updateScreenSize = () => {
  store.dispatch("updateScreenSize");
};

onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
  updateScreenSize(); // Initial screen size check
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateScreenSize);
});

const isScreenLarge = computed(() => store.state.isScreenLarge);
</script>

<style>
.main {
  background-color: #ff7978;
  background-size: cover; /* Ensures the background image covers the entire area */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  height: 100%; /* Sets the height of the main area */
}
</style>
