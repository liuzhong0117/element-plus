<template>
  <span
    v-if="disableTransitions"
    :class="containerKls"
    :style="styles"
    @click="handleClick"
  >
    <span :class="ns.e('content')">
      <slot />
    </span>
    <el-icon icon="icon-x-close" v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
    </el-icon>
  </span>
  <transition v-else :name="`${ns.namespace.value}-zoom-in-center`" appear>
    <span
      :class="containerKls"
      :style="styles"
      @click="handleClick"
    >
      <span :class="ns.e('content')">
        <slot />
      </span>
      <el-icon icon="icon-x-close" v-if="closable" :class="ns.e('close')" @click.stop="handleClose">
      </el-icon>
    </span>
  </transition>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import ElIcon from '@element-plus/components/icon'
// import { Close } from '@element-plus/icons-vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormSize } from '@element-plus/components/form'

import { tagEmits, tagProps } from './tag'
import { TinyColor } from '@ctrl/tinycolor'
defineOptions({
  name: 'ElTag',
})
const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const tagSize = useFormSize()
const ns = useNamespace('tag')
const containerKls = computed(() => {
  const { type, hit, effect, closable, round } = props
  return [
    ns.b(),
    ns.is('closable', closable),
    ns.m(type || 'primary'),
    ns.m(tagSize.value),
    ns.m(effect),
    ns.is('hit', hit),
    ns.is('round', round),
  ]
})

const tagColor = props.color 
const effect = props.effect
let color = new TinyColor(tagColor)
// const activeBgColor = color.tint(90).toString()
const light5 = color.tint(50).toString()
const light9 = color.tint(90).toString()
// const light3 = color.tint(30).toString()
const styles = tagColor ? ns.cssVarBlock({
                'bg-color': effect == 'dark' ? tagColor : effect == 'plain' ? '#fff' : light9,
                'border-color': effect == 'dark' ? tagColor : light5,
                'text-color': effect !== 'dark' ? tagColor : ''
              }) : {}

// methods
const handleClose = (event: MouseEvent) => {
  emit('close', event)
}

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>
