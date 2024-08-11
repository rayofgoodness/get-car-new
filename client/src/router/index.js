import { createWebHistory, createRouter } from 'vue-router'
import routes from "./routes/index.js";

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => updatePageMeta(to))
router.beforeEach((to, from , next) => validateRoute(to, from, next))

export default router;


function updatePageMeta(page) {
    const title = page.meta.title

    if (title) {
        document.title = title
    }
}

function validateRoute(to, from, next) {
    if (!router.getRoutes().some(route => route.path === to.path)) {
        next({ name: 'Login' })
    }

    next()
}
