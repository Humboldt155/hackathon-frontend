import Vue from 'vue'
import Router from 'vue-router'
import Client from './views/Client.vue'
import Assistant from './views/Assistant.vue'
import Mobile from './views/Mobile.vue'

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
    },
    {
      path: '/mobile/',
      name: 'mobile',
      component: Mobile
    }
  ]
})
