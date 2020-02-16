import request from '@/utils/api'
import { State, HomeContent, ShopContent } from './interface'
import { ActionContext } from 'vuex'
const GET_HOMEDATA = 'GET_HOMEDATA'
const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST'
const state = {
    homeList: [],
    productsList: []
}
const getters = {}
const mutations = {
    [GET_HOMEDATA] (state: State, res: Array<HomeContent>) {
        state.homeList = res
    },
    [GET_PRODUCTS_LIST] (state: State, res: Array<ShopContent>) {
        state.productsList = res
    }
}
const actions = {
    getHomeData ({ commit }: ActionContext<State, any>) {
        request.get('/v2/index_entry').then((res) => {
            commit('GET_HOMEDATA', res.data.data)
        })
    },
    getProductsData ({ commit }: ActionContext<State, any>) {
        request.get('/shopping/restaurants', {
            params: {
                categoryid: 2,
                orderby: 1,
                latitude: 39.938564,
                longitude: 116.331684
            }
        }).then((res) => {
            commit('GET_PRODUCTS_LIST', res.data.data)
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
