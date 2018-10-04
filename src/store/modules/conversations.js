// initial state
// shape: [{ id, quantity }]

import axios from 'axios'

var config = { headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*'}}

const host = 'http://127.0.0.1:5000/'
const urlGetChats = host + 'get_chats/'
const urlGetUserChat = host + 'get_user_chat'
const urlSendMessage = host + 'send_message'

const state = {
    isNegativeMessage: false,
    current_usert_mood: 0,
    NegativeText: '',
    NegativePercent: '',
    statistics: {
        client1: [
            {req: 0, resp: 0, type: '', text: '', code: '', mood: '', total_mood: ''}
        ],
        client2: [
            {req: 0, resp: 0, type: '', text: '', code: '', mood: '', total_mood: ''}
        ],
        client3: [
            {req: 0, resp: 0, type: '', text: '', code: '', mood: '', total_mood: ''}
        ],
        client4: [
            {req: 0, resp: 0, type: '', text: '', code: '', mood: '', total_mood: ''}
        ]
    },
    conversations: {
        client1: [
            {type: '', author: '', data: {text: ''}, mood: 0, total_value: 0}
        ],
        client2: [
            {type: '', author: '', data: {text: ''}, mood: 0, total_value: 0}
        ],
        client3: [
            {type: '', author: '', data: {text: ''}, mood: 0, total_value: 0}
        ],
        client4: [
            {type: '', author: '', data: {text: ''}, mood: 0, total_value: 0}
        ]
    },
    users_conversation: [
        {type: '', author: '', data: {text: ''}}
    ],
    moods: {
        client1: {all: [], total: 0},
        client2: {all: [], total: 0},
        client3: {all: [], total: 0},
        client4: {all: [], total: 0}
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
    offNegativeMessage (state) {
        state.isNegativeMessage = false
    },
    setMessage (state, data) {
        let username = data[1]
        let text = data[0].toString()
        // console.log(text)
        let author = data[2]
        axios( urlSendMessage,
            {
                method: 'GET',
                params: {
                    user: username,
                    name: text,
                    type: 'text',
                    author: author,
                    price: 0,
                    code: 0
                }
            })
              .then(resp => {
                  let response = resp.data
                  if (!response.accepted) {
                      // console.log(response)
                      state.isNegativeMessage = true
                      state.NegativeText = response.text
                      state.NegativePercent = response.neg
                  }
                  // state.conversations = conversations
              })
              .catch(err => {
                console.log(err)
              })
    },
    sendCode (state, data) {
        let username = data[0]
        let code = data[1].toString()
        let name = data[2].toString()
        let price = data[3].toString()
        let author = data[4]
        axios( urlSendMessage,
            {
                method: 'GET',
                params: {
                    user: username,
                    name: name,
                    type: 'file',
                    author: author,
                    price: price,
                    code: code
                }
            })
              .then(resp => {
                  state.conversations = resp.data
              })
              .catch(err => {
                console.log(err)
              })
    },
    getChats (state) {
            axios({
              url: urlGetChats,
              method: 'GET'
            })
              .then(resp => {
                  state.conversations = resp.data
              })
              .catch(err => {
                console.log(err)
              })
    },
    getUserChat (state, username) {
            axios( urlGetUserChat,
                {
                  method: 'GET',
                  params: {
                      user: username
                    }
                })
              .then(resp => {
                  state.users_conversation = resp.data
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
