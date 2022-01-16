<template>
  <div class="home">
    <Search
      class="search"
      @search-text-updated="searchProducts"
      v-show="searchVisible"
    />
    <Products />
  </div>
</template>
<script>
import Search from '@/components/Search.vue'
// import Filter from "@/components/Filter.vue";
import Products from '@/components/Products.vue'
// import AddToCartButton from "@/components/AddToCartButton.vue";
import { mapActions } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      searchVisible: true
    }
  },

  components: {
    Search,
    // Filter,
    Products
  },
  methods: {
    searchProducts(searchTerm) {
      // this.filteredProducts = this.products.filter((p) =>
      //   p.name.toLowerCase().includes(searchTerm.toLowerCase())
      // );
      console.log('searching for  ' + searchTerm)
    },

    toggleSearch() {
      this.searchVisible = !this.searchVisible
    },
    ...mapActions(['getCart'])
  },
  mounted() {
    this.getCart()
  }
}
</script>
<style lang="scss">
@import '../styles/layouts/_home.scss';
@import '../styles/components/_logo.scss';
@import '../styles/components/_search.scss';
</style>
