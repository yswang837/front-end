<script setup>
import Menu from './menu.vue'
import {useRouter} from 'vue-router'
const router = useRouter();
</script>

<template>
<div class="header">
    <div class="appheader">
        <Menu />
        <div class="header-item">
            <div class="header-search">
                <input type="text" placeholder="请输入内容">
                <button class="iconfont icon-sousuo"></button>
            </div>
            <el-button type="primary" round>提问</el-button>
        </div>
        <div class="heaer-userinfo">
            <div class="popover">
                <i class="iconfont icon-xiaoxizhongxin"></i>
                <div class="popover-num">10</div>
                <p>消息</p>
            </div>
            <div class="popover">
                <i class="iconfont icon-xiaoxi1"></i>
                <div class="popover-num">10</div>
                <p>私信</p>
            </div>
            <div class="popover">
                <i class="iconfont icon-jurassic_edit-user"></i>
                <p>创作中心</p>
            </div>
            <div class="header-profile">
                  <el-dropdown>
                        <img src="@/assets/image/1.png" alt="">
                        <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item><i class="iconfont icon-gerenzhongxin"></i>个人中心</el-dropdown-item>
                            <el-dropdown-item @click="$router.push('/login')"><i class="iconfont icon-tuichu"></i>退出</el-dropdown-item>   
                        </el-dropdown-menu>
                        </template>
                    </el-dropdown>
            </div>
        </div>
    </div>
    
</div>
</template>

<style scoped>

</style>
