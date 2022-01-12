<template>
  <div class="productItemContainer">
    <img class="productItemImage" :src="product.imgURL" />
    <div>
      <h5>{{ product.name }}</h5>
      <h5>{{ product.price }}</h5>
    </div>
    <AddToCartButton @:click.native="addToCart(product)"/>
  </div>
</template>
<script>
import  AddToCartButton from "../components/AddToCartButton.vue";

export default {
  components: {
    AddToCartButton
  },

  props: {
    product: {},
  },

  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product.id, 1);
    }
}
};
</script>
<style lang="scss">
@import "../styles/components/_productItem.scss";
</style>
