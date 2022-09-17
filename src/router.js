import {createRouter, createWebHashHistory}  from "vue-router";
// import Test from "@/components/Test";
// import Info from "./views/Info";
// import UserDetails from "@/views/UserDetails";
import Products from "@/views/Products";
import ProductDetails from "@/views/ProductDetails";
import Home from "@/views/Home";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/products', component: Products},
        {path: '/products/:id', component: ProductDetails},
        // {path: '/test', component: Test},
        // {path: '/info', component: Info, children: [
        //         {path: '/info/:id', component: UserDetails},
        //     ]},
    ],
});