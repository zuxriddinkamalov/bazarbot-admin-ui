import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import {getToken} from "./helpers/token"
import * as ROUTES from './constants/routing'
import Index from './modules/Index.vue'
import SignIn from './modules/auth/views/SignIn.vue'

Vue.use(Router)

const routes = [
    {
        path: ROUTES.ROOT_PATH,
        name: 'index',
        component: Index,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'announcement',
                name: 'announcement'
            }
        ]
    },
    {
        path: ROUTES.SIGN_IN_URL,
        name: 'sign-in',
        component: SignIn,
    }
]

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
            store.commit('SET_TOKEN', token)
            next()
        }
    } else {
        next()
    }
})

export default router
