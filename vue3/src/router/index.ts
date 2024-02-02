import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

const router = createRouter({
  history:createWebHashHistory(), 
  // 路由器的工作模式（稍后讲解）
  // 路由器的工作模式
  // history模式：不带#，更接近传统url，更常用
  // 哈希模式，有#，兼容性更好
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/about',
      component:About
    },
  ]
})

// 暴露出去router
export default router
