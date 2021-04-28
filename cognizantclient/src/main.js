import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueProgressBar from "@aacassandra/vue3-progressbar"
import VueSweetalert2 from 'vue-sweetalert2'

axios.defaults.baseURL = 'http://cognizant.test/cognizantapi/public'
axios.defaults.withCredentials = true
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

store.dispatch('auth/me').then(() => {
    createApp(App)
                .use(store)
                .use(router)
                .use(VueProgressBar, {
                    color: "#ED2039",
                    failedColor: "#874b4b",
                    thickness: "5px",
                    transition: {
                        speed: "1s",
                        opacity: "0.6s",
                        termination: 300,
                    },
                    autoRevert: true,
                    location: "top",
                    inverse: false,
                })
                .use(VueSweetalert2, {
                    toast: true,
                    position: 'top-right',
                    iconColor: 'white',
                    customClass: {
                        popup: 'colored-toast'
                    },
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                })
                .mount('#app')
})
