<template>
<Navbar/>
      <router-view/>
</template>
<script>
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
<style>
body {
    background: url('https://static.vecteezy.com/system/resources/previews/000/275/636/original/galaxy-background-vector-illustration.jpg');
    color: #444;
  }
</style>
