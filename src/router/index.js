import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Image from '../views/Image.vue';
import About from '../views/About.vue';
import Profile from '../views/Profile.vue';

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
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
