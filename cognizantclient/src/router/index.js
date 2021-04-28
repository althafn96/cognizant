import { createRouter, createWebHistory } from 'vue-router'

import auth from '@/middleware/auth'
import guest from '@/middleware/guest'
import store from '@/store'

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: () => import("@/views/layout/Layout.vue"),
        children: [
            {
                path: "/dashboard",
                name: "Dashboard",
                component: () => import("@/views/pages/Dashboard.vue"),
                meta: {
                    title: 'Dashboard - Cognizant'
                }
            },
            {
                path: "/users",
                name: "Users",
                component: () => import("@/views/pages/users/UsersIndex.vue"),
                meta: {
                    title: 'Users - Cognizant'
                }
            },
            {
                path: "/users/create",
                name: "Create User",
                component: () => import("@/views/pages/users/CreateUser.vue"),
                meta: {
                    title: 'Create User - Cognizant'
                }
            },
            {
                path: "/users/edit/:id",
                name: "Edit User",
                component: () => import("@/views/pages/users/EditUser.vue"),
                meta: {
                    title: 'Edit User - Cognizant'
                },
                props: true
            }
        ],
        meta: {
            middleware: [auth]
        }
    },
    {
        path: "/",
        redirect: "/login",
        component: () => import("@/views/pages/auth/Auth.vue"),
        children: [
            {
                path: "/login",
                name: "Login",
                component: () => import("@/views/pages/auth/LoginForm.vue"),
                meta: {
                    title: 'Sign In - Cognizant'
                }
            },
            {
                path: "/forgot-password",
                name: "Forgot Password",
                component: () => import("@/views/pages/auth/ForgotPasswordForm.vue"),
                meta: {
                    title: 'Forgot Password - Cognizant'
                }
            }
        ],
        meta: {
            middleware: [guest]
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta && to.meta.title ? to.meta.title : 'Cognizant';

    if(!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware

    return middleware[0]({
        store: store,
        next: next
    })
})

export default router
