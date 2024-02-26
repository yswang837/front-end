// 封装购物车模块

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // state
    const cartList = ref([])

    // action
    const addCart = (goods)=>{
        // 添加购物车操作
        // 已添加过count+1
        // 没有添加过，直接push
        // 思路：通过匹配传递过来的skuId，能不能在cartList中找到，找到了就是已添加过
        const item = cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item) {
            item.count++
        }else {
            cartList.value.push(goods)
        }
    }
    return {cartList, addCart}
},{
    persist: true
})
