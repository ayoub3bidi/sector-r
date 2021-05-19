<template>
  <div class="container">
    <Navbar />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import Navbar from '../components/Navbar'
import getUser from '../composables/getUser'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser()
    const router = useRouter

    watch(user, () => {
      if (!user.value){
        router.push({ name: 'welcome' })
      }
    })
  }
}
</script>

<style>
 nav {
   padding: 20px;
   border-bottom: 1px solid #eee;
   display: flex;
   justify-content: space-between;
   align-items: center;
 }
 nav p {
   margin: 2px auto;
   font-size: 16px;
   color: #444;
 }
 nav p.email {
   font-size: 14px;
   color: #999;
 }
</style>