<script setup>
import {onMounted, reactive} from "vue";
import { userStore } from '@/store/user.js'

const store = userStore()
const form = reactive({
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: ''
})

function submitForm() {
  store.register(form)
}

</script>

<template>
  <div class="w-full h-full flex flex-col gap-1.5">
    <form @submit.prevent="submitForm" class="max-w-md mx-auto mt-8">
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">First name:</label>
        <input v-model="form.first_name" type="text" id="first_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Last name:</label>
        <input v-model="form.last_name" type="text" id="last_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username:</label>
        <input v-model="form.username" type="text" id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input v-model="form.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
        <input v-model="form.password" type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
      </div>
    </form>

    <p class="text-center">Маєш аккаунт?! <router-link to="/login">Вхід!</router-link></p>
  </div>
</template>

<style scoped>

</style>