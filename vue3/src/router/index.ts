// 创建一个路由器，并暴露出去

// 注意点1：路由组件一般放在pages文件夹views文件夹，一般组件放在components文件夹
//        路由组件通过路由规则来调用，一般组件通过程序员写出来调用，如本例的<Header/>

// 注意点2：通过点击导航，视觉效果上消失了的路由组件，默认是被卸载了，需要的时候再去挂载

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
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
