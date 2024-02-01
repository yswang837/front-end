<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"> <br>
    名：<input type="text" v-model="lastName"> <br>
    <button @click="changeFullName">将全名改为li-si</button> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
    全名：<span>{{fullName}}</span> <br>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,computed} from 'vue'

  let firstName = ref('zhang')
  let lastName = ref('san')

  // let fullName = computed(()=>{
  //   console.log(1) // 虽然模板中多次调用计算属性fullName，但计算属性有缓存，只会计算一次，函数则会调用多次
  //   return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  // })
  // function changeFullName(){
  //   fullName.value = 'li-si' // 此时的计算属性是只读的，不可修改。
  // }

  // fullName是一个计算属性，它实现了get和set方法，此时它是可读可写
  let fullName = computed({
    // 当fullName被读取时，get调用
    get(){
      console.log('get被调用了');
      return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    },
    // 当fullName被修改时，set调用，且会收到修改的值
    set(val){
      console.log('set被调用了');
      const [str1,str2] = val.split('-')
      firstName.value = str1
      lastName.value = str2
    }
  })
  function changeFullName(){
    fullName.value = 'li-si' // 此时的计算属性是可读可写的
  }

</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
  }
  li {
    font-size: 20px;
  }
</style>