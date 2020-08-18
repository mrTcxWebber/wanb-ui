import { createWebHashHistory, createRouter } from "vue-router"

import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc',
            component: Doc,
            children: [
                { path: 'switch', component: () => import('./components/Switch.vue') },
                { path: 'button', component: () => import('./components/Button.vue') },
                { path: 'dialog', component: () => import('./components/Dialog.vue') },
                { path: 'tabs', component: () => import('./components/Tabs.vue') }
            ]
        }
    ]
})
