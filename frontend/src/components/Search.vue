<template>
  <div class="searchContainer">
    <input type="text" v-model="currentText" />
  </div>
</template>
<script
<script>
export default {
  data() {
    return { currentText: "" };
  },
  watch: {
    currentText(value) {
      this.$emit("search-text-updated", value);
    },
  },
};
</script>
<style lang="scss">
@import "../styles/components/_search.scss";
</style>
