// 管理用户相关

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
// import { loginAPI } from '@/'

export const useUserStore = defineStore('user', () => {
  // 1、数据
  const userInfo = ref({})
  // 2、方法
  const getUserInfo = async ({account, password})=>{
    const res = await loginAPI({account, password})
    userInfo.value = res.result
  }
  
  // 3、返回
  return { userInfo , getUserInfo }
},
{
  persist: true,
})
