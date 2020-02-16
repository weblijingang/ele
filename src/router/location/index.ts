const root = '/location/'
export default [
    // (resolve) => require(['@/views/chooseCar/index.vue'], resolve)
    { path: `${root}`, component: () => import('@/views/Location.vue') }
]
