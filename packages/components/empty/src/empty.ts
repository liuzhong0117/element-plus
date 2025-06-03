import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'

export const emptyProps = buildProps({
  /**
   * @description image URL of empty
   */
  image: {
    type: String,
    default: '',
  },
  /**
   * @description image size (width) of empty
   */
  imageSize: {
    type: Number,
    default: 160
  },
  /**
   * @description description of empty
   */
  description: {
    type: String,
    default: '',
  },
} as const)

export type EmptyProps = ExtractPropTypes<typeof emptyProps>
