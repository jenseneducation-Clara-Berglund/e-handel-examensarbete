<template>
  <div>
    <button v-if="!loading" @click="handleClick()" class="addToCart">
      ADD TO CART
    </button>
    <button v-if="loading" class="addToCart addToCartSuccess">
      ADDED TO CART
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleClick() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$emit('on-add-to-cart-clicked')
      }, 1000)
    }
  }
}
</script>
<style lang="scss">
@import '../styles/components/_addToCartButton.scss';
</style>
