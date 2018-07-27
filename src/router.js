import Index from './modules/Index.vue'
import Login from './modules/auth/views/Login.vue'

const routes = [
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

export default routes
