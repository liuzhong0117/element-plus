<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <!-- <svg class="icon svg-icon" aria-hidden="true" v-if="icon && typeof icon == 'string'">
    </svg> -->
    <component  
     aria-hidden="true"
     class="icon svg-icon" 
     v-if="icon && typeof icon == 'string'"
     :is="iconSvg"
     >
    </component>
    <slot v-else />
  </i>
  
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { addUnit, isUndefined } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'
import { icons } from '@ulearning/icons-vue/global'


defineOptions({
  name: 'ElIcon',
  inheritAttrs: false,
})
const props = defineProps(iconProps)
const ns = useNamespace('icon')

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})

//将传入的icon-xx转换成 IconXx
const camelcase = (str) => {
  // 匹配末尾的连字符并替换为相同数量的下划线  import名字不能以-结尾 转换成下划线_
  const modifiedStr = str.replace(/-+$/, match => '_'.repeat(match.length));

  // 按连字符分割字符串，处理每个部分
  const parts = modifiedStr.split(/-+/).filter(part => part.length > 0); // 过滤空部分

  // 每部分首字母大写并拼接
  return parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

const iconSvg = computed(() => {
  const { icon } = props
  const key = camelcase(icon)
  return icons[key]
})

onMounted(() => {
})
</script>
