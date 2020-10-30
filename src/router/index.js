import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Image from '../views/Image.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image/:id',
    name: 'image',
    component: Image,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
