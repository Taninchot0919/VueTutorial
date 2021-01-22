<template>
  <div id="Demo7">
    <!-- ใช้ร่วมกับ Clock ใน components/helpers -->
    <Clock>
      <span style="color: red">เวลาปัจจุบัน : </span>
    </Clock>

    <Clock />

    <Clock>
      <span style="color: green">Now : </span>
    </Clock>

    <Clock>
      <span style="color: orange">Now : </span>
      <template v-slot:header>
        <h1>Header</h1>
      </template>
      <template v-slot:footer>
        <h3>Footer</h3>
      </template>
    </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue";
export default {
  name: "Demo7",
  components: {
    Clock,
  },
};
</script>

<style>
</style>