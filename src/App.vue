<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<script>
export default {
  computed: {
    navbarSize() {
      return this.$route.meta.showNavbar ? 'pt-16' : ''
    }
  }
}
</script>

<template>
  <div :class="navbarSize">
    <navbar v-if="$route.meta.showNavbar"/>
    <router-view />
  </div>
</template>

<style scoped>
</style>