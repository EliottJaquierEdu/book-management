import { createApp } from 'vue'
import './assets/scss/global.scss'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        name: "SearchPage",
        component: () => import("./pages/SearchPage.vue")
    },
    {
        path: "/book/:id",
        name: "BookDetailPage",
        component: () => import("./pages/BookDetailPage.vue")
    }
];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app= createApp(App)
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')