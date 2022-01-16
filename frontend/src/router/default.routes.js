import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },

  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

export default routes
