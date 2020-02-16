const root = '/home/'
export default [
    // (resolve) => require(['@/views/chooseCar/index.vue'], resolve)
    { path: `${root}`, component: () => import('@/views/home/Home.vue') }
]
