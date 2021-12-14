<template>
  <div id="nav">
    <Logo @clicked="toHomePage" />
    <img src="@/assets/bag.png" @click="$emit('cart-btn-clicked')" />
    <img src="@/assets/user.png" @click="$emit('profile-btn-clicked')" />
    <CartButton @clicked="$emit('cart-btn-clicked')" />
  </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import CartButton from "@/components/CartButton.vue";

export default {
  components: {
    Logo,
    CartButton,
  },
  methods: {
    toHomePage() {
      if (this.$router.history.current.name === "Home") {
        this.$router.go();
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/components/_nav.scss";
</style>