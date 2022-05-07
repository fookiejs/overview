import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overview from '../views/Overview.vue'
import Model from '../views/Model.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/overview',
    name: 'overview',
    component: Overview,
    children: [{
      path: ':model',
      name: 'model',
      component: Model
    },]
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
