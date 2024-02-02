<template>
  <div class="person">
    我是一个人：名字叫做{{ person.name }}，年龄：{{ person.age }}
    <br>
    我是一堆人：
    <ul v-for="p in personList" :key="p.id">
      <li>名字叫做{{ p.name }}，年龄：{{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person">
  import {type PersonInter,type Persons} from '@/types'

  let person:PersonInter = {id:'asyud7asfd01',name:'张三',age:60}

  let personList:Persons = [
    {id:'asyud7asfd01',name:'张三',age:60},
    {id:'asyud7asfd02',name:'李四',age:18},
    {id:'asyud7asfd03',name:'王五',age:5}
  ]
  
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
    font-size: 15px;
  }
</style>