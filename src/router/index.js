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
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/method1',
    name: 'method1',
    component: () => import(/* webpackChunkName: "about" */ '../views/method1/Parent.vue')
  },
  {
    path: '/method2',
    name: 'method2',
    component: () => import(/* webpackChunkName: "about" */ '../views/method2/Parent.vue')
  },
  {
    path: '/method3',
    name: 'method3',
    component: () => import(/* webpackChunkName: "about" */ '../views/method3/Parent.vue')
  },
  {
    path: '/method4',
    name: 'method4',
    component: () => import(/* webpackChunkName: "about" */ '../views/method4/Parent.vue')
  },
  {
    path: '/method5',
    name: 'method5',
    component: () => import(/* webpackChunkName: "about" */ '../views/method5/Parent.vue')
  },
  {
    path: '/method6',
    name: 'method6',
    component: () => import(/* webpackChunkName: "about" */ '../views/method6/Parent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
