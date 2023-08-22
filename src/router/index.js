
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
        path: '/show',
        name: 'show',
        component: ShowWeb
    },
    {
        path: '/:url',
        name: 'url',
        component: ShowWeb,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async(to, from, next)=>{
    console.log(to.path);
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