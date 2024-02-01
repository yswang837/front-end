<template>
  <!-- ref放在元素上，相当于直接拿到了这个元素，可以在脚本里面操作这个元素，比如说加背景 -->
  <div ref="title2">你好</div>
  <button @click="showLog">测试</button>
  <Person ref="ren"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let title2 = ref()
  let ren = ref()

  function showLog(){
    console.log(title2.value)
    title2.value.style = `background-color : red`
    console.log(ren.value)
  }
</script>
