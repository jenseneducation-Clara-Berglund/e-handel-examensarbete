<template>
  <div id="productsContainer">
    <div id="productItemsContainer">
      <ProductItem
        v-for="product in products"
        @on-img-click="selectProduct(product)"
        @add-to-cart="addToCart"
        :key="product.id"
        :product="product"
      />
      <ProductModal
        v-if="showModal == true"
        @close="showModal = false"
        :product="selectedProduct"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductItem from './ProductItem.vue'
import ProductModal from './ProductModal.vue'

export default {
  components: { ProductItem, ProductModal },
  props: { products: [] },
  data() {
    return { searchVisible: true, showModal: false, selectedProduct: null }
  },
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['getProducts', 'addProductToCart']),
    selectProduct(product) {
      this.showModal = true
      this.selectedProduct = product
    },
    addToCart(product) {
      this.addProductToCart(product.id)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
<style lang="scss">
@import '../styles/components/_products.scss';
</style>
