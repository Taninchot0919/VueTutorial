<template>
  <div id="header">
    <div class="navbar">
      <router-link to="/SportHome">Sport News</router-link>
      <router-link to="/GameHome">Game News</router-link>
      <router-link to="/ITHome">IT News</router-link>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
.navbar {
  list-style-type: none;
  margin: 0;
  overflow: hidden;
  background-color: lightskyblue;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0;
  z-index: 2;
}

.navbar a {
  float: right;
  display: block;
  text-align: center;
  padding: 13px 14px;
  text-decoration: none;
  margin-right: 1em;
  color: rgb(0, 103, 151);
}

.navbar a:hover {
  background-color: #55acee;
}
</style>