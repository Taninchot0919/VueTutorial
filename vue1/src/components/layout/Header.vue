<template>
  <div id="header">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/demo1">Demo 1</router-link></li>
      <li><router-link to="/demo2">Demo 2</router-link></li>
      <li><router-link to="/demo3">Demo 3</router-link></li>
      <li><router-link to="/demo4">Demo 4</router-link></li>
      <li><router-link to="/demo5">Demo 5</router-link></li>
      <li><router-link to="/demo6">Demo 6</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline;
  margin-right: 8px;
  margin-left: 10px;
}
</style>