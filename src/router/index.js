import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import chatroom from '../views/chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user){
    next({name: 'welcome'})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/chatroom',
    name: 'chatroom',
    component: chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
