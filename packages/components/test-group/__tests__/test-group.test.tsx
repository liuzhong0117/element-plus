import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TestGroup from '../src/test-group.vue'

const AXIOM = 'Rem is the best girl'

describe('TestGroup.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <TestGroup>{AXIOM}</TestGroup>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
