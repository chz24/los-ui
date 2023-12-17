import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/views/LandingView.vue";
import {storeToRefs} from 'pinia'
import {useStore} from '@/stores/index.js'
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
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
