import axios from 'axios'

const host = 'http://127.0.0.1:5000/'
const urlGetActiveClients = host + 'getactiveclients/'

// initial state
// shape: [{ id, quantity }]
const state = {
  active_clients: [
      {
            username: 'client1',
            card: '98675646364748585',
            password: 'jump155',
            name: 'Veronika',
            telephone: '+7 (495) 786-543-21',
            email: 'veronica@jump.com',
            favorite_shop: 'Vidnoe',
            favorite_shop_accepted: false,
            Sity: 'Moscow',
            is_authorized: true,
            quartile: 3
        },
        {
            username: 'client2',
            card: '95342673830484115',
            password: 'jump155',
            name: 'Petr',
            telephone: '+7 (495) 763-234-21',
            email: 'artem@jump.com',
            is_authorized: true,
            favorite_shop: 'Troyka',
            favorite_shop_accepted: false,
            Sity: 'Moscow',
            quartile: 2
        },
        {
            username: 'client3',
            card: '98623243564675685',
            password: 'jump155',
            name: 'Nail',
            telephone: '+7 (495) 987-234-43',
            email: 'nail@jump.com',
            is_authorized: true,
            favorite_shop: 'Kollontai',
            favorite_shop_accepted: false,
            Sity: 'Saint Petersburg',
            quartile: 2
        },
        {
            username: 'client4',
            card: '98623243564675685',
            password: 'jump155',
            name: 'Artem',
            telephone: '+7 (495) 987-234-43',
            email: 'nail@jump.com',
            is_authorized: true,
            favorite_shop: 'Kollontai',
            favorite_shop_accepted: false,
            Sity: 'Saint Petersburg',
            quartile: 1
        }
  ],
  current_client: {
            username: 'client1',
            card: '98675646364748585',
            password: 'jump155',
            name: 'Veronika',
            telephone: '+7 (495) 786-543-21',
            email: 'veronica@jump.com',
            favorite_shop: 'Vidnoe',
            favorite_shop_accepted: false,
            Sity: 'Moscow',
            is_authorized: true,
            quartile: 3
  },
  baskets: {
    'client1': [
        {'product_id': '18745334'},
        {'product_id': '14129606'},
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
  // getActiveClients (state) {
  //   axios({
  //     url: urlGetActiveClients,
  //     method: 'GET'
  //   })
  //     .then(resp => {
  //         let clients = resp.data
  //         state.active_clients = clients
  //         if (state.current_client == null && clients.length >= 1) {
  //           state.current_client = clients[0]
  //           console.log(state.current_client)
  //         }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // },
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
