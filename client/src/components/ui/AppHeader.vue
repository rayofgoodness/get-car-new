<script setup>
import {userStore} from "@/store/user.js";
import {computed} from "vue";

const store = userStore()
const isLoginned = computed(() => store.token)
const user = computed(() => store.user)

</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4">
      <div>
        <router-link to="/" class="text-2xl font-semibold text-gray-800 hover:text-gray-600">
          CRM
        </router-link>
      </div>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/about" class="text-gray-800 hover:text-gray-600">
              Про нас
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-gray-800 hover:text-gray-600">
              Контакти
            </router-link>
          </li>
        </ul>
      </nav>
      <div>
        <div v-if="isLoginned">
          <button @click="store.logout()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Logout
          </button>
        </div>
        <router-link v-else to="/login" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Увійти
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>