<template>
  <form @submit.prevent="handleSubmit">
      <input type="text" required placeholder="Email Address" v-model="email">
      <input type="text" required placeholder="Password" v-model="password">
      <button>Log in</button>
  </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        // refs
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(email.value, password.value)
        }

        return { email, password, handleSubmit }
    }

}
</script>

<style>

</style>