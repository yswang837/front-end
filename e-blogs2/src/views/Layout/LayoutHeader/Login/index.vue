<script setup>
import { ref } from 'vue';

// 控制登录的弹窗是否显示
const showLoginDialog = ref(false)
defineExpose({showLoginDialog})

// 默认显示账密登录的tab
const activeName = ref('first')

// 账密登录输入框
const username = ref('')
const password = ref('')
const identifyCode = ref('')

</script>

<template>
  <el-dialog v-model="showLoginDialog" width="30%" center :show-close="false">
    <el-tabs v-model="activeName" class="demo-tabs" :stretch="true" @tab-click="handleClick">
      <el-tab-pane label="账密登录" name="first">
        <el-input v-model="username" style="width: 240px" placeholder="请输入用户名" />
        <el-input v-model="password" style="width: 240px" placeholder="请输入密码" type="password" />
        <div>
          <el-input v-model="identifyCode" style="width: 240px" placeholder="请输入验证码" />
          <!-- 这里放验证码图片 -->
        </div>
      </el-tab-pane>
      <el-tab-pane label="验证码登录" name="second">手机验证码或者邮箱验证码登录</el-tab-pane>
      <el-tab-pane label="微信扫码登录" name="third">微信扫码登录</el-tab-pane>
    </el-tabs>
    <template v-slot:footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="showLoginDialog=false">登录</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
