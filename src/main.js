import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './plugins/router'

import './plugins/axios'
import './plugins/VueInfiniteLoading'

import './utils/polyfill'

import '@/assets/styles/main.scss'
import '@drewbot/sass-flexbox-grid/public/sass-flexbox/main.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
