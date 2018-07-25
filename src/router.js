import Vue from 'vue'
import Router from 'vue-router'
import Index from './modules/Index.vue'
import Login from './modules/auth/views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
