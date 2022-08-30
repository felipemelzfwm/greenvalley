import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    loggedIn: false
  },
  getters: {
  },
  mutations: {
    loggedIn (state, value) {
      state.loggedIn = value
    }
  },
  actions: {
  },
  modules: {
  }
})
