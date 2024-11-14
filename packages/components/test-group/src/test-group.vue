<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { test-groupProps } from './test-group'

defineOptions({
  name: 'ElTestGroup',
})

const props = defineProps(test-groupProps)

// init here
</script>
