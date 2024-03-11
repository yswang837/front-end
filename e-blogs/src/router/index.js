import { createRouter, createWebHistory } from 'vue-router'
import LayoutView from '@/views/layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutView
    }
  ]
})

export default router
