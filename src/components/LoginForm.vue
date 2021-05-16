<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Email Address" v-model="email">
      <input type="text" required placeholder="Password" v-model="password">
      <div class="error">{{ error }}</div>
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup() {
        // refs
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                console.log('user logged in')
            }
        }

        return { email, password, handleSubmit, error  }
    }

}
</script>

<style>

</style>