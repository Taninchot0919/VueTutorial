<template>
  <div id="Demo9">
    <ul>
      <li v-for="(item, index) in ['Angular', 'React', 'VueJs']" :key="index">
        {{ item }}
      </li>
    </ul>

    <hr />

    <ul>
      <li v-for="(item, index) in dataArray" :key="index">
        Item : {{ item.title }} , Price : {{ item.price }}
      </li>
    </ul>

    <hr />

    <!-- Destructuring เหมือนเป็นการถอด type กลางอากาศ -->
    <ul>
      <!-- เหมือนว่าเรารู้อยู่แล้วว่ามี title กับ price แน่ๆ ก็เอามาใส่แทนที่ของ item เลย -->
      <li v-for="({ title, price }, index) in dataArray" :key="index">
        Item : {{ title }} , Price : {{ price }}
      </li>
    </ul>

    <hr />

    <input
      type="text"
      placeholder="Course Title"
      v-model="course.title"
    /><br />
    <input
      type="number"
      placeholder="Course Price"
      v-model="course.price"
    /><br />
    <button @click="addCourse">Submit</button>
    <!-- Dynamic -->
    <ul>
      <li v-for="(course, index) in dataCourse" :key="index">
        Item : {{ course.title }} , Price : {{ course.price }}
        <button @click="deleteCourse(index)">Delete Course</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo9",
  methods: {
    addCourse() {
      this.dataCourse.push(this.course);
      this.course = { title: "", price: 0 };
    },
    deleteCourse(index) {
      this.dataCourse.splice(index, 1);
    },
  },
  data() {
    return {
      course: { title: "", price: 0 },
      dataArray: [
        { title: "IOS", price: 11 },
        { title: "Android", price: 12 },
        { title: "Window", price: 13 },
        { title: "Mac", price: 14 },
      ],
      dataCourse: [],
    };
  },
};
</script>

<style>
</style>