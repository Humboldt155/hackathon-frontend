import axios from 'axios'

const host = 'http://127.0.0.1:5000/'
const urlGetActiveClients = host + 'getactiveclients/'

// initial state
// shape: [{ id, quantity }]
const state = {
  active_clients: [],
  current_client: null,
  baskets: {
    'client1': [
        {'product_id': '18745334'}
     ],
     'client2': [
        {'product_id': '14129606'},
        {'product_id': '18614174'}
     ],
     'client3': [
        {'product_id': '16372298'}
     ]
  }
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
          let clients = resp.data
          state.active_clients = clients
          if (state.current_client == null && clients.length >= 1) {
            state.current_client = clients[0]
            console.log(state.current_client)
          }
      })
      .catch(err => {
        console.log(err)
      })
  },
    setClient (state, username) {
      state.current_client = state.active_clients.filter(client => client.username == username)[0]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
