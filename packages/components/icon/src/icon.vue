<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <svg class="icon svg-icon" aria-hidden="true" v-if="icon && typeof icon == 'string'">
      <use :xlink:href="'#' + icon"></use>
    </svg>
    <slot v-else />
  </i>
  
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { addUnit, isUndefined } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'


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

onMounted(() => {
  import('../../../assets/fonts/iconfont.js')
})
</script>
