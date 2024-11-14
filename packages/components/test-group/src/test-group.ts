import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type TestGroup from './test-group.vue'

export const test-groupProps = buildProps({})

export type TestGroupProps = ExtractPropTypes<typeof test-groupProps>
export type TestGroupInstance = InstanceType<typeof TestGroup>
