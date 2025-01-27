---
title: Popconfirm 气泡确认框
lang: zh-CN
---

# Popconfirm 气泡确认框

点击某个元素弹出一个简单的气泡确认框

## 基础用法

Popconfirm 的属性与 Popover 很类似， 因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。

:::demo 在 Popconfirm 中，只有 `title` 属性可用，`content` 属性会被忽略。

popconfirm/basic-usage

:::

## 自定义弹出框的内容

可以在 Popconfirm 中自定义内容。

:::demo

popconfirm/customize

:::

## 多种让 Popconfirm 出现的方法

点击按钮触发事件

:::demo

popconfirm/trigger-event

:::

## API

### Attributes

| 属性名                 | 说明                                                              | 类型                                                                                | 默认             |
| ------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------- | -------------- |
| title               | 标题                                                              | ^[string]                                                                         | —              |
| confirm-button-text | 确认按钮文字                                                          | ^[string]                                                                         | —              |
| cancel-button-text  | 取消按钮文字                                                          | ^[string]                                                                         | —              |
| confirm-button-type | 确认按钮类型                                                          | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | primary        |
| cancel-button-type  | 取消按钮类型                                                          | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | text           |
| icon                | 自定义图标                                                           | ^[string] / ^[Component]                                                          | QuestionFilled |
| icon-color          | Icon 颜色                                                         | ^[string]                                                                         | #f90           |
| hide-icon           | 是否隐藏 Icon                                                       | ^[boolean]                                                                        | false          |
| hide-after          | 关闭时的延迟                                                          | ^[number]                                                                         | 200            |
| teleported          | 是否将 popover 的下拉列表插入至 body 元素                                    | ^[boolean]                                                                        | true           |
| persistent          | 当 popover 组件长时间不触发且 `persistent` 属性设置为 `false` 时, popover 将会被删除 | ^[boolean]                                                                        | false          |
| width               | 弹层宽度，最小宽度 150px                                                 | ^[string] / ^[number]                                                             | 150            |

### Events

| 事件名     | 说明        | 类型                                      |
| ------- | --------- | --------------------------------------- |
| confirm | 点击确认按钮时触发 | ^[Function]`(e: MouseEvent) => void` |
| cancel  | 点击取消按钮时触发 | ^[Function]`(e: MouseEvent) => void` |

### Slots

| 插槽名              | 说明                        | 类型                                                                                     |
| ---------------- | ------------------------- | -------------------------------------------------------------------------------------- |
| reference        | 触发 Popconfirm 显示的 HTML 元素 | —                                                                                      |
| actions ^(2.8.1) | 页脚的内容                     | ^[object]`{ confirm: (e: MouseEvent) => void, cancel: (e: MouseEvent) => void }` |
