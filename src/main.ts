import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.scss'
import { Field } from 'vant'
Vue.config.productionTip = false
Vue.use(Field)
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
