<template>
  <h1>User details:</h1>

  <ul v-if="userInfo">
    <li>Name: {{userInfo.name}}</li>
    <li>Email: {{userInfo.email}}</li>
    <li>Username: {{userInfo.username}}</li>
    <li>Phone: {{userInfo.phone}}</li>
    <li>Website: {{userInfo.website}}</li>
  </ul>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Children1',
  watch: {
    "$route.params.id": {
      handler() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
            .then((res) => res.json())
            .then((data) => {
              this.userInfo = data;
            });
      },
      deep: true,
      immediate: true
    }
  },
  created() {
  },
  data () {
    return {
      userInfo: {},
    }
  }
}
</script>

<style scoped>

</style>