<template>
  <div>
      <br>
      <div class="columns">
          <div class="column is-one-fifth">
              <div class="tile is-ancestor">
                  <div class="tile is-vertical is-parent">
                    <div class="tile is-child box" style="background-color: #f9f9f9">
<!------------------------------------------ СПИСОК КЛИЕНТОВ  ---------------------------------->
                        <p class="title is-4">CLIENTS</p>
                        <b-table
                            :data="active_clients"
                            :columns="clients_columns"
                            :selected.sync="selected"
                            :focusable=false
                            :bordered=false
                        >
                        </b-table>
                    </div>
<!------------------------------------------ КОРЗИНА АКТИВНОГО КЛИЕНТА  ---------------------------------->
                    <div class="tile is-child box">
                      <p class="subtitle">{{ current_client.name.concat("\'s") }} basket</p>
                        <table class="table">
                            <tbody>
                                <tr v-for="item in current_basket">
                                    <td>{{ item.product_id }}</td>
                                    <td>
                                        <img :src="'https://res.cloudinary.com/lmru/image/upload/w_50,h_50,c_pad,b_white,d_photoiscoming.png/LMCode/'.concat(item.product_id, '.jpg')" alt="">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
                </div>
          </div>
          <div class="column">

              <div class="tile is-ancestor">
                  <div class="tile is-vertical is-parent">
                      <div class="tile is-child box">
<!------------------------------------------ ДАННЫЕ ОБ АКТИВНОМ КЛИЕНТЕ  ---------------------------------->
                          <nav class="level">
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Name</p>
                                  <p class="title is-5">{{ current_client.name }}</p>
                                </div>
                               </div>
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Sity</p>
                                  <p class="title is-5">{{ current_client.Sity }}</p>
                                </div>
                              </div>
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Favorite store</p>
                                  <p class="title is-5">{{ current_client.favorite_shop }}</p>
                                </div>
                              </div>
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Quartile</p>
                                  <p class="title is-5">{{ current_client.quartile }}</p>
                                </div>
                              </div>
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Email</p>
                                  <p class="title is-5">{{ current_client.email }}</p>
                                </div>
                              </div>
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Telephone</p>
                                  <p class="title is-5">{{ current_client.telephone }}</p>
                                    <a class="button is-rounded is-primary">
                                        <b-icon
                                            icon="phone-forward"
                                            size="is-small">
                                        </b-icon>
                                    </a>
                                </div>
                              </div>
                              <div class="level-item has-text-centered">
                                  <div>
                                      <p class="heading">Card №</p>
                                      <p class="title is-6">{{ current_client.card }}</p>
                                  </div>
                              </div>
                          </nav>
                      </div>
                      <div class="tile is-child box">
                          <b-tabs v-model="activeTab">
                              <b-tab-item label="Product">
                                  <product></product>
                              </b-tab-item>
                              <b-tab-item label="Client">
                                  <client-info></client-info>
                              </b-tab-item>
                              <b-tab-item label="Project">
                                  <project></project>
                              </b-tab-item>
                              <b-tab-item label="Map">
                                  <map></map>
                              </b-tab-item>
                              <b-tab-item label="Proposal">
                                  <statistics></statistics>
                              </b-tab-item>
                              <b-tab-item label="Statistic & History">
                                  <statistics></statistics>
                              </b-tab-item>
                          </b-tabs>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <beautiful-chat
      :participants="participants"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom" />
  </div>
</template>

<script>

import Product from './Product.vue'
import ClientInfo from "./ClientInfo";
import Project from "./Project";
import Statistics from "./Statistics";
import Proposal from "./Proposal";

  export default {
  name: 'sccistant',
  data() {
    return {
      interval: null,
      participants: [
        {
          id: 'user1',
          name: 'Veronika',
          imageUrl: ''
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      messageList: [
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } },
          { type: 'text', author: `me`, data: { text: `Say yes!` } },
          { type: 'text', author: `user1`, data: { text: `No.` } }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#41c065',
          text: '#ffffff'
        },
        launcher: {
          bg: '#41c065'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        receivedMessage: {
          bg: '#41c065',
          text: '#ffffff'
        },
        userInput: {
          bg: '#eff2f4',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      clients_columns: [
          {
              field: 'name',
              label: ''
          }
      ],
      selected: null
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    },
    loadData: function () {
      this.$store.commit('assistant/getActiveClients')
    },
    setClient (username) {
      this.$store.commit('assistant/setClient', username)
    }
  },
      // функция запускается каждые 2 секунды, обновляя список клиентов
      mounted: function () {
        this.$nextTick(function () {
          window.setInterval(() => {
            this.loadData()
          }, 4000)
        })
      },
      computed: {
        active_clients() {
            try {
				if (this.selected !== null) {
                this.setClient(this.selected.username)
            }
			} catch (error) {
				console.log(error);
            }
          let clients = this.$store.state.assistant.active_clients
          this.selected = clients.filter(client => client.username === this.$store.state.assistant.current_client.username)[0]
          return this.$store.state.assistant.active_clients
        },
        current_client() {
            let c_client = this.$store.state.assistant.current_client
            this.participants = [
                {
                  id: c_client.username,
                  name: c_client.name,
                  imageUrl: ''
                }
              ]
            return c_client
        },
        current_basket() {
            let c_client = this.$store.state.assistant.current_client
            let baskets = this.$store.state.assistant.baskets
            return baskets[c_client.username]
        }
      },
      components: {
          Proposal,
          Statistics,
          Project,
          ClientInfo,
          Product
      }
}
</script>
