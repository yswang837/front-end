<script setup>
import LayoutTopNav from './components/LayoutTopNav.vue';
import LayoutContent from './components/LayoutContent.vue';
import LayoutFooter from './components/LayoutFooter.vue'
</script>

<!-- 我是整体布局页 -->
<template>
    <LayoutTopNav/>
    <LayoutContent/>
    <!-- 二级路由出口 -->
    <RouterView />
    <LayoutFooter/>
</template>
    