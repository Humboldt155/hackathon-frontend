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
    conversations: {
        client1: [
            {type: '', author: '', data: {text: ''}}
        ],
        client2: [
            {type: '', author: '', data: {text: ''}}
        ],
        client3: [
            {type: '', author: '', data: {text: ''}}
        ],
        client4: [
            {type: '', author: '', data: {text: ''}}
        ]
    },
    users_conversation: [
        {type: '', author: '', data: {text: ''}}
    ]
}

// getters
const getters = {
}

// actions
const actions = {
}

// mutations
const mutations = {
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
                  let conversations = resp.data
                  state.conversations = conversations
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
