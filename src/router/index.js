import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/views/LandingView.vue";
import {storeToRefs} from 'pinia'
import {useStore} from '@/stores/index.js'
import DashboardView from "@/views/DashboardView.vue";
import AboutView from "@/views/AboutView.vue";

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
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        showNavbar: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        showNavbar: true
      }
    }
  ]
})

router.beforeEach(async (to, from) => {
  const store = useStore()
  const {settings} = storeToRefs(store)

  if (to.path === '/' && settings.value.currentUserRole !== 'NONE')
    return {name: 'dashboard'}

  if (to.path !== '/' && settings.value.currentUserRole === 'NONE')
    return {name: 'landing'}
})

export default router
