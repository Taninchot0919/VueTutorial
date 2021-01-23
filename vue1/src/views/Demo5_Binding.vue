<template>
  <div id="Demo5">
    <!-- เหมือนเป็นการเรียกใช้ค่าจากด้านล่างมาใส่แทน -->
    <img v-bind:src="imageURL" v-bind:height="height" />
    <br />
    <a v-bind:href="link">Google with Full Form</a>
    <br />
    <a :href="link">Google Short Form</a>

    <!-- สามารถใส่หลาย Class ลงไปได้  -->
    <div :class="[false ? error : '', important]">Error</div>
    <div :style="{ color, fontSize }">Binding Style</div>
    <div :style="isActive ? styleObj : ''">Binding with Object Style</div>
    <button @click="isActive = !isActive">Toggle Color</button>
  </div>
</template>

<script>
export default {
  name: "Demo5",
  data() {
    return {
      imageURL:
        "https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg",
      height: 50,
      link: "https://www.google.com",
      error: "errorClass",
      important: "important",
      color: "green",
      fontSize: "30px",
      styleObj: {
        backgroundColor: "blue",
        color: "white",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.errorClass {
  background-color: red;
  color: white;
}

.important {
  font-weight: 900;
}
</style>