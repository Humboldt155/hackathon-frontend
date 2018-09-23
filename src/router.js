import Vue from 'vue'
import Router from 'vue-router'
import Client from './views/Client.vue'
import Assistant from './views/Assistant.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/client/',
      name: 'client',
      component: Client
    },
    {
      path: '/assistant/',
      name: 'assistant',
      component: Assistant
    }
  ]
})
