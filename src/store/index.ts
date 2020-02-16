import Vue from 'vue'
import Vuex from 'vuex'
import homeVuexConfig from './home/index'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        homeVuexConfig
    }
})
