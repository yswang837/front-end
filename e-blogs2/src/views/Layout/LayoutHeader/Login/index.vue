<script setup>
import { ref } from 'vue';


let x = defineProps(['showLoginDialog'])
const showDialog = ref(x.showLoginDialog)
console.log(showDialog.value);
</script>

<template>
  <el-dialog v-model="showDialog" title="切换收货地址" width="30%" center>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="showLoginDialog">取消</el-button>
        <el-button type="primary" @click="showLoginDialog">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
