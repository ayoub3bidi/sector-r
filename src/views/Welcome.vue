<template>
  <div class="welcome container">
      <p>Welcome to <span>Sector R</span> live chatroom</p>
      <div v-if="showLogin">
          <h2>Login</h2>
          <LoginForm/>
          <p>No account yet? <span @click="showLogin = false">Signup</span></p>
      </div>
      <div v-else>
          <h2>Signup</h2>
          <SignupForm/>
          <p>Already have an account?<span @click="showLogin = true">Login</span></p>
      </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'

export default {
    components: { SignupForm, LoginForm },
    setup() {
        const showLogin = ref(true)

        return { showLogin }
    }
}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    /* form styles */
    .welcome form {
        width: 300px;
        margin: 20px auto;
    }
    .welcome label {
        display: block;
        margin: 20px 0 10px
    }
    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }
    .welcome span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }
    .welcome button {
        margin: 20px auto;
    }
</style>