<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <SideBar/>
  <div class="w-full">
    <TopBar/>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
