import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Buefy from 'buefy'

Vue.use(Buefy)
import 'buefy/dist/buefy.css'

import VueCollapse from 'vue2-collapse'
Vue.use(VueCollapse)

import Collapse from 'vue-collapse'
Vue.use(Collapse)

import Chat from 'vue-beautiful-chat'
Vue.use(Chat)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
