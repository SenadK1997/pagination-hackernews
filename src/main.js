import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'; // moras ovako ubaciti ove hookove
import {createStore} from 'vuex'; // vuex importanje za vuex4 i vue3

import App from './App.vue'
import './style.css'

/* od linije 6 do 21 bi trebalo da stanuje u posebnom file-u, ali moze i ovako za sada */
import LoginPage from './components/LoginPage.vue'
import MainPage from './components/MainPage.vue'

const routes = [
    {
        path: '/login/',
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

// Create a new store instance.
const store = createStore({
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
            document.cookie = 'count=' + state.count
        }
    }
})

function getCookie(cookieName) {
    let name = cookieName + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if ((c.indexOf(name)) == 0) {
            return c.substr(name.length);
        }

    }
    return null;
}

const coo = getCookie('count')

createApp(App)
    .use(router) // koristimo ruter
    .use(store)
    .mount('#app'); // mountamo aplikaciju
