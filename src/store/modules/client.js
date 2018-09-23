

// initial state
// shape: [{ id, quantity }]
const state = {
    client_page: 'https://leroymerlin.ru/catalogue/search/?q=15082555'
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
    setClientPage (state, new_url) {
      state.client_page = new_url
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
