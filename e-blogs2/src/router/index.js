import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
// 创建路由实例
const router = createRouter({
  // 创建history模式的路由
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path和component的对应关系
  routes: [
    {
      path:'/',
      component:Layout,
    }
  ]
})

export default router
