<template>
<h1>Products</h1>
  <ul>
    <li v-for="product of $store.state.products" :key="product.id">
      <router-link :to="`/products/${product.id}`">
        {{product.title}} | {{product.price}}
      </router-link>
      <button @click="addToCart(product)">
        {{isProductInCart(product.id) ? 'remove product from cart' : 'add to cart'}}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Products',
  created() {
    this.$store.dispatch('getProducts');
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('toggleItemInCart', product);
    },
    isProductInCart (productId) {
      const t = !!this.$store.state.cartItems.find(el => el.id === productId)
      console.log(t)
      return t;
    }
  }
}
</script>

<style scoped>

</style>