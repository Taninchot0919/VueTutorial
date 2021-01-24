<template>
  <div id="app">
    <Weather />
  </div>
  <!-- <router-view /> -->
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Weather from "@/components/Weather.vue";

export default {
  name: "app",
  components: {
    Footer,
    Weather,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=K2D:ital,wght@1,800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "K2D", sans-serif;
}
</style>
