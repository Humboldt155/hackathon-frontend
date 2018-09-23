// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//     client_page: 'https://leroymerlin.ru/catalogue/search/?q=15082555'
//   },
//   mutations: {
//     setClientPage (state, new_url) {
//       state.client_page = new_url
//     }
//   },
//   actions: {
//
//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'
import client from './modules/client'
import assistant from './modules/assistant'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    client,
    assistant
  }
  // strict: debug
  // plugins: debug ? [createLogger()] : []
})
