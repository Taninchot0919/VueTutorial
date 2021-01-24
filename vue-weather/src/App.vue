<template>
  <div
    id="app"
    :class="
      typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''
    "
  >
    <main>
      <div class="searchBox">
        <input
          type="text"
          class="search-bar"
          placeholder="Search..."
          v-model="query"
          @keypress="fetchWeather"
        />
      </div>
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{ weather.name }}, {{ weather.sys.country }}
          </div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
          <div class="weatherStatus">{{ weather.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
  <!-- <router-view /> -->
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      weather_api_key: "9fc987675a81fd47cd8b99ab88f4d708",
      url_base: "http://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(event) {
      if (event.key == "Enter") {
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.weather_api_key}`
        )
          .then((res) => {
            return res.json();
          })
          .then(this.setResults);
      }
    },
    setResults(results) {
      this.weather = results;
    },
    dateBuilder() {
      let dObjDate = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      let day = days[dObjDate.getDay()];
      let date = dObjDate.getDate();
      let month = months[dObjDate.getMonth()];
      let year = dObjDate.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    },
  },

  components: {
    Footer,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=K2D:ital,wght@1,800&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "K2D", sans-serif;
}
#app {
  background-image: url("./assets/default-background.jpg");
  background-size: cover;
  /* background-position: bottom; */
  transition: 0.4s;
}

#app.warm {
  background-image: url("./assets/warm-background.jpg");
  /* background-position: bottom; */
}

main {
  min-height: 100vh;
  padding: 25px;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.075),
    rgba(0, 0, 0, 0.548)
  );
}

.searchBox {
  width: 100%;
  margin-bottom: 30px;
}

.searchBox .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  color: black;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0px 20px 0px 20px;
  transition: 0.4s;
}

.searchBox .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: white;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-style: italic;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: white;
  font-size: 102px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weatherStatus {
  color: white;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
