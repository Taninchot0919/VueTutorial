<template>
  <div id="Demo2">
    <h1>Event and Method</h1>
    <button v-on:click="clickMe">Click</button>
    <button v-on:click="clickMe2('Welcome to VueJS')">Click2</button>
    <button @click="clickMe2('Welcome to Function ClickMe3')">Click3</button>
    <h3>{{ getTimestamp() }}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      console.log("initial");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    getTimestamp() {
      return Date();
    },
  },
};
</script>

<style>
</style>