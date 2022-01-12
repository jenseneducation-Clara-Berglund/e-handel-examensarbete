<template>
  <div class="cartContainer">
    <CartItem
      v-for="(product, index) in cart.products"
      :key="product.id.toString() + index"
      :product="product"
      @remove-product-from-cart="removeProductFromCart"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import CartItem from '@/components/CartItem.vue'

export default {
  computed: mapGetters(['cart']),

  methods: {
    ...mapActions(['getCart', 'removeProductFromCart']),
    removeProduct(productId) {
      console.log('removing ', productId)
      this.removeProductFromCart(productId)
    }
  },

  components: {
    CartItem
  },
  mounted() {
    this.getCart()
  }
}
</script>
<style lang="scss">
@import '../styles/layouts/_cart.scss';
</style>
