<template>
  <div id="Demo6">
    <form @submit.prevent="submit">
      <!-- Div FirstName -->
      <div>
        <label for="firstname">Firstname</label>
        <input
          type="text"
          name="firstname"
          v-model.trim="applicant.firstname"
        />
      </div>
      <!-- Div LastName -->
      <div>
        <label for="lastname">Lastname</label>
        <input type="text" name="lastname" v-model.trim="applicant.lastname" />
      </div>
      <!-- Div Sex -->
      <div>
        <label for="sex">Male</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">Female</label>
        <input
          type="radio  "
          name="sex"
          value="female"
          v-model="applicant.sex"
        />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" v-model.number="applicant.age" />
      </div>
      <!-- Div Course -->
      <div>
        <select name="courese" v-model="applicant.course">
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vuejs">Vue</option>
        </select>
      </div>
      <button type="submit">Submit</button>
      <!-- ด้านล่างเป็นเหมือนการโชว์ click ว่าให้ทำอะไร click.alt คือ กด alt ค้างแล้วค่อยคลิก ส่วน click.exact มีไว้เพื่อให้กด click เฉยๆ และเพื่อไม่ให้โค้ด Error -->
      <button type="button" @click.exact="clear" @click.alt="wowza">
        Clear
      </button>
    </form>
    <div style="margin-top: 16px; color: red">
      #SPY {{ JSON.stringify(applicant) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo6",
  data() {
    return {
      applicant: {
        firstname: "",
        lastname: "",
        sex: "male",
        age: 0,
        course: "vue",
      },
    };
  },
  methods: {
    wowza() {
      alert("WowZa");
    },
    submit() {
      // ถ้าใน form ไม่ใส่ prevent เราสามารถรับ event เข้ามาและจัดการกับ event ตรงนี้ได้
      // event.preventDefault();
      alert(JSON.stringify(this.applicant));
    },
    clear() {
      this.applicant = {
        firstname: "",
        lastname: "",
        sex: "male",
        age: 0,
        course: "vue",
      };
    },
  },
};
</script>

<style>
</style>