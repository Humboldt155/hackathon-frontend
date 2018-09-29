import Vue from 'vue'
import Vuex from 'vuex'
import client from './modules/client'
import assistant from './modules/assistant'
import current_product from './modules/current_product'
import conversations from './modules/conversations'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    client,
    assistant,
    current_product,
    conversations
  }
  // strict: debug
  // plugins: debug ? [createLogger()] : []
})
