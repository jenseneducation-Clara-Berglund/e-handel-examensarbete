<template>
  <div id="nav">
    <!-- <img @click="$emit('search-btn-clicked')" src="@/assets/search.png" class="search-btn"/> -->
    <Logo @clicked="toHomePage" />
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