import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import './variaveis.css'
import App from './App.vue'
import VueLazy from 'vue3-lazy'

const routes = [
  { path: '/', 
    component: () => import('./pages/Main.vue') },
  { path: '/login', 
    component: () => import('./pages/Login.vue') },

    { path: '/admin', 
    component: () => import('./pages/Admin.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.use(VueLazy, {
  loading: '',
  error: ''
})
app.mount('#app')

