<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select v-model="value" placeholder="Select" style="width: 240px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="value"
      placeholder="Select"
      size="small"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: '阿里卡萨丁拉屎代理费啊阿斯卡到付件阿斯兰戴假发阿斯卡多路阀上岛咖啡垃圾啊手打发上岛咖啡 阿斯利康地方阿萨德发了就阿斯顿福建啊塞德里克发斯蒂芬',
  },
  {
    value: 'Option2',
    label: '阿斯利康地方阿萨德发了就阿斯顿福建啊塞德里克发斯蒂芬',
  },
  {
    value: 'Option3',
    label: '牛肉煎饼',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
