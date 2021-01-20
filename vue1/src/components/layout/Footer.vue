<template>
  <div id="footer" class="footer">
    <h3 :style="{color}">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["title", "color"],
};
</script>

<style scoped>
.footer {
  color: black;
  font-size: 80%;
  padding-top: 16px;
}
</style>