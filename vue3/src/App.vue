<template>
  <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref,onMounted} from 'vue'

  let isShow = ref(true)

  // 挂载完毕，会深度优先地进行挂载，
  onMounted(()=>{
    console.log('父---挂载完毕')
  })

</script>
