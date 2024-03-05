import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import Layout from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path:'',
          component:Home
        }
      ]
    }
  ]
})

export default router
