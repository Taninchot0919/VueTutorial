<template>
  <div id="Demo1">
    <h1>Demo1 : v-models</h1>
    <input v-model="message" type="text" placeholder="Enter Your Message" />
    <div>{{ message }}</div>
    <button @click="message = ''">Reset</button>

  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style>
</style>