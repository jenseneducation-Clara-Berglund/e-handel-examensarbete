<template>
  <img @click="$emit('clicked')" class="cartButton" />
</template>

<script>

</script>

<style lang="scss" scoped>
.cartButton {
  height: 25px;
}
</style>