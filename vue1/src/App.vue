<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer title="Coding by : Taninchot Phuwaloetthiwat" color="gray" />
  </div>
</template>

<script>
// จะใส่สกุล .vue หรือไม่ใส่ก็ได้
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
</style>