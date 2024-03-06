<script setup>
import LayoutTopNav from './components/LayoutTopNav.vue';
// import LayoutBody from './components/LayoutBody.vue';
// import LayoutLeftNav from './components/LayoutLeftNav.vue';
// import LayoutRightNav from './components/LayoutRightNav.vue'
// import LayoutFooter from './components/LayoutFooter.vue'
</script>

<!-- 我是整体布局页 -->
<template>
    <LayoutTopNav/>
    <!-- <LayoutBody/>
    <LayoutLeftNav/>
    <LayoutRightNav/> -->
    <!-- 二级路由出口 -->
    <RouterView />
    <!-- <LayoutFooter/> -->
</template>
    