const _axios = require('axios')
export const axios = _axios.create({
  baseURL: 'http://localhost:3000/'
})

axios.defaults.headers.common['Authorization'] = '0.mjg2wplnqsh'

export const registerUser = async (fullName, email, password) => {
  return await axios.post('/user/register/', {
    fullName,
    email,
    password
  })
}

export const login = async (email, password) => {
  let data = await axios.post('/user/login/', {
    email,
    password
  })

  axios.defaults.headers.common['Authorization'] = data.token
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
