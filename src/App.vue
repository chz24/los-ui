<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="pt-16">
    <navbar v-if="$route.meta.showNavbar"/>
    <router-view />
  </div>
</template>

<style scoped>
</style>