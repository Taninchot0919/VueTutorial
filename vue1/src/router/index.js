import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1_Intro.vue'
import Demo2 from '../views/Demo2_EventAndMethod.vue'
import Demo3 from '../views/Demo3_Data.vue'
import Demo4 from '../views/Demo4_Compute.vue'
import Demo5 from '../views/Demo5_Binding.vue'
import Demo6 from '../views/Demo6_Form.vue'
import Demo7 from '../views/Demo7_Slot.vue'
import Demo8 from '../views/Demo8_Condition.vue'
import Demo9 from '../views/Demo9_Loop.vue'
import Demo10 from '../views/Demo10_LifeCycleHooks.vue'
import Demo11 from '../views/Demo11_VariableAndState.vue'
import Demo12 from '../views/Demo12_Reference.vue'
import Demo13 from '../views/Demo13_Filter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Page'
    }
  },
  {
    path: "/demo1",
    name: "demo1",
    component: Demo1,
    meta: {
      title: 'Demo1 V-Models'
    }
  },
  {
    path: "/demo2",
    name: "demo2",
    component: Demo2,
    meta: {
      title: 'Demo 2 Event and Methods'
    }
  },
  {
    path: "/demo3",
    name: "demo3",
    component: Demo3,
    meta: {
      title: 'Demo 3 in Data( )'
    }
  },
  {
    path: "/demo4",
    name: "demo4",
    component: Demo4,
    meta: {
      title: 'Demo 4 Compute in method and property'
    }
  },
  {
    path: "/demo5",
    name: "demo5",
    component: Demo5,
    meta: {
      title: 'Demo5 Binding'
    }
  },
  {
    path: "/demo6",
    name: "demo6",
    component: Demo6,
    meta: {
      title: 'Demo 6 Form'
    }
  },
  {
    path: "/demo7",
    name: "demo7",
    component: Demo7,
    meta: {
      title: 'Demo 7 Slot'
    }
  },
  {
    path: "/demo8",
    name: "demo8",
    component: Demo8,
    meta: {
      title: 'Demo 8 Condition'
    }
  },
  {
    path: "/demo9",
    name: "demo9",
    component: Demo9,
    meta: {
      title: 'Demo 9 Loop'
    }
  },
  {
    path: "/demo10",
    name: "demo10",
    component: Demo10,
    meta: {
      title: 'Demo 10 Life Cycle Hook'
    }
  },
  {
    path: "/demo11",
    name: "demo11",
    component: Demo11,
    meta: {
      title: 'Demo 11 Variable And State'
    }
  },
  {
    path: "/demo12",
    name: "demo12",
    component: Demo12,
    meta: {
      title: 'Demo 12 Reference'
    }
  },
  {
    path: "/demo13",
    name: "demo13",
    component: Demo13,
    meta: {
      title: 'Demo 13 Filter'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//  ตัวจัดการ title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
})

export default router
