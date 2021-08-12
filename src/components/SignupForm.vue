<template>
        <br>
        <div class="card">
            <div class="card-header">
                <h3 class="display-4 text-center">Sign up</h3>
            </div>
            <div class="card-body">
                    <form @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Display name" v-model="displayName">
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="E-mail address" v-model="email">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" v-model="password">
                    </div>
                    <div v-if="error" class="text-danger">{{ error }}</div>
                    <button class="btn btn-primary">Sign up</button>
                </form>
            </div>
        </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const displayName = ref('')
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {

    } 

    return { displayName, email, password, handleSubmit }
  }
}
</script>