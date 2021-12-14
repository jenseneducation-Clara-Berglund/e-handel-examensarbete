<template>
  <div id="productsContainer">
    <Search
      class="search"
      @search-text-updated="searchProducts"
      v-show="searchVisible"
    />
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
import Search from "./Search.vue";

export default {
  components: { ProductItem, Search },

  data() {
    return { searchVisible: true };
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