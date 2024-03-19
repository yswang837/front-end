<template>
    <div class="login-body">
        <div class="login-panel">
            <div class="login-title">用户登录</div>
            <el-form :model="formData" :rules="rules" ref="formDataRef">
                <el-form-item prop="account">
                    <el-input placeholder="请输入账号" v-model="formData.account">
                        <template #prefix>
                            <span class="iconfont icon-account"></span>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input placeholder="请输入密码" v-model="formData.password" type="password">
                        <template #prefix>
                        <span class="iconfont icon-password"></span>
                    </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox  v-model="formData.rememberMe" :label="true">记住我</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%" @click="login">登录</el-button>
                    <Vcode :show="isShow" @success="success" @close="close" @fail="fail" :sliderSize="30"></Vcode>
                </el-form-item>
            </el-form>
        </div>
    </div>

    
</template>

<script setup>
import { reactive, ref } from 'vue';
import Vcode from 'vue3-puzzle-vcode'
import { useRouter } from 'vue-router';
const formDataRef = ref()
const formData = reactive({})
const isShow = ref(false)
const router=useRouter()
const rules = {
    account:[{
        required:true,
        message:'请输入用户名',
        trigger: 'blur'
    }],
    password:[{
        required:true,
        message:'请输入密码',
        trigger: 'blur'
    }]
}

const login = ()=>{
    formDataRef.value.validate((valid)=>{
        if(!valid) {
            return
        }
        isShow.value = true
    })
}
const success = ()=>{
    isShow.value = false
    router.push('home')
}

const close = ()=>{
    isShow.value = false
}

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
}
</style>
