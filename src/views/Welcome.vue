<template>
      <div class="container">
        <div class="row">
          <div v-if="showLogin">
            <LoginForm @login="enterChat" />
          </div>
         <div v-else>
          <SignupForm @signup="enterChat" />
        </div>
        </div>
      </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()
    
    const enterChat = () => {
      router.push({ name: 'Chatroom' })
    }
    return { showLogin, enterChat }
  }
}
</script>