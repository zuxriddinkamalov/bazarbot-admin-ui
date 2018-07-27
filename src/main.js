import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(ElementUI, {locale: 'ruRU'})
Vue.use(Router)

const router = new Router({
    routes: routes,
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
