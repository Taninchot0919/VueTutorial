<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h3>
      แก้ไขได้ title ด้วยการเข้าไปที่ router/index.js เพิ่ม meta : { title : ' '
      } เข้าไปยัง router แต่ละตัว และสร้างตัวจัดการ title มารองรับ
    </h3>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
h3 {
  margin: 0 0;
  text-align: center;

}
</style>