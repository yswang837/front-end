import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../styles/common.scss'

import {lazyPlugin} from '../directives/'
// 引入全局组件插件
import {componentsPlugin} from './components/index'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentsPlugin)

app.mount('#app')
