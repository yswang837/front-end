// 管理用户相关

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
// import { loginAPI } from '@/'

export const useUserStore = defineStore('user', () => {
  const carStore = useCartStore()
  // 1、数据
  const userInfo = ref({})
  // 2、方法
  const getUserInfo = async ({account, password})=>{
    const res = await loginAPI({account, password})
    userInfo.value = res.result
  }

  // 退出时清除用户信息
  const clearUserInfo =()=>{
    userInfo.value = {}
    // 执行清除购物车的action函数
    carStore.clearCart()
  }
  
  // 3、返回
  return { userInfo , getUserInfo,clearUserInfo}
},
{
  persist: true,
})
