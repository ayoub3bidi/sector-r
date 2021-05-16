import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import chatroom from '../views/chatroom.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: chatroom
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
