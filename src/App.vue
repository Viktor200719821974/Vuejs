<template>
<!--  <form @submit.prevent="onSubmit">-->
<!--  <input type="text" :value="inputValue" @input="inputValue = $event.target.value">-->
<!--  <input type="text" v-model.number="inputValue">-->
<!--  <input type="checkbox" v-model="isVisible">-->
<!--  <input type="checkbox" @input="isVisible = !isVisible" :value="isVisible">-->
<!--    <button>submit</button>-->
<!--  </form>-->
<!--  <h1>{{inputValue}}</h1>-->
<!--  <button @click="isVisible = !isVisible">toggle list visibility</button>-->
<!--  <br>-->
<!--  <button @click="currentPage = currentPage - 1">prev page</button>-->
<!--  <button>current page: {{currentPage}}</button>-->
<!--  <button @click="currentPage = currentPage + 1">next page</button>-->
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

<!--  <Test v-if="isVisible" :items="filtredItemsMethod()" @removeItem="removeItemFromList"/>-->

<!--  <h1 class="test" v-else-if="!isVisible && counter === 0">some strange condition</h1>-->
<!--  <h1 v-else>List is hidden</h1>-->
<!--  <div  v-show="isVisible">{{user.name}}</div>-->
<!--  <div :style="`font-size:${counter * 10}px`">counter value: {{counter}}</div>-->
<!--  <div :style="{-->
<!--       fontSize: counter * 10 + 'px'-->
<!--  }">counter value: {{counter}}</div>-->
<!--  <div :class="{-->
<!--       test: counter % 2 === 0-->
<!--  }">counter value: {{counter}}</div>-->
<!--  <div :class="[counter % 2 === 0 && 'test']">counter value: {{counter}}</div>-->
<!--  <button v-on:click="incCounter">inc</button>-->

<!--  <h3>{{items[0].text}} <button @click="removeItem(items[0].id)">remove</button></h3>-->
<!--  <h3>{{items].text}} <button @click="removeItem(items[1].id)">remove</button></h3>-->
<!--  <h3>{{items[2].text}} <button @click="removeItem(items[2].id)">remove</button></h3>-->

<!--  <h3 v-for="item of items" :key="item.id">-->
<!--    {{item.text}} <button @click="removeItem(item.id)">remove</button>-->
<!--  </h3>-->
  <ul class="nav">
    <li class="li">
      <router-link to="/">Home</router-link>
    </li>
    <li class="li">
      <router-link to="/test">Test</router-link>
    </li>
    <li class="li">
    <router-link to="/info">info</router-link>
  </li>
  </ul>
  <router-view></router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Test from './components/Test.vue';

export default {
  name: 'App',
  created() {
    this.getTodos();
  },
  mounted() {
    console.log('test mounted');
  },
  // updated() {
  //   console.log('test updated');
  //   this.getTodos();
  // },
  watch: {
    currentPage() {
      this.getTodos();
    },
    inputValue() {
      console.log(this.inputValue);
    }
  },
  data() {
    return {
      inputValue: '',
      isVisible: true,
      pageSize: 10,
      currentPage: 1,
      // items: [{id: 1, text: 'text1'}, {id: 2, text: 'text2'},{id: 3, text: 'text3'}],
      items: [],
      counter: 0,
      userName: 'Taras',
      user: {
        name: 'Vik'
      }
    }
  },
  methods: {
    filtredItemsMethod() {
      return  this.items.filter((el, i) => i % 2 === 0);
    },
    onSubmit() {
      // e.preventDefault();
      console.log(this.inputValue, this.isVisible);
    },
    incCounter() {
      this.counter++;
      this.user.name+='!';
    },
    removeItemFromList(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    async getTodos() {
      const limit = this.currentPage * this.pageSize;
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
      this.items = await response.json();
    }
  },
  components: {
    // HelloWorld,
    // Test,
  },
  computed: {
    filtredItems() {
      return  this.items.filter((el, i) => i % 2 === 0);
    }
  }
}
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
.test {
  background: red;
}
.nav {
  display: flex;
  list-style: none;
}
.li {
  margin: 10px;
}
</style>
