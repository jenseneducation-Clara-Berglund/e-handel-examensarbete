<template>
  <div id="productsContainer">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "./ProductItem.vue";

export default {
  components: { ProductItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="scss">
@import "../styles/components/_products.scss";
</style>