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
export default {
    setup() {
        // refs
        const userName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = () => {
            console.log(userName.value, email.value, password.value)
        }

        return { userName, email, password, handleSubmit }
    }

}
</script>

<style>

</style>