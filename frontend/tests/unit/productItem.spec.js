import ProductItem from '@/components/ProductItem.vue'
import AddToCartButton from '@/components/AddToCartButton.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import VueRouter from 'vue-router'
import routes from '@/router/default.routes.js'
import store from '@/store/index.js'
const product = {
  id: 3,
  name: 'pinkbag',
  price: '900',
  imgURL:
    'https://media.istockphoto.com/photos/pink-women-bag-isolated-picture-id916257096?k=20&m=916257096&s=612x612&w=0&h=rG9oYQcuXqzABq2lAi8vEpjnnqkzFQvzm6FoNchOwzg='
}
it('should show productItemImage, name, price and add to cart button', () => {
  const localVue = createLocalVue()
  const router = new VueRouter({ routes })
  localVue.use(VueRouter)
  const wrapper = shallowMount(ProductItem, {
    store,
    localVue,
    router,
    propsData: {
      product: product
    }
  })

  expect(wrapper.findAllComponents(AddToCartButton).length).toBe(1)
  expect(wrapper.findAll('img').length).toBe(1)
  expect(wrapper.findAll('h5').length).toBe(2)
  expect(wrapper.findComponent(AddToCartButton).exists()).toBe(true)
})

it('should emit on-img-click event if image is clicked', async () => {
  const localVue = createLocalVue()
  const router = new VueRouter({ routes })
  localVue.use(VueRouter)
  const wrapper = shallowMount(ProductItem, {
    store,
    localVue,
    router,
    propsData: {
      product: product
    }
  })
  wrapper.find('.productItemImage').trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.emitted('on-img-click')).toBeTruthy()
})

it('should trigger addToCart if add to cart button is clicked', async () => {
  const localVue = createLocalVue()
  const router = new VueRouter({ routes })
  localVue.use(VueRouter)
  const wrapper = shallowMount(ProductItem, {
    store,
    localVue,
    router,
    propsData: {
      product: product
    }
  })
  wrapper.findComponent(AddToCartButton).trigger('click')
  await wrapper.vm.$nextTick()
  expect(wrapper.vm.addToCart).toHaveBeenCalled
})
