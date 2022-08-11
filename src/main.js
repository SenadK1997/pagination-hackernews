import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'; // moras ovako ubaciti ove hookove
import App from './App.vue'
import './style.css'

/* od linije 6 do 19 bi trebalo da stanuje u posebnom file-u, ali moze i ovako za sada */
import LoginPage from './components/LoginPage.vue'
import MainPage from './components/MainPage.vue'

const routes = [
    {
        path: '/login',
        name: 'login', // probaj uvijek da dajes imena rutama koja su slicna pathu jer ce biti lakse prepoznat rute i navigirati njima
        component: LoginPage
    },
    {
        path: '/',
        name: 'home', // probaj uvijek da dajes imena rutama koja su slicna pathu jer ce biti lakse prepoznat rute i navigirati njima
        component: MainPage
    }
];

const router = new createRouter({
    history: createWebHistory(), // historija ruta, tj. mozes koristiti posebne metode $router.back itd
    routes // rute sto smo gore definisali
});

createApp(App)
    .use(router) // koristimo ruter
    .mount('#app'); // mountamo aplikaciju
