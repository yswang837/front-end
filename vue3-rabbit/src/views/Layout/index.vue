<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue'

// 触发获取导航列表的action
import { useCategoryStore } from '../../stores/categoryStore.js'
const categoryStore = useCategoryStore()

onMounted(()=>categoryStore.getCategory())
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
 
  <!-- 添加key，破坏复用机制，强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath"/> -->
  <!-- 二级路由出口 -->
  <RouterView />
  <LayoutFooter />
</template>