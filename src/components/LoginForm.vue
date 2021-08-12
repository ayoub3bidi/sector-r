<template>
        <br>
        <div class="card">
            <div class="card-header">
                <h3 class="display-4 text-center">Login</h3>
            </div>
            <div class="card-body">
                    <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-mail address" v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                    </div>
                    <div v-if="error" class="text-danger">{{ error }}</div>
                    <button style="margin: 25px;" class="btn btn-primary">Login</button>
                    <button style="margin: 25px;" class="btn btn-secondary">Create an account</button>
                </form>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
  setup(props, context) {
      
    const email = ref('')
    const password = ref('')
    const { error, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
      }
    }
    return { email, password, handleSubmit, error }
  }
}
</script>