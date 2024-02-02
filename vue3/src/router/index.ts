import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[ // 给每个路由组件都加上了name属性，可通过name跳转过来
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
    {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        {
          name:'xiangqing',
          path:'detail',  //子路由不要加'/'
          component:Detail
        }
      ]
    },
    {
      name:'guanyu',
      path:'/about',
      component:About
    }
  ]
})

export default router
