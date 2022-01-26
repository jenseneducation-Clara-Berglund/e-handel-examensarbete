import ProductItem from '@/components/ProductItem.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Products from '@/components/Products.vue'
import VueRouter from 'vue-router'
import ProductModal from '@/components/ProductModal.vue'
import routes from '@/router/default.routes.js'
import store from '@/store/index.js'

describe('products test', () => {
  const listOfProducts = [
    {
      id: 1,
      name: 'yellowbag',
      price: '700',
      imgURL:
        'https://media.istockphoto.com/photos/yellow-handbag-picture-id1154597724?k=20&m=1154597724&s=612x612&w=0&h=TDkUQF3IGOcHsCVfjqwd27nvFzm4jkBYP0oGvxvgSt0='
    },
    {
      id: 2,
      name: 'greenbag',
      price: '1100',
      imgURL:
        'https://media.istockphoto.com/photos/woman-bag-isolated-on-the-white-background-picture-id92272987?k=20&m=92272987&s=612x612&w=0&h=OxcFi4rxBY9O4J2qfqe9_kgjW_IMWcoejsd6fKfvZfs='
    },
    {
      id: 3,
      name: 'pinkbag',
      price: '900',
      imgURL:
        'https://media.istockphoto.com/photos/pink-women-bag-isolated-picture-id916257096?k=20&m=916257096&s=612x612&w=0&h=rG9oYQcuXqzABq2lAi8vEpjnnqkzFQvzm6FoNchOwzg='
    }
  ]

  it('should show all the product items in the products component', () => {
    const localVue = createLocalVue()
    const router = new VueRouter({ routes })
    localVue.use(VueRouter)
    const wrapper = shallowMount(Products, {
      store,
      localVue,
      router,
      propsData: {
        products: listOfProducts
      }
    })
    let expected = listOfProducts.length
    let actual = wrapper
      .find('#productsContainer')
      .findAllComponents(ProductItem).length
    expect(actual).toBe(expected)
  })

  it('should show the product modal if product is selected', async () => {
    const localVue = createLocalVue()
    const router = new VueRouter({ routes })
    localVue.use(VueRouter)
    const wrapper = shallowMount(Products, {
      store,
      localVue,
      router,
      propsData: {
        products: listOfProducts
      }
    })
    await wrapper.vm.$nextTick()
    await wrapper.vm.selectProduct({
      id: 2,
      name: 'greenbag',
      price: '1100',
      imgURL:
        'https://media.istockphoto.com/photos/woman-bag-isolated-on-the-white-background-picture-id92272987?k=20&m=92272987&s=612x612&w=0&h=OxcFi4rxBY9O4J2qfqe9_kgjW_IMWcoejsd6fKfvZfs='
    })
    let actual = wrapper
      .find('#productItemsContainer')
      .findComponent(ProductModal)
      .exists()
    expect(actual).toBe(true)
  })

  it('should hide the product modal no product is selected', async () => {
    const localVue = createLocalVue()
    const router = new VueRouter({ routes })
    localVue.use(VueRouter)
    const wrapper = shallowMount(Products, {
      store,
      localVue,
      router,
      propsData: {
        products: listOfProducts
      }
    })
    await wrapper.vm.$nextTick()

    let actual = wrapper
      .find('#productItemsContainer')
      .findComponent(ProductModal)
      .exists()
    expect(actual).toBe(false)
  })

  it('should hide the product modal on on-img-click event', async () => {
    const localVue = createLocalVue()
    const router = new VueRouter({ routes })
    localVue.use(VueRouter)
    const wrapper = shallowMount(Products, {
      store,
      localVue,
      router,
      propsData: {
        products: listOfProducts
      }
    })
    await wrapper.vm.$nextTick()
    expect(
      wrapper
        .find('#productItemsContainer')
        .findComponent(ProductModal)
        .exists()
    ).toBe(false)
    wrapper
      .find('#productItemsContainer')
      .findComponent(ProductItem)
      .vm.$emit('on-img-click')
    await wrapper.vm.$nextTick()
    let actual = wrapper
      .find('#productItemsContainer')
      .findComponent(ProductModal)
      .exists()
    expect(actual).toBe(true)
  })
})
