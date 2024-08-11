<script setup>
import { reactive } from "vue";
import {userStore} from "@/store/user.js";
import {useRouter} from "vue-router";

const router = useRouter()
const store = userStore()
const form = reactive({
  email: '',
  password: ''
})

async function submitForm() {
  const { user } = await store.login(form)
  if (!user) return
  await router.push('/')
}

</script>

<template>
  <div class="w-full h-full flex flex-col gap-1.5">
    <form @submit.prevent="submitForm" class="max-w-md mx-auto mt-8">
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input v-model="form.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input v-model="form.password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
      </div>
    </form>

    <p class="text-center">Немає аккаунту?! <router-link to="/registration">Зареєструйся!</router-link></p>
  </div>
</template>

<style scoped>

</style>