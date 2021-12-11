<template>
  <div>
    <Dropdown
      @selected-option="emitFilterSize"
      class="size-filter"
      :options="sizes"
      :preSelected="sizes[0]"
    />
    <Dropdown
      @selected-option="emitFilterColor"
      class="color-filter"
      :options="colors"
      :preSelected="colors[0]"
    />
  </div>
</template>
<script>
import Dropdown from "@/components/Dropdown.vue";
export default {
  components: { Dropdown },
  data() {
    return {
      sizes: ["Size", "S", "M", "L", "XL"],
      colors: ["Color", "black", "grey", "red", "yellow", "white"],
    };
  },
  methods: {
    emitFilterSize(size) {
      this.$emit("size-filtered", size);
    },
    emitFilterColor(color) {
      this.$emit("color-filtered", color);
    },
  },
};
</script>

<style>
</style>