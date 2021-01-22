<template>
  <div id="Demo8">
    <!-- ถ้าเป็นจริงข้อไหน ก็จะรันข้อนั้น -->
    <div v-if="type === `A`">The Data is A</div>
    <div v-if="type === `B`">The Data is B</div>
    <div v-if="type === `C`">The Data is C</div>
    <div v-else>Not A/B/C</div>

    <div v-if="isShow">isShow = True</div>
    <div v-else>isShow = False</div>
    <!-- หากใช้ v-show จะคล้ายๆ v-if แต่แค่มองไม่เห็น หากดูใน console ก็ยังเห็นอยู่ แต่จะมีคล้ายๆกับ style Display = none ไว้เลยมองไม่เห็น -->
    <div v-show="isShow">Blink V-Show</div>

  </div>
</template>

<script>
export default {
  name: "Demo8",
  mounted() {
    setInterval(() => {
      this.isShow = !this.isShow;
    }, 1000);
  },
  data() {
    return {
      type: "C",
      isShow: true,
    };
  },
};
</script>

<style>
</style>