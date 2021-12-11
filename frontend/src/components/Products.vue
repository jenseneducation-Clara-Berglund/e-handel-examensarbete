<template>
  <div class="productsContainer">
    <ProductItem v-for="product in products" :key="product.id />
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 6,
          name: "blackbag",
          price: "1500sek",
          imgURL:
            "https://media.istockphoto.com/photos/black-leather-womens-tote-handbag-on-white-background-picture-id502935014?k=20&m=502935014&s=612x612&w=0&h=qgK79BRFuyk2e7Ba5nrx6PSUDhF4zU2Cg249vLTIgPU=",
        },
      ],
    };
  },
  created() {
    products = await axios.get("api/products");
  },
};
</script>
<style scoped>
</style>