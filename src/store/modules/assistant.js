import axios from 'axios'

const host = 'http://127.0.0.1:5000/'
const urlGetActiveClients = host + 'getactiveclients/'

// initial state
// shape: [{ id, quantity }]
const state = {
  active_clients: []
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
  getActiveClients (state) {
    axios({
      url: urlGetActiveClients,
      method: 'GET'
    })
      .then(resp => {
        state.active_clients = resp.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
