<template>
  <div class="productModalContainer" @click.self="$emit('close')">
    <div class="modal">
      <div class="modalContent">
        <img class="productItemImage" :src="product.imgURL" />
        <div>
          <h5>{{ product.name }}</h5>
          <h5>{{ product.price }} kr</h5>
        </div>
        <div>
          <AddToCartButton @click.native="addToCart()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddToCartButton from '../components/AddToCartButton.vue'

export default {
  props: {
    product: {}
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.product)
      this.$emit('close')
    }
  },
  components: {
    AddToCartButton
  }
}
</script>

<style lang="scss">
@import '../styles/components/_productModal.scss';
</style>
