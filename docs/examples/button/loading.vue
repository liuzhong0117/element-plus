<template>
  <el-button type="primary" loading>Loading</el-button>
  <!-- <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button> -->
</template>

<script lang="ts" setup>
import { Eleme } from '@element-plus/icons-vue'
</script>

<style scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>
