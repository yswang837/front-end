// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app){
        // 定义全局指令

app.directive('img-lazy',{
    mounted(el, binding){
        // el：指令绑定的那个元素 img
        // binding：binding.value 指令等于号后面绑定的表达式的值 图片url
        // console.log(el, binding.value);
        const { stop } = useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                if (isIntersecting) {
                    // 图片进入了视口区域
                    el.src = binding.value
                    // console.log(isIntersecting)
                    // 第一次加载完成后，就停止监听
                    stop()
                }
            },
          )
    }
})
    }
}