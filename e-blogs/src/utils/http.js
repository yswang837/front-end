// axios 基础封装

import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import router from '@/router'; 

const httpInstance = axios.create({
    baseURL: 'http://localhost:4477',
    timeout: 5000
})



// axios请求拦截器
httpInstance.interceptors.request.use(config => {
    let token = 'ddd'
    // 2、按照后端要拼接token数据
    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }, e => Promise.reject(e))
  
  // axios响应式拦截器
  httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
      type:'warning',
      message:e.response.data.message
    })

    // 401 token失效处理
    //1、清除本地数据
    //2、跳转到登录页
    if(e.response.status === 401){
      router.push('/login')
    }

    return Promise.reject(e)
  })

export default httpInstance