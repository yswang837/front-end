<script setup>
import { reactive, ref } from 'vue';
import { getIdentityCodeByEmailAPI } from '@/apis/login';

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
const form1 = reactive({
  email:'',
  identifyCode1:'',
  agree:true
})

// 通过邮箱获取验证码
const getIdentityCodeByEmail = async (email)=>{
  const res = await getIdentityCodeByEmailAPI(email)
  console.log(res);
}

</script>

<template>
  <el-dialog v-model="showLoginDialog" width="30%" center :show-close="false">
    <el-tabs v-model="activeName" class="demo-tabs" :stretch="true">
      <el-tab-pane label="验证码登录" name="first">
        <el-form :model="form1" label-width="60px" status-icon>
              <el-form-item prop="email" label="邮&nbsp;&nbsp;&nbsp;箱">
                <el-input v-model="form1.email" placeholder="请输入邮箱" clearable/>
              </el-form-item>
              <el-form-item prop="identityCode1" label="验证码">
                <el-input v-model="form1.identifyCode1" placeholder="请输入验证码" clearable />
                <el-button @click="getIdentityCodeByEmail(form1.email)">获取验证码</el-button>
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox  size="large" v-model="form1.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn">登录</el-button>
            </el-form>
      </el-tab-pane>
      <el-tab-pane label="微信扫码登录" name="second">
        <img src="@/assets/images/wx-login.png" width="200px">
      </el-tab-pane>
      <el-tab-pane label="账密登录" name="third">
        <el-input v-model="username" style="width: 240px" placeholder="请输入用户名" />
        <el-input v-model="password" style="width: 240px" placeholder="请输入密码" type="password" />
        <div>
          <el-input v-model="identifyCode1" style="width: 240px" placeholder="请输入验证码" />
          <!-- 这里放验证码图片 -->
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<style scoped>

</style>
