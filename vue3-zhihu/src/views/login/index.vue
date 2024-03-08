<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

</script>

<template>
    <div class="login">
        <div class="login-img">
        <img src="@/assets/images/v2.png" alt="知乎 有问题就会有答案">
        </div>
        <div class="login-item">
            <div class="login-left">
                <div class="qr-container">
                    <p class="title1">打开知乎App</p>
                    <p class="describe">在「我的页」右上角打开扫一扫</p>
                    <img src="@/assets/images/qrcode.png" alt="二维码登录">
                    <p class="title2">其他扫码方式：微信</p>
                </div>
                <div class="button-container">
                    <ul>
                        <li class="btn"><el-button round>下载知乎App</el-button></li>
                        <li class="btn"><el-button round>无障碍模式</el-button></li>
                        <li class="btn"><el-button round>无障碍模式</el-button></li>
                    </ul>
                </div>
                
            </div>
            <div class="login-right">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="验证码登录" name="first">User </el-tab-pane>
                    <el-tab-pane label="密码登录" name="second">Config</el-tab-pane>
                </el-tabs>
                
            </div>
        </div>
        <div class="login-bottom">3</div>
    </div>
</template>

<style scoped>

.login{
    height: 100%;
    width: 100%;
    background: url(../../assets/images/sign_bg.png) no-repeat top center;
    background-size: cover;
    background-color: #B8E5F8;
}
.login-img{
    text-align: center;
    padding-top: 40px;
    margin-bottom: 17px;
}

.login-img img {
    width: 128px;
    height: 81px;
}

.login-item {
    display: flex;
    height: 507px;
    justify-content: center;
    align-items: center;
}

.login-left {
    width: 332px;
    height: 100%;
    background-color: #fff;
    border-right: 1px solid #ddd;
    text-align: center;
    padding: 15px;
}

.login-right {
    width: 401px;
    height: 100%;
    background-color: #fff;
    padding: 20px;
}

.qr-container {
    padding-top: 78px;
}

.title1 {
    line-height: 23px;
    font-size: 16px;
    color: #373a40;
    font-weight: 600;
}

.describe{
    margin-top: 8px;
    margin-bottom: 24px;
    min-width: 0;
    font-size: 14px;
    line-height: 20px;
    color: #373a40;
}

.qr-container img {
    border: 1px solid #ebeced;
    padding: 8px;
    width: 138px;
    height: 138px;
}

.title2 {
    margin-top: 24px;
    line-height: 20px;
    font-size: 14px;
    color: #373a40;
    font-weight: 600;
}

.button-container ul {
    display: flex;
    margin-top: 70px;
    justify-content: center;
}

.button-container .el-button {
    font-size: 11px;
    margin-right: 8px;
    color: black;
}


.button-container{
    
}

</style>
