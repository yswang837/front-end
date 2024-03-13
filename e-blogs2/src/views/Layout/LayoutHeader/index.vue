<script setup>
import Login from './Login/index.vue'
import { ref } from 'vue'
const isClickLogin = ref(false)
const toLoginComponent = ()=>{
  isClickLogin.value = true
  console.log(isClickLogin.value);
}
</script>

<template>
  <div class="container">
    <ul>
      <template v-if="false">
        <li><a href="javascript:;">周杰伦</a></li>
              <li>
                <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                  <template #reference>
                    <a href="javascript:;">退出登录</a>
                  </template>
                </el-popconfirm>
              </li>
              <li><a href="javascript:;">我的订单</a></li>
              <li><a href="javascript:;">会员中心</a></li>
      </template>
      <template v-else>
          <li><a href="javascript:;" @click="toLoginComponent()">请先登录</a><Login :showLoginDialog="`isClickLogin`" /></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.container ul {
  display: flex;
  background: #333;
  height:45px;
  justify-content: flex-end;
  align-items: center;
  li {
    a {
      color: #fff;
      padding: 0 15px;
      line-height: 1;
    }
  }
}
</style>
