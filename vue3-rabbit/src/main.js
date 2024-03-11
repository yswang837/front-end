import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import '../styles/common.scss'
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import {lazyPlugin} from '@/directives/'
// 引入全局组件插件
import {componentsPlugin} from '@/components/index'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)
app.mount('#app')
