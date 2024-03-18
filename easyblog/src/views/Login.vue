<template>
    <div class="login-body">
        <div class="login-panel">
            <div class="login-title">用户登录</div>
            <el-form :model="formData">
                <el-form-item>
                    <el-input placeholder="请输入账号" v-model="formData.account"/>
                </el-form-item>
                <el-form-item >
                    <el-input placeholder="请输入密码" v-model="formData.password"/>
                </el-form-item>
                <el-form-item >
                    <div class="check-code-panel">
                        <el-input class="input-panel" placeholder="请输入验证码" v-model="formData.checkCode"/>
                             <div class="check-code">
                                <IdentifyCode/>
                            </div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-checkbox  v-model="formData.rememberMe" :label="true">记住我</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>

    
</template>

<script setup>
import { reactive } from 'vue';
import  IdentifyCode  from '@/components/IdentifyCode.vue'
const formData = reactive({})


</script>

<style lang="scss" scoped>
.login-body {
    width: 100%;
    height: calc(100vh);
    background-image: url(../assets/images/login-bg.jpg);
    background-size: cover;
    background-position: center;
    .login-panel {
        float: right;
        margin-right: 200px;
        margin-top: 170px;
        padding: 20px;
        width: 350px;
        background: rgba(255, 255, 255, 0.92);
        border-radius: 5px;
        box-shadow: 2px 2px 10px #888888;
        .login-title {
            font-size: 20px;
            text-align: center;
            margin-bottom: 10px;
        }
    }
    .check-code-panel{
        display: flex;
        align-items: center;
        .input-panel{
            flex:1;
            margin-right: 5px;
        }
        .check-code{
            height: 30px;
            cursor: pointer;
        }
    }
}
</style>
