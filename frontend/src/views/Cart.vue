<template>
  <div class="cartContainer">
    <h1>Din kundvagn</h1>
    <div class="cartItemContainer">
      <CartItem
        v-for="product in cart.products"
        :key="product.cartProductId"
        :product="product"
        @remove-product-from-cart="removeProductFromCart"
      />
    </div>
    <div class="checkoutBtnAndTotalContainer">
      <p>{{ 'Total ' + this.calculatePrice() + ':-' }}</p>
      <CheckoutButton @click.native="$router.push('/checkout')" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from '@/components/CartItem.vue'
import CheckoutButton from '../components/CheckoutButton.vue'

export default {
  computed: mapGetters(['cart']),

  methods: {
    ...mapActions(['getCart', 'removeProductFromCart']),
    removeProduct(cartProductId) {
      this.removeProductFromCart(cartProductId)
    },
    calculatePrice() {
      let price = this.cart.products.reduce((e, a) => e + parseInt(a.price), 0)
      console.log(typeof price)
      return price
    }
  },

  components: {
    CartItem,
    CheckoutButton
  },

  mounted() {
    this.getCart()
  }
}
</script>
<style lang="scss">
@import '../styles/layouts/_cart.scss';
</style>
