<script setup>

</script>

<template>
  <div class="container">
    <div class="main-content">
      <span class="left">左侧导航</span>
      <span class="content">内容区</span>
      <span class="right">右侧提示</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  text-align: center;
}
.main-content {
  display: flex;
  width: 100%;
  height: 100%;
  background: #999;
  color: #fff;
}
.left, .right{
  width: 100px;
  height: 100%;
  background-color: gray;
}
.content {
  flex: 1;
  height: 100%;
  background: #9f9d7b;
}

</style>
