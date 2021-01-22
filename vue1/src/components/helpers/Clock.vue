<template>
  <!-- หากเราใส่ <slot> เวลาเราพิมพ์อะไรจาก Demo7 จะมีการใส่เข้าไปใน slot หรือหากไม่ใส่เลยจะมี Default เข้ามาอยู่แทน -->
  <div id="clock">
    <slot name="header"></slot>
    <slot>Default : </slot>{{ time }}
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: "Clock",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = Date();
    }, 1000);
  },
};
</script>

<style>
</style>