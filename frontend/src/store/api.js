const _axios = require('axios')
export const axios = _axios.create({
  baseURL: 'https://examensprojekt-backend.herokuapp.com/'
})

axios.defaults.headers.common['Content-Type'] = 'application/json'

export const registerUser = async (fullName, email, password) => {
  try {
    return await axios.post('/user/register/', {
      fullName,
      email,
      password
    })
  } catch (e) {
    console.log(e)
  }
}

export const login = async (email, password) => {
  let data = await axios.post('/user/login/', { email, password })
  return data
}

export const getUser = async () => {
  let data = await axios.get('/user/me/')
  return data
}

export const getOrderHistory = async () => {
  let data = await axios.get('/orderHistory')
  return data
}

export const createOrder = async () => {
  let data = await axios.post('/cart/checkout')
  return data
}

export const getProducts = async () => {
  return await axios.get('/products/')
}

export const getProduct = async (id) => {
  return await axios.get(`/products/${id}`)
}

export const getCart = async () => {
  return await axios.get(`/cart/`)
}

export const addProductToCart = async (id) => {
  return await axios.post(`/cart/add/${id}`)
}

export const removeProductFromCart = async (cartProductId) => {
  return await axios.delete(`/cart/remove/${cartProductId}`)
}

// removeMenuItem({ state, commit }, item) {
//   let cart = state.cart;
//   let firstOccuranceIndex = cart.findIndex(i => i.id === item.id);
//   if (firstOccuranceIndex !== -1) {
//     cart.splice(firstOccuranceIndex, 1);
//   }
//   commit("setCart", cart);
// }
