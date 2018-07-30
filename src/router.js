import Index from './modules/Index.vue'
import SignIn from './modules/auth/views/SignIn.vue'
import * as ROUTES from './constants/routing'

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

export default routes
