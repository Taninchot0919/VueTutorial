<template>
  <div id="Demo12">
    <!-- Using Dom -->
    <h1 ref="title">Waiting for change by Referencre</h1>
    <input type="text" ref="input1" placeholder="This input will focus" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$refs["title"].innerHTML = "Title change";
    this.$refs["input1"].focus();
    this.$refs["input1"].value = "This box using Reference";
  },
};
</script>

<style>
</style>