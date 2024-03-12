<script setup>
import LayoutLeft from './LayoutLeft/index.vue'
import LayoutRight from './LayoutRight/index.vue'
import LayoutContent from './LayoutContent/index.vue'
</script>

<template>
  <div class="container">
    <div class="main-content">
      <LayoutLeft />
      <LayoutContent />
      <LayoutRight />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  display: flex;
  width: 100%;
  height: 100%;
  background: #613737;
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
