import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import { router } from './router';

const store = createStore({
    state () {
        return {
            count: 0,
            products: [],
            selectedProduct: null,
            cartItems: []
        }
    },
    mutations: {
        increment (state) {
            state.count++;
        },
        setProducts (state, payload) {
            state.products = payload;
        },
        setProduct (state, payload) {
            state.selectedProduct = payload;
        },
        clearSelectedProduct (state) {
            state.selectedProduct = null;
        },
        removeFromCart (state, payload) {
            console.log('remove');
            console.log(payload.id)
            state.cartItems.filter(el => el.id !== payload.id);
        },
        addToCart (state, payload) {
            console.log('add')
            state.cartItems.push(payload);
        }
    },
    actions: {
        increment ({commit}, payload) {
            // console.log(context, payload);
            commit('increment', payload);
        },
        async getProducts ({commit}) {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            commit('setProducts', data);
        },
        async getProductById ({commit}, productId) {
            const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await response.json();
            commit('setProduct', data);
        },
        async toggleItemInCart ({state, commit}, product) {
            const mutation = state.cartItems.find(item => item.id === product.id) ? 'removeFromCart' : 'addToCart';
            commit(mutation, product);
        }
    },
    getters: {
        multipliedCounter (state, getters) {
            return state.count * getters.testGetters;
        },
        testGetters () {
            return 16;
        }
    }
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
