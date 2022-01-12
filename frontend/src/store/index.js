import Vue from 'vue'
import Vuex from 'vuex'
import {
  addProductToCart,
  getCart,
  getProducts,
  removeProductFromCart
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: {
      userId: '',
      products: []
    }
  },
  getters: {
    products(state) {
      return state.products
    },
    product: (state) => (id) => {
      return state.products.find((item) => item.id == id)
    },
    cart(state) {
      return state.cart
    }
  },
  mutations: {
    Set_Products(state, products) {
      state.products = products
    },
    Set_Cart(state, cart) {
      state.cart = cart
    }
  },
  actions: {
    async getProducts(context) {
      try {
        let response = await getProducts()
        context.commit('Set_Products', response.data)
      } catch (e) {
        console.log(e)
      }
    },

    async getCart(context) {
      try {
        let response = await getCart()
        context.commit('Set_Cart', response.data)
      } catch (e) {
        console.log(e)
      }
    },

    async addProductToCart({ commit }, productId) {
      let response = await addProductToCart(productId)
      commit('Set_Cart', response.data)
    },

    async removeProductFromCart({ commit }, productId) {
      await removeProductFromCart(productId)
      let response = await getCart()
      commit('Set_Cart', response.data)
    }

    //     removeProduct({ state, commit}, product) {
    //         let cart = state.cart;
    //         let firstOccuranceIndex = cart.findIndex(i => i.id === product.id);
    //         if (firstOcccuranceIndex !== -1) {
    //             cart.splice(firstOcccuranceIndex, 1);
    //         }
    //         commit("setCart", cart);
    //     }
  }
})
