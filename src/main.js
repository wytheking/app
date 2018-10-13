// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
// import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
// import store from './store'  // store仓库

import './common/stylus/index.styl'

Vue.use(VueRouter)
// Vue.use(VueResource)
// Vue.use(axios)
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 定义路由
var routes = [
  {path: '/', redirect: '/goods'},
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

// 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
// =>是ES6的箭头语法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
