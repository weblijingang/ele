const root = '/login/'
export default [
    // (resolve) => require(['@/views/chooseCar/index.vue'], resolve)
    { path: `${root}`, component: () => import('@/views/Login.vue') }
]
