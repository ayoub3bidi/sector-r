<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Username" v-model="userName">
      <input type="text" required placeholder="Email Address" v-model="email">
      <input type="text" required placeholder="Password" v-model="password">
      <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup() {
        const { error, signup } = useSignup()

        // refs
        const userName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, userName.value)
            console.log('user signed up')
        }
        return { userName, email, password, handleSubmit }
    }

}
</script>

<style>

</style>