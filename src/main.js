import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import LoginPage from '../src/components/LoginPage'
import MainPage from '../src/components/MainPage'


createApp.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/main-page',
        component: MainPage
    }
];

const router = new VueRouter({
    routes
});

new createApp({
    el: '#app',
    router,
    render: h => h(App)
});
