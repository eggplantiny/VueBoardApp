import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Playground from '@/views/Playground'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Playground',
        name: Playground.name,
        component: Playground
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

