import Vue from 'vue'
import Vuex from 'vuex'
import * as checkmobile from './modules/checkMobile'
import * as checkDarkMode from './modules/checkDarkMode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    checkmobile,
    checkDarkMode
  }
})
