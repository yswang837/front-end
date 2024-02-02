import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'


const router = createRouter({
  history:createWebHashHistory(),
  // 命令路由
  routes:[
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    },
  ]
})

export default router
