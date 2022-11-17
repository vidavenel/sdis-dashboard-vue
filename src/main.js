import { createApp,h } from 'vue'
import App from './App.vue'

import './style.css'
import * as VueRouter from 'vue-router'
import * as Vue from 'vue'

import Index from "./pages/Index.vue";
import Test from "./pages/Test.vue";
import List from "./pages/List.vue";
import Poj from "./pages/Poj.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Index },
    { path: '/liste', component: List },
    { path: '/test', component: Test },
    { path: '/poj', component: Poj },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app  = createApp({
    render: ()=>h(App)
});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')
