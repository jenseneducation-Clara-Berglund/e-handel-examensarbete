<template>
  <div class="home">
    <Search
      class="search"
      @search-text-updated="searchProducts"
      v-show="searchVisible"
    />
    <Products :products="filteredProducts" />
  </div>
</template>
<script>
import Search from '@/components/Search.vue'
import Products from '@/components/Products.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      searchVisible: true,
      filteredProducts: []
    }
  },
  computed: {
    ...mapGetters(['products'])
  },
  components: {
    Search,
    Products
  },
  methods: {
    searchProducts(searchTerm) {
      console.log('searching for  ' + searchTerm)
      if (searchTerm === null) {
        this.filteredProducts = this.products
        return
      }
      this.filteredProducts = this.products.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    },

    toggleSearch() {
      this.searchVisible = !this.searchVisible
    },
    ...mapActions(['getCart', 'getProducts'])
  },
  async mounted() {
    await this.getCart()
    await this.getProducts()
    this.searchProducts(null)
  }
}
</script>
<style lang="scss">
@import '../styles/layouts/_home.scss';
@import '../styles/components/_logo.scss';
@import '../styles/components/_search.scss';
</style>
