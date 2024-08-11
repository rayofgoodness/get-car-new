import Default from "@/layouts/Default.vue";
import Login from "@/pages/auth/Login.vue";
import Registration from "@/pages/auth/Registration.vue";

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
            layout: Default
        },
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration,
        meta: {
            title: 'Login',
            layout: Default
        },
    }
]