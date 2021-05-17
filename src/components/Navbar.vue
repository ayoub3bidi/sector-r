<template>
  <nav>
      <div>
          <p>Hey there.. disable name here</p>
          <p class="email">Currently logged in as... email</p>
      </div>
      <button>Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'

export default {
    setup() {
        const { logout, error } = useLogout()

        const handleClick = async () => {
            await logout()
            if (!error.value) {
                console.log('user logged out')
            }
        }
    }

}
</script>

<style>

</style>