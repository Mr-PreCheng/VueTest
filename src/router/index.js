import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/router'

Vue.use(Router)

export default new Router({
  routes:routes  // 也可以直接用ES6的语法  routes
})