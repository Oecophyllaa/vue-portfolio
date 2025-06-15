// import './assets/main.css'
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Import custom styles
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
