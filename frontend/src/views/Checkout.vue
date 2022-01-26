<template>
  <div class="checkoutContainer">
    <div class="checkoutInfoContainer">
      <div class="table">
        <div class="tableColHead">Id</div>
        <div class="tableColHead">Products</div>
        <div class="tableColHead">Price</div>
      </div>
      <div class="table" v-for="product in cart.products" :key="product.id">
        <div class="tableCol">{{ product.id }}</div>
        <div class="tableCol">{{ product.name }}</div>
        <div class="tableCol">{{ product.price }}kr</div>
      </div>
      <div class="table">
        <div class="tableColHead">Total</div>
        <div class="tableColHead"></div>
        <div class="tableColHead">
          {{
            cart.products
              .map((p) => parseInt(p.price))
              .reduce((a, b) => a + b, 0)
          }}kr
        </div>
      </div>
      <label for="nameInput">NAMN</label>
      <input id="nameInput" placeholder="Tomté Nissé" />
      <label for="emailInput">EMAIL</label>
      <input id="emailInput" type="email" placeholder="t.n@santassleigh.com" />
      <label for="addressInput">ADDRESS</label>
      <input
        id="addressInput"
        type="text"
        placeholder="Adress: Santa's street 123 45 NORTH POLE"
      />
      <label for="telehphone">PHONE NUMBER</label>
      <input id="telehphone" type="phonenumber" placeholder="08-702 00 90" />

      <div style="margin: 0.5em" />

      <h1>Hur vill du betala?</h1>
      <form>
        <div id="paymentOptions">
          <div
            class="paymentOption"
            style="flex-direction: row; display: flex; width: 25%"
          >
            <input type="radio" id="kort" name="payment_option" />
            <div style="width: 1em" />
            <h3>Kort</h3>
          </div>
          <div
            class="paymentOption"
            style="flex-direction: row; display: flex; width: 25%"
          >
            <input type="radio" id="swish" name="payment_option" />
            <div style="width: 1em" />
            <h3>Swish</h3>
          </div>
          <div
            class="paymentOption"
            style="flex-direction: row; display: flex; width: 25%"
          >
            <input type="radio" id="faktura" name="payment_option" />
            <div style="width: 1em" />
            <h3>Faktura</h3>
          </div>
        </div>
      </form>
      <div v-on:click="checkout()" id="completePayment">
        <p>Complete payment</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['checkoutAndCreateOrder', 'getCart']),
    async checkout() {
      await this.checkoutAndCreateOrder()
      await this.getCart()
      this.$router.replace('/')
    }
  },
  mounted() {
    this.getCart()
  }
}
</script>
<style lang="scss">
@import '../styles/layouts/_checkout.scss';
</style>
