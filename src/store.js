import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        snakeBar: true
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        REMOVE_TOKEN(state) {
            state.token = null
        },
        COLLAPSE_SNAKE_BAR(state) {
            state.snakeBar = !state.snakeBar
        }
    },
    actions: {}
})
