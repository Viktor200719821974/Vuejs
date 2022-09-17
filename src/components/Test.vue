<template>
  <h2>Test</h2>
<!--<h1>test component {{text}}</h1>-->
<!--  <button @click="logger">log</button>-->
<!--  <h3 v-for="item of items" :key="item.id">-->
<!--    {{item.title}} <button class="test" @click="removeItem(item.id)">remove</button>-->
<!--  </h3>-->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Test',
  unmounted() {
    console.log('test unmounted');
  },
  // props: ['text'],
  props: {
    // text: {
    //   type: String,
    //   required: true
    // },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    logger() {
      // this;
    },
    removeItem(id) {
      this.$emit('removeItem', id)
      // this.items = this.items.filter(item => item.id !== id);
    }
  },
  emits: ['removeItem']
}
</script>

<style scoped>
/*.test {*/
/*  background: green;*/
/*}*/
</style>