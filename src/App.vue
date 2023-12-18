<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<script>
export default {
  computed: {
    navbarSize() {
      return this.$route.meta.showNavbar ? 'pt-16' : ''
    },
    paddingContentSize() {
      return this.$route.meta.showNavbar ? 'px-16 py-16' : ''
    }
  }
}
</script>

<template>
  <div :class="navbarSize">
    <navbar v-if="$route.meta.showNavbar"/>
  </div>
  <div :class="paddingContentSize">
    <router-view />
  </div>
</template>

<style scoped>
</style>