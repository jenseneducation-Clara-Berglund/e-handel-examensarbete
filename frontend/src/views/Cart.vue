<template>
  <div class="cartContainer">
    <div class="cartItemContainer">
      <CartItem
        v-for="product in cart.products"
        :key="product.cartProductId"
        :product="product"
        @remove-product-from-cart="removeProductFromCart"
      />
    </div>
    <CheckoutButton @click.native="$router.push('/checkout')" />
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
