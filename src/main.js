import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import router from './router'
import Resource from 'vue-resource'

import 'element-ui/lib/theme-chalk/index.css'
import {API_URL} from "./constants/api";

Vue.config.productionTip = false
Vue.use(Resource)
Vue.use(ElementUI, {locale: 'ruRU'})

Vue.http.options.root = API_URL

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
