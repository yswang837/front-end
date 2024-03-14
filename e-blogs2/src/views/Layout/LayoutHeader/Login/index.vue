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
const identifyCode1 = ref('')

// 邮箱登录输入框
const identifyCode2 = ref('')
const email = ref('')

</script>

<template>
  <el-dialog v-model="showLoginDialog" width="30%" center :show-close="false">
    <el-tabs v-model="activeName" class="demo-tabs" :stretch="true" @tab-click="handleClick">
      <el-tab-pane label="账密登录" name="first">
        <el-input v-model="username" style="width: 240px" placeholder="请输入用户名" />
        <el-input v-model="password" style="width: 240px" placeholder="请输入密码" type="password" />
        <div>
          <el-input v-model="identifyCode1" style="width: 240px" placeholder="请输入验证码" />
          <!-- 这里放验证码图片 -->
        </div>
      </el-tab-pane>
      <el-tab-pane label="验证码登录" name="second">
        <el-input v-model="email" style="width: 240px" placeholder="请输入邮箱" />
        <el-input v-model="identifyCode2" style="width: 240px" placeholder="请输入验证码" />
      </el-tab-pane>
      <el-tab-pane label="微信扫码登录" name="third">
        <img src="@/assets/images/wx-login.png" width="200px">
      </el-tab-pane>
    </el-tabs>
    <template v-slot:footer>
      <span class="dialog-footer">
        <template v-if="activeName==='first'">
          <el-button type="primary" @click="showLoginDialog=false">登录</el-button>
        </template>
        <template v-if="activeName==='second'">
          <el-button type="primary" @click="showLoginDialog=false">登录/注册</el-button>
        </template>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
