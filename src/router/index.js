import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.js'

Vue.use(Router)

// const routes = routemap

console.log(routes)

// new Router创建实例
export default new Router({
  mode: 'history', // 去除锚点#
  routes: routes  // 也可以直接用ES6的语法  routes
})