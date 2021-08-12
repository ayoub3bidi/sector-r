<template>
<nav class="navbar navbar-expand-md bg-light navbar-light">
  <!-- Brand -->
  <a class="navbar-brand display-1" href="#">Sector R</a>

  <!-- Toggler/collapsibe Button -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
</nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()
    const handleClick = async () => {
      await logout()
    }
    return { handleClick, user }
  }
}
</script>