import {
  CircleCloseFilled,
  Close,
  InfoFilled,
  Loading,
  SuccessFilled,
  WarningFilled,
} from '@element-plus/icons-vue'
import { definePropType } from './props'

import type { Component } from 'vue'

export const iconPropType = definePropType<string | Component>([
  String,
  Object,
  Function,
])

export const CloseComponents = {
  Close,
}

export const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
}

export const TypeComponentsMap = {
  success: 'icon-check-circle-fill',
  warning: 'icon-alert-triangle-fill',
  error: 'icon-x-circle-fill',
  info: 'icon-info-fill',
  primary: 'icon-info-fill'
}

export const ValidateComponentsMap = {
  validating: Loading,
  success: 'icon-check-circle',
  error: 'icon-x-circle',
}
