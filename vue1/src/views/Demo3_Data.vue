<template>
  <div id="Demo3">
    <h1>Data</h1>
    <button
      @click="
        count++;
        isLogged = true;
      "
    >
      count++
    </button>
    <span>{{ count }}</span>
    <div>{{ message }}</div>
    <div>Boolean : {{ isLogged }}</div>
    <input type="text" placeholder="Enter your message" v-model="message" />
    <h2 v-if="isLogged">Yahoo</h2>
    <div>{{ account }} {{ account.username }} {{ account.password }}</div>
    <div>{{ courses }}</div>
    <div>{{ courses[0] }}</div>
    <ul>
      <li class="content" v-for="(item, index) in courses" :key="index">{{ item }}</li>
    </ul>

    <span class="title">Title in Demo3</span>
  </div>
</template>

<script>
export default {
  name: "demo3",
  mounted() {
    this.message = "Welcome To Taninchot Demo3";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      account: {
        username: "admin",
        password: "password",
      },
      courses: ["Angular", "VueJs", "React", "JavaScript"],
    };
  },
};
</script>

<style scoped>
.title{
    color: red;
}
</style>

