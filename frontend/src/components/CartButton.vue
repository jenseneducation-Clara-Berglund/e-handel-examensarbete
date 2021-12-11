<template>
  <img @click="$emit('clicked')" class="cart-button" />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cart-button {
  height: 25px;
}
</style>