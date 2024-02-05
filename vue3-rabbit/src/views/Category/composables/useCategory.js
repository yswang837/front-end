// 封装分类数据相关的业务代码

import { getTopCategoryAPI } from '../../../../apis/category'
import { ref,onMounted } from 'vue'
import { useRoute,onBeforeRouteUpdate } from 'vue-router';

export function useCategory(){
    const categoryData = ref({})
    const route = useRoute() 
    const getCategory = async (id = route.params.id)=>{
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(()=>getCategory())
    // 目标：期望在路由参数发生变化时，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
    })
    return { categoryData }
}