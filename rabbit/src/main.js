import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入初始化的样式文件
import '@/styles/common.scss'
import { getCategoryAPI } from '@/apis/testAPI'
const res = getCategoryAPI()
console.log('AA',res);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
