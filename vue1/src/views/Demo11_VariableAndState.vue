<template>
  <div id="Demo11">
    <!-- พอ count มีการเปลี่ยนแปลง template จะถูกเรนเดอร์ใหม่ทั้งหมด -->
    <div>{{ count }}</div>
    <div>{{ Math.random() }}</div>
    <div>{{ timeStamp }}</div>
    <button @click="timeStamp = Date.now()">Update TimeStamp</button>
    <!-- ที่ timeStamp ไม่อัพเดท เพราะว่าเป็น variable อยู่ใน create() ไม่ใช่เป็น state อยู่ใน data ทำให้ console log มาค่าก็เปลี่ยนแต่หน้าเว็บไม่เปลี่ยน -->
    <button @click="count++">Update Count</button>
    <!-- จะอัพเดททั้ง <template> เพราะว่า count นั้นเป็น state อยู่ใน data -->
  </div>
</template>

<script>
export default {
  name: "Demo11",
  created() {
    this.timeStamp = 0; //ถ้าตัวแปรตรงนี้เปลี่ยน จะไม่เรนเดอร์ใน template ใหม่
    // ถ้าอยากจะเก็บค่าอะไรสักอย่าง แต่ไม่ต้องการแสดง สร้างตัวแปรมาเก็บในนี้ดีกว่าเพื่อ Performance ที่ดีกว่า
  },
  mounted() {
    setInterval(() => {
      //   this.count++;
      console.log("Timestamp : " + this.timeStamp);
    }, 1000);
  },
  data() {
    return {
      count: 0, //This is State (Local State)
    };
  },
};
</script>

<style>
</style>