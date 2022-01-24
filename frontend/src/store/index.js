import Vue from 'vue'
import Vuex from 'vuex'
import {
  addProductToCart,
  getCart,
  getProducts,
  removeProductFromCart,
  axios,
  login as apiLogin,
  registerUser,
  getUser,
  getOrderHistory as apiGetOrderHistory,
  createOrder
} from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: {
      userId: '',
      products: []
    },
    userToken: null,
    user: {},
    orderHistory: []
  },
  getters: {
    products(state) {
      return state.products
    },
    userToken(state) {
      return state.userToken
    },
    product: (state) => (id) => {
      return state.products.find((item) => item.id == id)
    },
    cart(state) {
      return state.cart
    },
    user(state) {
      return state.user
    },
    orderHistory(state) {
      return state.orderHistory
    }
  },
  mutations: {
    Set_Products(state, products) {
      state.products = products
    },
    Set_Cart(state, cart) {
      state.cart = cart
    },
    Set_UserToken(state, userToken) {
      axios.defaults.headers.common['Authorization'] = userToken
      localStorage.setItem('token', userToken)
      state.userToken = userToken
    },
    Set_User(state, user) {
      state.user = user
    },
    Set_OrderHistory(state, orderHistory) {
      state.orderHistory = orderHistory
    }
  },
  actions: {
    async login(context, { email, password }) {
      try {
        let response = await apiLogin(email, password)
        context.commit('Set_UserToken', response.data.token)
      } catch (e) {
        console.log(e)
      }
    },

    async getUser(context) {
      try {
        let response = await getUser()
        context.commit('Set_User', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async getOrderHistory(context) {
      try {
        let response = await apiGetOrderHistory()
        context.commit('Set_OrderHistory', response.data)
      } catch (e) {
        console.log(e)
        // context.commit('Set_UserToken', null)
      }
    },
    async checkoutAndCreateOrder(context) {
      try {
        let response = await createOrder()
        context.commit('Set_OrderHistory', response.data)
        context.dispatch('getCart')
      } catch (e) {
        console.log(e)
        // context.commit('Set_UserToken', null)
      }
    },
    async register(context, { fullName, email, password }) {
      try {
        await registerUser(fullName, email, password)
        let response = await apiLogin(email, password)
        context.commit('Set_UserToken', response.data.token)
      } catch (e) {
        console.log(e)
      }
    },

    async getProducts(context) {
      if (context.state.userToken === null) {
        return
      }
      try {
        let response = await getProducts()
        context.commit('Set_Products', response.data)
      } catch (e) {
        console.log(e)
      }
    },
    async checkToken({ commit }) {
      let token = localStorage.getItem('token')
      if (token && token !== undefined && token !== null && token !== '') {
        commit('Set_UserToken', token)
      }
      // context.commit('Set_UserToken', null)
      // context.commit('Set_UserToken', '0.mjg2wplnqsh')
    },
    async getCart(context) {
      if (context.state.userToken === null) {
        return
      }
      try {
        let response = await getCart()
        context.commit('Set_Cart', response.data)
      } catch (e) {
        console.log(e)
        // context.commit('Set_UserToken', null)
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
