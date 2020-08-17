import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
// console.log(111, q)
import { createWebHashHistory, createRouter } from "vue-router"

import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            // children: [
            //     { path:'swich',component: require},
            //     { path: 'button', component: require }
            //     { path: 'dialog', component: require }
            //     { path: 'tabs', component: require }
            // ]
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
