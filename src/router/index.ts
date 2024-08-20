import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import ChatCategories from '@/views/ChatCategories.vue'
import ChatRoom from '@/views/ChatRoom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat-categories',
      name: 'ChatCategories',
      component: ChatCategories,
    },
    {
      path: '/chat-room',
      name: 'ChatRoom',
      component: ChatRoom,
    },
  ]
})

export default router
