<template>
  <div id="nav">
    <!-- <Logo @clicked="toHomePage" /> -->
    <div id="titleContainer"></div>
    <div id="titleContainer">
      <div class="logo" @click="$emit('logo-btn-clicked')">BAGS</div>
    </div>
    <div id="iconContainer">
      <img
        id="cartImage"
        v-if="cart.products.length > 0"
        src="@/assets/2bag.png"
        @click="$emit('cart-btn-clicked')"
      />
      <div
        id="cartCount"
        v-if="cart.products.length > 0"
        class="itemCounterContainer"
      >
        {{ cart.products.length }}
      </div>
      <img
        id="profileImage"
        src="@/assets/2user.png"
        @click="$emit('profile-btn-clicked')"
      />
    </div>
  </div>
</template>

<script>
// import Logo from "@/components/Logo.vue";
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['cart'])
}
</script>

<style lang="scss">
@import '../styles/components/_nav.scss';
</style>
