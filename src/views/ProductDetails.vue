<template>
<h1>ProductDetails</h1>
  <div>
    <ul v-if="selectedProduct">
      <li>Title: {{selectedProduct.title}}</li>
      <li>Price: {{selectedProduct.price}} $</li>
      <li>Description: {{selectedProduct.description}}</li>
      <li><img :src="selectedProduct.image" alt="image product"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  created() {
    this.$store.dispatch('getProductById', this.$route.params.id);
    this.$store.commit('clearSelectedProduct');
  },
  computed: {
    selectedProduct () {
      return this.$store.state.selectedProduct;
    }
  }
}
</script>

<style scoped>
  img {
    max-width: 200px;
  }
</style>