import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Logs from '@/components/Logs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/logs',
      name: 'logs',
      component: Logs
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
