<script setup lang="ts">
import {
  Edit,
  Plus
} from '@element-plus/icons-vue'
</script>

<template>
  <div>
  <div class='a'>fasdfad</div>
  <HelloWorld message="cnmd"></HelloWorld>
    <SvgIcon name='voice' width="100px" height="100px"></SvgIcon>
    <el-button type="success" size="small" :icon="Edit">Default</el-button>
    <el-button type="primary" size="default" :icon="Plus">Default</el-button>

  
  </div>

</template>

<style lang='scss' scoped>
.a{
color:$color;
width:200px;
height:200px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
