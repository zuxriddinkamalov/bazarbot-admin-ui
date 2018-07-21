import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
      SET_TOKEN (state, token) {
          state.token = token
      },
      REMOVE_TOKEN (state) {
          state.token = null
      }
  },
  actions: {

  }
})
