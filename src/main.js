import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import routes from './router'
import * as ROUTES from './constants/routing'
import {getToken} from "./helpers/token"

Vue.config.productionTip = false
Vue.use(ElementUI, {locale: 'ruRU'})
Vue.use(Router)

const router = new Router({
    routes: routes,
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || {x: 0, y: 0}
    }
})

router.beforeEach((to, from, next) => {
    let token = getToken()
    console.warn(token)
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!token) {
            next({ path: ROUTES.SIGN_IN_URL })
        } else {
            next()
        }
    } else {
        next()
    }

})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
