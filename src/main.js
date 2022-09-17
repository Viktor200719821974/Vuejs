// import { createApp } from 'vue';
// import App from './App.vue';
// import { router } from './router';
//
// const app = createApp(App).use(router);
// app.mount('#app');

import {createRouter, createWebHashHistory}  from "vue-router";
import Test from "@/components/Test";
import App from "@/App";
import {createApp} from "vue";
import Info from "./views/Info";
import UserDetails from "@/views/UserDetails";
import Home from "@/views/Home";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/test', component: Test},
        {path: '/info', component: Info, children: [
                {path: '/info/:id', component: UserDetails},
            ]},
    ],
});

const app = createApp(App).use(router);

app.mount('#app');
