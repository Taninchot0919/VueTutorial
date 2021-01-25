<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-image: url("./assets/background.jpg");
}
</style>
