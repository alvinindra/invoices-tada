import { mount } from '@vue/test-utils'
import BaseLogo from '@/components/base/Logo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseLogo)
    expect(wrapper.vm).toBeTruthy()
  })
})
