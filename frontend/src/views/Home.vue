<template>
  <div class="home">
    <Nav />
    <!-- <Nav @cart-btn-clicked="toggleCart" @search-btn-clicked="toggleSearch" /> -->
    <div class="logo"></div>
    <Search class="search" />
    <!-- <Search
      class="search"
      @search-text-updated="searchProducts"
      v-show="searchVisible"
    /> -->
    <Filter @ />
    <!-- <Filter @size-filtered="filterSize" @color-filtered="filterColor" /> -->
    <Products />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Search from "@/components/Search.vue";
import Filter from "@/components/Filter.vue";
import Products from "@/components/Products.vue";

export default {
  name: "App",
  data() {
    return {
      searchVisible: true,
    };
  },

  components: {
    Nav,
    Search,
    Filter,
    Products,
  },
};
</script>
<style lang="scss">
@import "../styles/layouts/_home.scss";
@import "../styles/components/_logo.scss";
@import "../styles/components/_search.scss";
</style>
