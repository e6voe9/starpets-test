import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/User.vue')
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "notfound" */ '@/views/NotFound.vue'),
  }, {
    path: '*',
    redirect: '/not-found'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
