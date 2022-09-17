<template>
  <header>
    <div>
      <span>Welcome to our shop!</span>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/products" class="link">Products</router-link>
    </div>
    <div :title="carTotalPrice">
      Car items count: {{cart.length}}
<!--      Car total price: {{carTotalPrice}}-->
    </div>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  computed: {
    cart() {
      return this.$store.state.cartItems;
    },
    carTotalPrice() {
        return '$' + this.cart.reduce((acc, el) => (acc += el.price), 0).toFixed(2);
    },
  }
}
</script>

<style scoped>
  header {
    background: #42b983;
    color: white;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
}
  .link {
    margin-left: 14px;
    color: white;
  }
</style>