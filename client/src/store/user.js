import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import request from "../services/request.js";

export const userStore = defineStore('user', () => {
    let user = ref({
        name: null,
        email: null,
        password: null,
    })

    const token = ref(null)

    async function register(form) {
        return request.post('/api/auth/register', form)
    }

    async function login(form) {
        const response = await request.post('/api/auth/login', form)
        user.value = response.user
        token.value = response.token

        return response
    }

    async function getUserById(form) {}

    async function logout() {
        userStore.$reset()
    }

    return {
        user,
        token,
        login,
        register,
        logout
    }
})