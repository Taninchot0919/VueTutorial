<template>
  <div id="Demo13">
    <h2>{{ 1234 | currency("THB") }}</h2>
    <h2>{{ 20000000000 | bytes }}</h2>
    <h2>{{ "taninchot" | capitalize({ onlyFirstLetter: true }) }}</h2>
    <h2>{{ [1, 2, 3, 4] | reverseArray }}</h2>
  </div>
</template>

<script>
export default {
  name: "Demo13",
//   ถ้าทำ Filter เองตรงนี้เรียกว่า Local Filter
  filters: {
    reverseArray(value) {
      return value.slice().reverse();   
    },
  },
};
</script>

<style>
</style>