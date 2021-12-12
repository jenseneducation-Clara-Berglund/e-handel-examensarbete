<template>
  <div class="productItemContainer">
    <img class="productItemImage" :src="product.imgURL" />
    <div>
      <h5>{{ product.name }}</h5>
      <h5>{{ product.price }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {},
  },
};
</script>
<style lang="scss">
@import "../styles/components/_productItem.scss";
</style>
