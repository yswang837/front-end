// 管理用户相关

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
  const carStore = useCartStore()
  // 1、数据
  const userInfo = ref({})
  // 2、方法
  const getUserInfo = async ({account, password})=>{
    const res = await loginAPI({account, password})
    userInfo.value = res.result
    // 登录的时候要进行合并购物车操作
    await mergeCartAPI(carStore.cartList.map(item=>{
      return {
        skuId: item.skuId,
        selected: item.selected,
        count:item.count
      }
    }))
    carStore.updateNewList()
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
