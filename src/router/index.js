import Vue from 'vue'
import VueRouter from 'vue-router'

const cart = () => import('@/views/cart/cart')
const Home = () => import("@/views/Home/home")
const profile = () => import('@/views/profile/profile')
const category = () => import('@/views/category/category')

Vue.use(VueRouter)


//映射关系
const routes = [
    {
        path: '',
        redirect: "/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: category
    },
    {
        path: "/cart",
        component: cart
    },
    {
        path: "/profile",
        component: profile
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
