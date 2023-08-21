
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
import ShowWeb from '../components/ShowWeb.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/:url',
        name: 'show',
        component: ShowWeb
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router