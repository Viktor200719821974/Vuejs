<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <button @click="isVisible = !isVisible">toggle list visibility</button>
  <Test v-if="isVisible" :items="items" @removeItem="removeItemFromList" :text="userName"/>
  <h1 v-else-if="!isVisible && counter === 0">some strange condition</h1>
  <h1 v-else>List is hidden</h1>
  <div v-show="isVisible">{{user.name}}</div>
  <div>counter value: {{counter}}</div>
  <button v-on:click="incCounter">inc</button>

<!--  <h3>{{items[0].text}} <button @click="removeItem(items[0].id)">remove</button></h3>-->
<!--  <h3>{{items].text}} <button @click="removeItem(items[1].id)">remove</button></h3>-->
<!--  <h3>{{items[2].text}} <button @click="removeItem(items[2].id)">remove</button></h3>-->

<!--  <h3 v-for="item of items" :key="item.id">-->
<!--    {{item.text}} <button @click="removeItem(item.id)">remove</button>-->
<!--  </h3>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Test from './components/Test.vue';

export default {
  name: 'App',
  data() {
    return {
      isVisible: true,
      items: [{id: 1, text: 'text1'}, {id: 2, text: 'text2'},{id: 3, text: 'text3'}],
      counter: 0,
      userName: 'Taras',
      user: {
        name: 'Vik'
      }
    }
  },
  methods: {
    incCounter() {
      this.counter++;
      this.user.name+='!';
    },
    removeItemFromList(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    toggleListVisibility() {

    }
  },
  components: {
    // HelloWorld,
    Test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
