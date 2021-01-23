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
      <li><router-link to="/demo7">Demo 7</router-link></li>
      <li><router-link to="/demo8">Demo 8</router-link></li>
      <li><router-link to="/demo9">Demo 9</router-link></li>
      <li><router-link to="/demo10">Demo 10</router-link></li>
      <li><router-link to="/demo11">Demo 11</router-link></li>
      <li><router-link to="/demo12">Demo 12</router-link></li>
      <li><router-link to="/demo13">Demo 13</router-link></li>
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
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #5c9bb8;
}

li {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li:hover {
  background-color: #3d8baf;
}
li a:hover {
  color: white;
}
a {
  text-decoration: none;
}
a:visited {
  color: pink;
}
</style>