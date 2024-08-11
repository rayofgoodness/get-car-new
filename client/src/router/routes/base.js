import HomePage from "@/pages/HomePage.vue";
import Default from "@/layouts/Default.vue";
import AboutPage from "@/pages/AboutPage.vue";
import LoginPage from "@/pages/LoginPage.vue";

export default [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: {
            title: 'Home page',
            layout: Default
        }
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage,
        meta: {
            title: 'About page',
            layout: Default
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
        meta: {
            title: 'Login page',
            layout: Default
        }
    },
]