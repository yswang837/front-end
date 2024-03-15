<script setup>
import LayoutHeader from './LayoutHeader/index.vue'
import Navigation from './LayoutNavigation/index.vue'
import LayoutMainContent from './LayoutMainContent/index.vue'
import LayoutFooter from './LayoutFooter/index.vue'

</script>

<template>
  <div class="container">
    <LayoutHeader />
    <Navigation />
    <LayoutMainContent/>
    <LayoutFooter />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  text-align: center;
}
</style>
