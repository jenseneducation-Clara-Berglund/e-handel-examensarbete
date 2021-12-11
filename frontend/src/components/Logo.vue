<template>
  <div @click="$emit('clicked')" class="logo">
    <h2>BAGS</h2>
  </div>
</template>

<script>
export default {};
</script>

<style>
.logo {
  cursor: pointer;
}
</style>