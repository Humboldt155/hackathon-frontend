<template>
  <div>
    <iframe :src="clientPage" width="100%" height="800px" frameborder="1"> </iframe>
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

  export default {
      name: 'client',
      data() {
          return {
              participants: [
                  {
                      id: 'user1',
                      name: 'Veronika',
                      imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
                  }
              ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
              messageList: [
                  {type: 'text', author: `me`, data: {text: `Say yes!`}},
                  {type: 'text', author: `user1`, data: {text: `No.`}},
                  {type: 'text', author: `me`, data: {text: `Say yes!`}},
                  {type: 'text', author: `user1`, data: {text: `No.`}},
                  {type: 'text', author: `me`, data: {text: `Say yes!`}},
                  {type: 'text', author: `user1`, data: {text: `No.`}},
                  {type: 'text', author: `me`, data: {text: `Say yes!`}},
                  {type: 'file', author: `user1`, data: {text: `Pillow decorative`, name: '764', url: '17926555'}}
              ], // the list of the messages to show, can be paginated and adjusted dynamically
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
              alwaysScrollToBottom: false // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
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
              this.messageList = [...this.messageList, message]
          },
          openChat() {
              // called when the user clicks on the fab button to open the chat
              this.isChatOpen = true
              this.newMessagesCount = 0
          },
          closeChat() {
              // called when the user clicks on the botton to close the chat
              this.isChatOpen = false
          }
      },
      computed: {
        clientPage() {
          return this.$store.state.client_page
        }
      }
  }
</script>
