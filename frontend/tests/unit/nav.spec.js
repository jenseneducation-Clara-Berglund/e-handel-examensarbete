const { shallowMount, createLocalVue, mount } = require('@vue/test-utils')
import VueRouter from 'vue-router'
import routes from '@/router/default.routes.js'
import Nav from '@/components/Nav.vue'
import Vuex from 'vuex'

import store from '@/store/index.js'
import Search from '@/components/Search.vue'
const localVue = createLocalVue()
const router = new VueRouter({ routes })
localVue.use(Vuex)
localVue.use(VueRouter)
describe('Nav.vue', () => {
  it('should hide cart icons if no products in cart', async () => {
    const wrapper = shallowMount(Nav, {
      localVue,
      router,
      store: new Vuex.Store({
        state: {
          cart: {
            products: []
          }
        },
        getters: {
          cart: () => {
            return { products: [] }
          }
        }
      })
    })

    await wrapper.vm.$nextTick()
    var actual = wrapper.find('#iconContainer').find('#cartCount').exists()
    var expected = false
    expect(actual).toBe(expected)

    actual = wrapper.find('#iconContainer').find('#cartImage').exists()
    expected = false
    expect(actual).toBe(expected)
  })
  it('should show cart icons if products in cart', async () => {
    const wrapper = shallowMount(Nav, {
      localVue,
      router,
      store: new Vuex.Store({
        state: {
          cart: {
            products: [{}]
          }
        },
        getters: {
          cart: () => {
            return { products: [{}] }
          }
        }
      })
    })

    await wrapper.vm.$nextTick()
    var actual = wrapper.find('#iconContainer').find('#cartCount').exists()
    var expected = true
    expect(actual).toBe(expected)

    actual = wrapper.find('#iconContainer').find('#cartImage').exists()
    expected = true
    expect(actual).toBe(expected)
  })
})
