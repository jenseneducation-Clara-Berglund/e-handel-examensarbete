<template>
  <div class="productItemContainer">
    <img class="productItemImage" :src="product.imgURL" />
    <div>
      <h5>{{ product.name }}</h5>
      <h5>{{ product.price }} kr</h5>
    </div>
    <div @click="$emit('remove-product-from-cart', product.cartProductId)">
      <RemoveFromCartButton />
    </div>
  </div>
</template>
<script>
import RemoveFromCartButton from './RemoveFromCartButton.vue'
export default {
  components: { RemoveFromCartButton },

  props: {
    product: {}
  }
}
</script>
<style lang="scss">
@import '../styles/components/_productItem.scss';
</style>
