import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    client_page: 'https://leroymerlin.ru/catalogue/search/?q=15082555'
  },
  mutations: {
    setClientPage (state, new_url) {
      state.client_page = new_url
    }
  },
  actions: {

  }
})
