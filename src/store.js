import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '掌柜',
    usertelphone: 15549052130,
  },
  mutations: {
    changeusername(state, str) {
      state.username = str
    }
  },
  actions: {

  }
})
