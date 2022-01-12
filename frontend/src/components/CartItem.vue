<template>
  <div class="productItemContainer">
    <img class="productItemImage" :src="product.imgURL" />
    <div>
      <h5>{{ product.name }}</h5>
      <h5>{{ product.price }}</h5>
    </div>
    <div @click="$emit('remove-product-from-cart', product.id)">Ta bort</div>
  </div>
</template>
<script>
export default {
  components: {},

  props: {
    product: {}
  }
}
</script>
<style lang="scss">
@import '../styles/components/_productItem.scss';
</style>
