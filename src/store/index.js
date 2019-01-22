// vuex 状态管理工具
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'
import user from './module/user' //将user模块导进来

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules:{
    user
  }
})
