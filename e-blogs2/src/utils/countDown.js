// 封装倒计时逻辑函数
import {computed, onUnmounted, ref} from 'vue'
import dayjs from 'dayjs'

export const countDown = ()=>{
    // 响应式数据
    const time = ref(0)
    let timer = null
    // 格式化时间为xx分xx秒
    const formatTime = computed(()=>dayjs.unix(time.value).format('ss'))
    // 开启倒计时的函数
    const start = (currentTime)=>{
        // 每隔一秒就减1
        time.value = currentTime
        timer = setInterval(()=>{
            time.value--
        },1000)
    }
    // 组件销毁时，清除定时器，避免内存溢出
    onUnmounted(()=>{
        timer && clearInterval(timer)
    })
    return {formatTime, start}
}