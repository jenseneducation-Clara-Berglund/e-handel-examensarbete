<template>
  <div class="profileContainer">
    <div class="personalInfoContainer">
      <h1>{{ user.fullName }}</h1>
      <h3>{{ user.email }}</h3>
      <h3>Purchase history</h3>
      <div
        class="orderHistory"
        v-for="oh in orderHistory"
        v-bind:key="oh.id"
      ></div>
      <div class="table">
        <div class="tableColHead">Order Id</div>
        <div class="tableColHead">Date</div>
        <div class="tableColHead">#Products</div>
        <div class="tableColHead">Price</div>
      </div>
      <div class="table" v-for="oh in orderHistory" :key="oh.orderId">
        <div class="tableCol">{{ oh.orderId.substr(0, 8) }}</div>
        <div class="tableCol">{{ oh.date }}</div>
        <div class="tableCol">
          {{ oh.products.length }}
        </div>
        <div class="tableCol">
          {{
            oh.products
              .map((p) => parseInt(p.price))
              .reduce((a, b) => a + b, 0)
          }}kr
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user', 'orderHistory', 'userToken'])
  },
  methods: {
    ...mapActions(['getUser', 'getOrderHistory'])
  },
  watch: {
    userToken() {
      this.getUser()
      this.getOrderHistory()
    }
  },
  mounted() {
    this.getUser()
    this.getOrderHistory()
  }
}
</script>
<style lang="scss">
@import '../styles/layouts/_profile.scss';
</style>
