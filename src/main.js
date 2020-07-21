// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 1
// 222
333
// 分支dev修改
/* eslint-disable no-new */
/* fixed*/
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
