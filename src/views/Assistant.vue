<template>
  <section>
      <br>
      <!------------------------------------------ WARNING  ---------------------------------->
      <b-modal :active.sync="isNegativeMessage" :width="640">
            <div class="card" style="position: fixed; top: 100px">
                <header class="card-header">
                    <p class="card-header-title">
                      warning
                    </p>
                </header>
                <div class="card-content">
                    <div class="content">
                        <p>There is a <span class="subtitle" style="color: darkmagenta">{{ NegativePercent }}</span> chance that your message is <span class="subtitle" style="color: darkmagenta">too negative</span>:</p>
                        <p class="subtitle">"{{ NegativeText }}"</p>
                        <p>Please, change it. If you feel tired or irritated, ask your colleague to replace you, and take a rest :)</p>
                        <a class="button is-primary" @click="offNegativeMessage">Ok</a>
                    </div>
                </div>
            </div>
        </b-modal>
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
                    <div class="tile is-child box is-scrollable ">
                      <p class="subtitle">{{ current_client.name.concat("\'s") }} basket</p>
                        <table class="table" style="max-height: 400px; overflow: auto">
                            <tbody >
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
                  <div class="tile is-vertical">
                      <div class="tile">
                          <div class="tile is-parent">
                              <div class="tile is-child box">
<!------------------------------------------ ДАННЫЕ ОБ АКТИВНОМ КЛИЕНТЕ  ---------------------------------->
                                  <nav class="level">
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Name</p>
                                  <p class="title is-5">{{ current_client.name }}</p>
                                </div>
                               </div>
                              <!--<div class="level-item has-text-centered">-->
                                <!--<div>-->
                                  <!--<p class="heading">Sity</p>-->
                                  <!--<p class="title is-5">{{ current_client.Sity }}</p>-->
                                <!--</div>-->
                              <!--</div>-->
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Favorite store </p>
                                    <p class="title is-5">{{ current_client.favorite_shop }}<span class="subtitle is-6"> ({{ current_client.Sity }})</span></p>
                                </div>
                              </div>
                              <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Quartile</p>
                                  <p class="title is-5">
                                      <a class="button is-warning">{{ current_client.quartile }}</a>
                                  </p>
                                </div>
                              </div>
                                      <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Loyalty</p>
                                  <p class="title is-5">
                                      <a class="button is-success"> 4.2 </a>
                                  </p>
                                </div>
                              </div>
                                      <div class="level-item has-text-centered">
                                <div>
                                  <p class="heading">Current projects:</p>
                                  <p class="title is-5">
                                      <p class="title is-5">Kitchen: <span class="subtitle is-5">76% </span><span>
                                                                            <b-icon
                                            icon="arrow-down"
                                            style="color: orange;"
                                            size="is-small">
                                        </b-icon>
                                </span></p>
                                    <p class="title is-5">Flooring: <span class="subtitle is-5">90% </span><span>
                                        <b-icon
                                            icon="arrow-up"
                                            style="color: darkgreen;"
                                            size="is-small">
                                        </b-icon>
                                    </span></p>
                                </div>
                              </div>

                          </nav>
                              </div>
                          </div>
                      </div>
                      <div class="tile box">
                          <b-tabs v-model="activeTab">
                              <b-tab-item label="Product">
                                  <product></product>
                              </b-tab-item>
                              <b-tab-item label="Proposal">
                                  <proposal></proposal>
                              </b-tab-item>
                              <b-tab-item label="Client">
                                  <client-info></client-info>
                              </b-tab-item>
                              <b-tab-item label="Project">
                                  <project></project>
                              </b-tab-item>
                              <b-tab-item label="Map">
                                  <client-map></client-map>
                              </b-tab-item>
                              <b-tab-item label="Statistic & History">
                                  <statistics></statistics>
                              </b-tab-item>
                          </b-tabs>

                      </div>
                      <!--<div class="tile box">-->
                          <!--{{ colors }}-->
                      <!--</div>-->
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
  </section>
</template>

<script>

import Product from './Product.vue'
import ClientInfo from "./ClientInfo";
import Project from "./Project";
import Statistics from "./Statistics";
import Proposal from "./Proposal";
import ClientMap from "./ClientMap";

    function round(v) {
        return (v >= 0 || -1) * Math.round(Math.abs(v), -1);
    }

  export default {
  name: 'sccistant',
  data() {
    return {
      interval: null,
      activeTab: null,
      mood_colors: {
          '-1': '#ec665e',
          '-0.9': '#f67b5c',
          '-0.8': '#f67d5f',
          '-0.7': '#f6965e',
          '-0.6': '#f6a663',
          '-0.5': '#f6ca54',
          '-0.4': '#f6cf53',
          '-0.3': '#f6d052',
          '-0.2': '#f6df27',
          '-0.1': '#d2c922',
          '0': '#cacbc9',
          '0.1': '#caec46',
          '0.2': '#9dec3f',
          '0.3': '#6dec2f',
          '0.4': '#6aec40',
          '0.5': '#41c065',
          '0.6': '#41c065',
          '0.7': '#41c065',
          '0.8': '#41c065',
          '0.9': '#41c065',
          '1': '#41c065',
      },
      participants: [
        {
          id: 'user1',
          name: 'Veronika',
          imageUrl: ''
        }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: true, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
        // specifies the color scheme for the component
      alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
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
    sendMessage (text, ) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
        // console.log(this.$store.state.assistant.current_client["username"])
      let c_client = this.$store.state.assistant.current_client.username
      this.$store.commit('conversations/setMessage', [message.data.text, c_client, 'me'])
      // called when the user sends a message
      // this.messageList = [ ...this.messageList, message ]
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
    setClient (username) {
          this.$store.commit('assistant/setClient', username)
        },
     loadChats: function () {
          this.$store.commit('conversations/getChats')
        },
     offNegativeMessage: function () {
          this.$store.commit('conversations/offNegativeMessage')
        }
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
        },
        messageList() {
            let c_client = this.$store.state.assistant.current_client.username
            return this.$store.state.conversations.conversations[c_client]
        },
        isNegativeMessage() {
            return this.$store.state.conversations.isNegativeMessage
        },
        NegativeText() {
            return this.$store.state.conversations.NegativeText
        },
        NegativePercent() {
            return this.$store.state.conversations.NegativePercent
        },
        colors() {
            let c_client = this.$store.state.assistant.current_client.username
            let last_message = this.$store.state.conversations.conversations[c_client].slice(-1)[0]
            let head_color = (Math.round(last_message.total_value * 10)/10).toString()
            let color_code = this.mood_colors[head_color]
            return {
                header: {
                    smth: Math.round(last_message.total_value * 10)/10,
                    bg: color_code,
                        // bg: '#41c065',
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
            }
        }
      },
      components: {
          Proposal,
          Statistics,
          Project,
          ClientInfo,
          Product,
          ClientMap
      },
      // функция запускается каждые 2 секунды, обновляя список клиентов
      mounted: function () {
        this.$nextTick(function () {
          window.setInterval(() => {
            this.loadChats()
          }, 2000)
        })
      }
}
</script>

<style>

</style>

    // loadChats: function () {
    //   this.$store.commit('conversations/getChats')
    // },

      // функция запускается каждые 2 секунды, обновляя список клиентов
      // mounted: function () {
      //   this.$nextTick(function () {
      //     window.setInterval(() => {
      //       this.loadChats()
      //     }, 2000)
      //   })
      // }

