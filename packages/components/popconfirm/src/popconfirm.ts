import { buttonTypes } from '@element-plus/components/button'
import { buildProps, iconPropType } from '@element-plus/utils'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import type { ExtractPropTypes } from 'vue'
import type Popconfirm from './popconfirm.vue'

export const popconfirmProps = buildProps({
  /**
   * @description Title
   */
  title: String,
  /**
   * @description Confirm button text
   */
  confirmButtonText: String,
  /**
   * @description Cancel button text
   */
  cancelButtonText: String,
  /**
   * @description Confirm button type
   */
  confirmButtonType: {
    type: String,
    values: buttonTypes,
    default: 'primary',
  },
  /**
   * @description Cancel button type
   */
  cancelButtonType: {
    type: String,
    values: buttonTypes,
    default: 'text',
  },
  /**
   * @description Icon Component
   */
  icon: {
    type: iconPropType,
    default: () => 'icon-info-fill',
  },
  /**
   * @description Icon color
   */
  iconColor: {
    type: String,
    default: '#f90',
  },
  /**
   * @description is hide Icon
   */
  hideIcon: {
    type: Boolean,
    default: false,
  },
  /**
   * @description delay of disappear, in millisecond
   */
  hideAfter: {
    type: Number,
    default: 200,
  },
  /**
  * @description popover offset
  */
  offset: {
    type: Number,
    default: 10,
  },
  /**
   * @description whether a tooltip arrow is displayed or not. For more info, please refer to [ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper)
   */
  showArrow: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether popconfirm is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description when popconfirm inactive and `persistent` is `false` , popconfirm will be destroyed
   */
  persistent: useTooltipContentProps.persistent,
  /**
   * @description popconfirm width, min width 150px
   */
  width: {
    type: [String, Number],
    default: 240,
  },
} as const)

export const popconfirmEmits = {
  /**
   * @description triggers when click confirm button
   */
  confirm: (e: MouseEvent) => e instanceof MouseEvent,
  /**
   * @description triggers when click cancel button
   */
  cancel: (e: MouseEvent) => e instanceof MouseEvent,
}

export type PopconfirmEmits = typeof popconfirmEmits

export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>

export type PopconfirmInstance = InstanceType<typeof Popconfirm>
