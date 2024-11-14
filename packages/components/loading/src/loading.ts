import {
  Transition,
  createApp,
  createVNode,
  defineComponent,
  h,
  reactive,
  ref,
  toRefs,
  vShow,
  withCtx,
  withDirectives,
} from 'vue'
import { removeClass } from '@element-plus/utils'
import { useGlobalComponentSettings } from '@element-plus/components/config-provider'

import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { LoadingOptionsResolved } from './types'

export function createLoadingComponent(options: LoadingOptionsResolved) {
  let afterLeaveTimer: number
  // IMPORTANT NOTE: this is only a hacking way to expose the injections on an
  // instance, DO NOT FOLLOW this pattern in your own code.
  const afterLeaveFlag = ref(false)
  const data = reactive({
    ...options,
    originalPosition: '',
    originalOverflow: '',
    visible: false,
  })

  function setText(text: string) {
    data.text = text
  }

  function destroySelf() {
    const target = data.parent
    const ns = (vm as any).ns as UseNamespaceReturn
    if (!target.vLoadingAddClassList) {
      let loadingNumber: number | string | null =
        target.getAttribute('loading-number')
      loadingNumber = Number.parseInt(loadingNumber as any) - 1
      if (!loadingNumber) {
        removeClass(target, ns.bm('parent', 'relative'))
        target.removeAttribute('loading-number')
      } else {
        target.setAttribute('loading-number', loadingNumber.toString())
      }
      removeClass(target, ns.bm('parent', 'hidden'))
    }
    removeElLoadingChild()
    loadingInstance.unmount()
  }
  function removeElLoadingChild(): void {
    vm.$el?.parentNode?.removeChild(vm.$el)
  }
  function close() {
    if (options.beforeClose && !options.beforeClose()) return

    afterLeaveFlag.value = true
    clearTimeout(afterLeaveTimer)

    afterLeaveTimer = window.setTimeout(handleAfterLeave, 400)
    data.visible = false

    options.closed?.()
  }

  function handleAfterLeave() {
    if (!afterLeaveFlag.value) return
    const target = data.parent
    afterLeaveFlag.value = false
    target.vLoadingAddClassList = undefined
    destroySelf()
  }

  const elLoadingComponent = defineComponent({
    name: 'ElLoading',
    setup(_, { expose }) {
      const { ns, zIndex } = useGlobalComponentSettings('loading')

      expose({
        ns,
        zIndex,
      })

      return () => {
        const svg = data.spinner || data.svg
        const spinner = h(
          'svg',
          {
            class: 'circular',
            viewBox: data.svgViewBox ? data.svgViewBox : '0 0 40 40',
            ...(svg ? { innerHTML: svg } : {}),
          },
          [
            h('path', {
              d: 'M37.8571 20C37.8571 22.345 37.3952 24.6671 36.4978 26.8336C35.6004 29.0001 34.2851 30.9687 32.6269 32.6269C30.9687 34.2851 29.0001 35.6004 26.8336 36.4978C24.6671 37.3952 22.345 37.8571 20 37.8571C17.6549 37.8571 15.3329 37.3952 13.1663 36.4978C10.9998 35.6004 9.03124 34.2851 7.37306 32.6269C5.71487 30.9687 4.39952 29.0001 3.50211 26.8336C2.60471 24.6671 2.14282 22.345 2.14282 20C2.14282 17.6549 2.60471 15.3329 3.50212 13.1663C4.39953 10.9998 5.71487 9.03124 7.37306 7.37305C9.03125 5.71486 10.9998 4.39952 13.1663 3.50211C15.3329 2.60471 17.6549 2.14282 20 2.14282C22.345 2.14282 24.6671 2.60471 26.8336 3.50212C29.0001 4.39953 30.9687 5.71488 32.6269 7.37307C34.2851 9.03126 35.6004 10.9998 36.4978 13.1663C37.3952 15.3329 37.8571 17.6549 37.8571 20L37.8571 20Z',
              stroke: '#F2F4F7', // 设置颜色
              // class: 'path',
              fill: 'none',
              'stroke-width': '4.28571', // 设置线宽
              'stroke-linecap': 'round', // 设置线条端点为圆形
              'stroke-linejoin': 'round', // 设置线条连接点为圆形
            }),
            h('path', {
              d: 'M20 2.14282C22.345 2.14282 24.6671 2.60471 26.8336 3.50212C29.0001 4.39952 30.9687 5.71487 32.6269 7.37306C34.2851 9.03125 35.6004 10.9998 36.4978 13.1663C37.3952 15.3329 37.8571 17.6549 37.8571 20',
              fill: 'none',
              // class: 'path',
              stroke: '#2970FF', // 设置颜色为蓝色
              'stroke-width': '4.28571', // 设置线宽
              'stroke-linecap': 'round', // 设置线条端点为圆形
              'stroke-linejoin': 'round', // 设置线条连接点为圆形
            })
          ]
        )
        //  `<path d="M37.8571 20C37.8571 22.345 37.3952 24.6671 36.4978 26.8336C35.6004 29.0001 34.2851 30.9687 32.6269 32.6269C30.9687 34.2851 29.0001 35.6004 26.8336 36.4978C24.6671 37.3952 22.345 37.8571 20 37.8571C17.6549 37.8571 15.3329 37.3952 13.1663 36.4978C10.9998 35.6004 9.03124 34.2851 7.37306 32.6269C5.71487 30.9687 4.39952 29.0001 3.50211 26.8336C2.60471 24.6671 2.14282 22.345 2.14282 20C2.14282 17.6549 2.60471 15.3329 3.50212 13.1663C4.39953 10.9998 5.71487 9.03124 7.37306 7.37305C9.03125 5.71486 10.9998 4.39952 13.1663 3.50211C15.3329 2.60471 17.6549 2.14282 20 2.14282C22.345 2.14282 24.6671 2.60471 26.8336 3.50212C29.0001 4.39953 30.9687 5.71488 32.6269 7.37307C34.2851 9.03126 35.6004 10.9998 36.4978 13.1663C37.3952 15.3329 37.8571 17.6549 37.8571 20L37.8571 20Z" stroke="#F2F4F7" stroke-width="4.28571" stroke-linecap="round" stroke-linejoin="round"/>
        //      <path d="M20 2.14282C22.345 2.14282 24.6671 2.60471 26.8336 3.50212C29.0001 4.39952 30.9687 5.71487 32.6269 7.37306C34.2851 9.03125 35.6004 10.9998 36.4978 13.1663C37.3952 15.3329 37.8571 17.6549 37.8571 20" stroke="#2970FF" stroke-width="4.28571" stroke-linecap="round" stroke-linejoin="round"/>`

        const spinnerText = data.text
          ? h('p', { class: ns.b('text') }, [data.text])
          : undefined

        return h(
          Transition,
          {
            name: ns.b('fade'),
            onAfterLeave: handleAfterLeave,
          },
          {
            default: withCtx(() => [
              withDirectives(
                createVNode(
                  'div',
                  {
                    style: {
                      backgroundColor: data.background || '',
                    },
                    class: [
                      ns.b('mask'),
                      data.customClass,
                      data.fullscreen ? 'is-fullscreen' : '',
                    ],
                  },
                  [
                    h(
                      'div',
                      {
                        class: ns.b('spinner'),
                      },
                      [spinner, spinnerText]
                    ),
                  ]
                ),
                [[vShow, data.visible]]
              ),
            ]),
          }
        )
      }
    },
  })

  const loadingInstance = createApp(elLoadingComponent)
  const vm = loadingInstance.mount(document.createElement('div'))

  return {
    ...toRefs(data),
    setText,
    removeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el(): HTMLElement {
      return vm.$el
    },
  }
}

export type LoadingInstance = ReturnType<typeof createLoadingComponent>
