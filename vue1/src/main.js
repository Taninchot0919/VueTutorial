import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Adding Vue2Filter cmDev #33 Filter
// Before Add use npm install vue2-filters
// ถ้าทำตรงนี้เรียกว่า Global Filter
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
