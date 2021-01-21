<template>
  <div id="app">
    <Header />
    <Content />
    <Footer
      @onClock="onClock"
      title="Coding by : Taninchot Phuwaloetthiwat"
      color="gray"
    />
    <div class="clock">{{ time }}</div>
  </div>
</template>

<script>
// จะใส่สกุล .vue หรือไม่ใส่ก็ได้
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/Content.vue";

export default {
  name: "app",
  methods: {
    onClock(value) {
      this.time = value;
    },
  },
  data() {
    return {
      time: "",
    };
  },
  components: {
    Header,
    Footer,
    Content,
  },
};
</script>

<style scoped>
.clock {
  font-size: 12px;
}
</style>