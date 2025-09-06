import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './style.css'
import './variaveis.css'
import App from './App.vue'

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
  
createApp(App).use(router).mount('#app')

