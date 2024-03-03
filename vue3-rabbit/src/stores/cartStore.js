// 封装购物车模块

import { ref,computed } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI,delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(()=>userStore.userInfo.token)

    // state
    const cartList = ref([])

    // action
    // 获取最新购物车列表的action函数
    const updateNewList = async ()=>{
        const res = await findNewCartListAPI()
        cartList.value = res.result
    }
    
    const addCart = async (goods)=>{
        if (isLogin.value) {
            // 登陆之后的加入购物车逻辑
            const {skuId, count} = goods
            await insertCartAPI({skuId, count})
            updateNewList()
        }else {
            // 本地购物车逻辑
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
        
    }
    
    const delCart = async (skuId)=>{
        // 删除购物车
        if(isLogin.value){
            // 调用接口删除购物车
            await delCartAPI([skuId])
            updateNewList()
        }else {
            // 思路：
            // 1. 找到要删除项的下标值，splice 或
            // 2. 使用数组的过滤方法 filter
            const idx = cartList.value.findIndex((item)=>skuId === item.skuId)
            cartList.value.splice(idx,1) 
        } 
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
    // 3.已选择商品数量
    const selectedCount = computed(()=> cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count, 0))
    // 4.已选择商品合计
    const selectedPrice = computed(()=> cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price, 0))
    // 是否全选
    const isAll = computed(()=> cartList.value.every((item) => item.selected))

    return {cartList, allCount, allPrice, selectedCount, selectedPrice, isAll, addCart, delCart, singleCheck, allCheck}
},{
    persist: true
})
