import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/views/LandingView.vue";
import { useStorageStore } from '@/stores/storage.js'
import DashboardView from "@/views/DashboardView.vue";
import ReportView from "@/views/ReportView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import {storeToRefs} from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
      meta: {
        showNavbar: false
      }
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView,
      meta: {
        showNavbar: false
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/report',
      name: 'report',
      component: ReportView,
      meta: {
        showNavbar: true
      }
    }
  ]
})

router.beforeEach(async (to, from) => {
  const storageStore = useStorageStore()
  const {settings} = storeToRefs(storageStore)


  if (to.path !== '/registration') {
    if (to.path === '/' && storageStore.hasLoggedIn)
      return {name: 'dashboard'}

    if (to.path !== '/' && !storageStore.hasLoggedIn)
      return {name: 'landing'}

    if (to.path === '/dashboard' && settings.value.role === 'ADMIN')
      return {name: 'report'}
  }
})

export default router
