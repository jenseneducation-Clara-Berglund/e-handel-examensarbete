<template>
  <div class="checkoutContainer">
    <div class="checkoutHeaderContainer">
      <div>CHECKOUT</div>
      <div style="margin: 1em" />
    </div>
    <div class="checkoutInfoContainer">
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
            <div>Kort</div>
          </div>
          <div
            class="paymentOption"
            style="flex-direction: row; display: flex; width: 25%"
          >
            <input type="radio" id="swish" name="payment_option" />
            <div style="width: 1em" />
            <div>Swish</div>
          </div>
          <div
            class="paymentOption"
            style="flex-direction: row; display: flex; width: 25%"
          >
            <input type="radio" id="faktura" name="payment_option" />
            <div style="width: 1em" />
            <div>Faktura</div>
          </div>
        </div>
      </form>
      <div id="completePayment"><p>Complete payment</p></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import '../styles/layouts/_checkout.scss';
</style>
