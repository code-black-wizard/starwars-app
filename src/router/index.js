import Vue from 'vue'
import VueRouter from 'vue-router'
import Items from '../views/Items'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Items',
    component: Items
  }
]

const router = new VueRouter({
  routes
})

export default router
