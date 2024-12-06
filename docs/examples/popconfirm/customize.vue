<template>
  <el-popconfirm
    width="220"
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    icon="icon-info-fill"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <el-button>Delete</el-button>
    </template>
  </el-popconfirm>
</template>

<script setup lang="ts">
</script>
