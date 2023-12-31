
import { createRouter, createWebHashHistory } from 'vue-router';
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
        name: 'url',
        component: ShowWeb,
        props: true
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async(to, from, next)=>{
    if(to.path==='/'){
        next()
    }else{
        router.addRoute({
            path: to.path,
            component: ShowWeb
        })
        next()
    }
})


export default router