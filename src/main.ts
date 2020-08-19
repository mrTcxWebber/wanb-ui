import './lib/wanbUi.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
// console.log(111, q)
import { router } from "./router"

const app = createApp(App)
app.use(router)
app.mount('#app')
