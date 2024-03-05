<script setup>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<!-- 我是整体布局页 -->
<template>
    <LayoutHeader/>
    <LayoutNav/>
    <!-- 二级路由出口 -->
    <RouterView />
    <LayoutFooter/>
</template>
    