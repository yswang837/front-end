// 封装购物车模块

import { ref,computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // state
    const cartList = ref([])

    // action
    const addCart = (goods)=>{
        // 添加购物车操作
        // 已添加过count+goods的count
        // 没有添加过，直接push
        // 思路：通过匹配传递过来的skuId，能不能在cartList中找到，找到了就是已添加过
        const item = cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item) {
            item.count += goods.count
        }else {
            cartList.value.push(goods)
        }
    }
    const delCart = (skuId)=>{
        // 思路：
        // 1. 找到要删除项的下标值，splice 或
        // 2. 使用数组的过滤方法 filter
        const idx = cartList.value.findIndex((item)=>skuId === item.skuId)
        cartList.value.splice(idx,1)
    }
    // 单选功能
    const singleCheck = (skuId,selected)=>{
        // 通过skuId找到要修改的那项，修改为selected
        const item = cartList.value.find((item)=>skuId === item.skuId)
        item.selected = selected
    }
    // 全选功能
    const allCheck = (selected)=>{
        // 把cartlist的每一项都修改为selected
        cartList.value.forEach(item=>item.selected=selected)
    }
    // 计算属性
    // 1.总的数量：所有项的count之和
    // 2.总价：所有项的count*price
    const allCount = computed(()=> cartList.value.reduce((a,c)=>a+c.count, 0))
    const allPrice = computed(()=> cartList.value.reduce((a,c)=>a+c.count*c.price, 0))
    // 是否全选
    const isAll = computed(()=> cartList.value.every((item) => item.selected))

    return {cartList, allCount, allPrice, isAll, addCart, delCart, singleCheck, allCheck}
},{
    persist: true
})
