<template>
  <select
    @change="$emit('selected-option', selected)"
    v-model="selected"
    name="amount"
    class="amount"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: Array,
    preSelected: String,
  },
  data() {
    return {
      selected: this.preSelected,
    };
  },
};
</script>

<style>
</style>