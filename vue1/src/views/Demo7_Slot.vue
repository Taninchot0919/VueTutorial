<template>
  <div id="Demo7">
      <!-- ใช้ร่วมกับ Clock ใน components/helpers -->
    <Clock>
      <span style="color:red">เวลาปัจจุบัน : </span>
    </Clock>

    <Clock/>

    <Clock>
      <span style="color:green">Now : </span>
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