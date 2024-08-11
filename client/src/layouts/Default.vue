<script setup>
import AppFooter from "@/components/ui/AppFooter.vue";
import AppHeader from "@/components/ui/AppHeader.vue";
import AppNav from "@/components/ui/AppNav.vue";

</script>

<template>
  <app-header/>
  <main class="flex">
    <app-nav/>
    <slot/>
  </main>
  <app-footer/>
</template>

<style lang="scss" scoped>

</style>