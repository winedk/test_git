// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
// 这是dev1
// 这是dev
// 这是dev
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
