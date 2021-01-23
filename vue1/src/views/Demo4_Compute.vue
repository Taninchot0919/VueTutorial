<template>
  <div id="Demo4">
    <div id="computed_props">
      <h2>{{ firstname }}</h2>
      <h2>{{ lastname }}</h2>
      <h2>{{ fullname }}</h2>
      <!-- ถ้าเรียกจาก compute จะให้ค่าสุ่มที่เหมือนกัน เหมือนว่า random ครั้งเดียวเลย ต่อให้เรียกใหม่ ก็ได้ค่าเท่าเดิม หรือไม่ก็เรียกครั้งสุดท้ายแล้วเปลี่ยนแปลงหมด-->
      <h1 style="background-color: gray">
        Random from computed property: {{ getrandomno }}
      </h1>
      <h1 style="background-color: gray">
        Random from computed property: {{ getrandomno }}
      </h1>
      <h1 style="background-color: gray">
        Random from computed property: {{ getrandomno }}
      </h1>
      <!-- ถ้าเรียกจะ method เหมือนจะสุ่มทุกครั้งที่มีการเรียกใหม่ -->
      <h1>Random from method: {{ getrandomno1() }}</h1>
      <h1>Random from method: {{ getrandomno1() }}</h1>
      <h1>Random from method: {{ getrandomno1() }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo4",
  methods: {
    getrandomno1: function () {
      return Math.random();
    },
  },
  data() {
    return {
      firstname: "Taninchot",
      lastname: "Phuwaloetthiwat",
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandomno: function () {
      return Math.random();
    },
  },
};
</script>

<style>
</style>