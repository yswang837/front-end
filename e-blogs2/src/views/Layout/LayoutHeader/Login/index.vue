<script setup>
import { ref } from 'vue';
// 控制登录的弹窗是否显示
const showLoginDialog = ref(false)
defineExpose({showLoginDialog})
</script>

<template>
  <el-dialog v-model="showLoginDialog" title="登录" width="30%" center>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showLoginDialog=false">取消</el-button>
        <el-button type="primary" @click="showLoginDialog=false">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
