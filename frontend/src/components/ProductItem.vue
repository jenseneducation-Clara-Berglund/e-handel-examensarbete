<template>
  <div class="productItemContainer">
    <img
      class="productItemImage"
      :src="product.imgURL"
      @click="$emit('on-img-click')"
    />
    <div>
      <h5>{{ product.name }}</h5>
      <h5>{{ product.price }} kr</h5>
    </div>
    <AddToCartButton @on-add-to-cart-clicked="addToCart()" />
  </div>
</template>
<script>
import AddToCartButton from '../components/AddToCartButton.vue'

export default {
  components: {
    AddToCartButton
  },

  props: {
    product: {}
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
    }
  }
}
</script>
<style lang="scss">
@import '../styles/components/_productItem.scss';
</style>
