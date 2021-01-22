<template>
  <div id="Demo10">
    <!-- https://vuejs.org/images/lifecycle.png -->
    <h1>Lifecycle Hooks</h1>
    <span>{{ counter }}</span>
    <br />
    <button @click="add">Change</button>
  </div>
</template>

<script>
export default {
  name: "Demo10",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
    },
  },
  beforeCreate() {
    console.log("Before Create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before Mounted");
  },
  mounted() {
    this.counter = 5;
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before Update");
  },
  updated() {
    if (this.counter == 10) {
      this.counter = 0;
    }
    console.log("Update");
  },
  beforeDestroy() {
    console.log("Before Destroy");
  },
  destroyed() {
    console.log("Destroyed");
  },
};
</script>

<style>
</style>