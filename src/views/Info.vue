<template>
<h1>Info</h1>
  <ul class="nav-info">
    <li v-for="user of users" :key="user.id">
      <router-link :to="`/info/${user.id}`">{{ user.name }}</router-link>
    </li>
<!--    <li class="li">-->
<!--      <router-link to="/info/child2">Children2</router-link>-->
<!--    </li>-->
  </ul>
  <router-view></router-view>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Info',
  created() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then((res) => res.json())
        .then((data) => {
          this.users = data;
        });
  },
  data () {
    return {
      users: [],
    }
  }
}
</script>

<style scoped>
.nav-info {
  list-style: none;

}
</style>