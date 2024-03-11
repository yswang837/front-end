<script setup>
import Header from './header.vue'
</script>

<template>
<div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
            <router-view />
      </el-main>
    </el-container>
</div>
</template>

<style scoped>

</style>
