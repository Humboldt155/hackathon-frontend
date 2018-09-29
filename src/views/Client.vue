<template>
  <section>
    <b-select v-model="selected_user" placeholder="client" size="is-small" style="position: fixed">
      <option
              v-for="client in clients"
              :value="client.username"
              :key="client.username">
        {{ client.name }}
      </option>
    </b-select>
    <iframe :src="clientPage" width="100%" height="953px" frameborder="1"> </iframe>
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import conversations from "../store/modules/conversations";

  export default {
      name: 'client',
      data() {
          return {
              selected_user: 'client1',
              participants: [
                  {
                      id: 'assistant',
                      name: 'Assistant',
                      imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
                  }
              ],
              newMessagesCount: 0,
              isChatOpen: true, // to determine whether the chat window should be open or closed
              showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
              colors: {
                  header: {
                      bg: '#5fbd5f',
                      text: '#ffffff'
                  },
                  launcher: {
                      bg: '#5fbd5f'
                  },
                  messageList: {
                      bg: '#ffffff'
                  },
                  sentMessage: {
                      bg: '#eaeaea',
                      text: '#222222'
                  },
                  receivedMessage: {
                      bg: '#5FBD5F',
                      text: '#ffffff'
                  },
                  userInput: {
                      bg: '#eff2f4',
                      text: '#565867'
                  }
              }, // specifies the color scheme for the component
              alwaysScrollToBottom: true // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)

          }
      },
      methods: {
          sendMessage(text) {
              if (text.length > 0) {
                  this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
                  this.onMessageWasSent({author: 'support', type: 'text', data: {text}})
              }
          },
          onMessageWasSent(message) {
              // called when the user sends a message
              // this.messageList = [...this.messageList, message]
              let c_client = this.selected_user

              // let c_client = this.selected_user
              this.$store.commit('conversations/setMessage', [message.data.text, 'me', c_client])
          },
          openChat() {
              // called when the user clicks on the fab button to open the chat
              this.isChatOpen = true
              this.newMessagesCount = 0
          },
          closeChat() {
              // called when the user clicks on the botton to close the chat
              this.isChatOpen = false
          },
          loadChats: function () {
            this.$store.commit('conversations/getUserChat', this.c_client)
          },
          setClient (username) {
            this.$store.commit('assistant/setClient', username)
          }
      },
      computed: {
        clientPage() {
          return this.$store.state.client.client_page
        },
        clients () {
            return this.$store.state.assistant.active_clients
        },
        messageList () {
            return this.$store.state.conversations.users_conversation
        },
        c_client () {
            return this.selected_user
        }
      },
      // функция запускается каждые 2 секунды, обновляя список клиентов
      mounted: function () {
        this.$nextTick(function () {
          window.setInterval(() => {
            this.loadChats()
            // this.setClient(this.selected_user)
          }, 2000)
        })
      }
  }
</script>
