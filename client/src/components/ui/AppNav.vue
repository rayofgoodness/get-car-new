<script setup>
import {reactive, ref} from "vue";


const selectedLink = ref('')
const navLinks = reactive([
  {
    name: 'Cars',
    link: '/cars',
    children: [
      {
        name: 'Add car',
        link: '/add',
      }
    ]
  },
  {
    name: 'Settings',
    link: '/settings',
    children: [
      {
        name: 'Profile',
        link: '/profile',
      },
      {
        name: 'Integrations',
        link: '/integrations',
      },
      {
        name: 'Security',
        link: '/security',
      },
    ]
  },
  {
    name: 'About',
    link: '/about',
  },
])


function selectLink(linkName) {
  selectedLink.value = selectedLink.value === linkName ? null : linkName
}
</script>

<template>
  <nav class="bg-gray-800 text-white py-2 px-4 w-[200px]">
    <div class="container mx-auto flex justify-between items-center">
      <ul class="flex flex-col">
        <li v-for="(nav, idx) in navLinks" :key="idx">
          <template v-if="nav?.children && nav.children.length">
            <span class="cursor-pointer hover:text-gray-300" @click.stop="selectLink(nav.name)">
              {{ nav.name }}
            </span>
          </template>
          <template v-else>
            <router-link :to="nav.link" class="hover:text-gray-300">
              {{ nav.name }}
            </router-link>
          </template>

          <template v-if="nav?.children && nav.children.length && selectedLink === nav.name">
            <ul v-for="child in nav.children" :key="child.id" class="flex flex-col ml-2">
              <router-link :to="`${nav.link}${child.link}`" class="hover:text-gray-300">
                {{ child.name }}
              </router-link>
            </ul>
          </template>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

</style>