// 把components下的所有组件都进行全局化注册
// 通过插件的方式
import ImageView from '@/components/ImageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'
export const componentsPlugin = {
    install(app) {
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)
    }
}