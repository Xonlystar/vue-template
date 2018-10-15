import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import login from './modules/login'

Vue.use(Vuex)

export default new Vuex.Store({
  // 根级状态存放
  state: {

  },
  // 根级别的 mutation
  mutations,
  // 根级别的 action
  actions,
  modules: {
    login
  }
})
