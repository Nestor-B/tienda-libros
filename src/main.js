import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue-snap
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'

// Firebase
import './firebase/index'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/all.min.css'
import './assets/css/animate.css'
import './assets/css/main.css'

// JS
import 'bootstrap/dist/js/bootstrap'

createApp(App)
.use(router)
.use(store)
.use(VueSnap)
.mount('#app')
