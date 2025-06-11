<template>
  <el-color-picker v-model="color" :predefine="predefineColors" @change="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
const color = ref('#2970FF')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
])

const setCssVar = (prop, val, dom = document.documentElement) => {
  dom.style.setProperty(prop, val)
}

const handleChange = (currentColor) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(currentColor)
  const color = new TinyColor(currentColor)
  setCssVar('--el-color-primary', currentColor)
  setCssVar('--el-color-primary-dark-2', '#' + color.mix('#000', 20).toHex())
  arr.forEach(item => {
    setCssVar(`--el-color-primary-light-${item}`,'#' + color.tint(item * 10).toHex())
  })
}

</script>

<style lang="scss" scoped>

</style>

