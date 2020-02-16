import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
let routes = [
    { path: '/', redirect: '/home/' }, // 入口重定向
    { path: '*', component: () => import('@/views/notfound.vue') } // 路由不存在
]
const routerContext = require.context('./', true, /index\.ts$/)
routerContext.keys().forEach(route => {
    if (route.startsWith('./index.ts')) {
        return
    }
    const routerModule = routerContext(route)
    routes = [...(routerModule.default || routerModule), ...routes]
})
const router = new VueRouter({
    routes
})
export default router
