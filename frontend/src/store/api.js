const _axios = require('axios')
const axios = _axios.create({
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

export const removeProductFromCart = async (id) => {
  return await axios.delete(`/cart/remove/${id}`)
}
