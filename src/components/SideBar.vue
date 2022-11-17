<template>
  <div>
    <div class="h-12 bg-slate-700"></div>
    <nav class="w-64 bg-slate-600 text-white">
      <ul class="p-2">
        <SideBarLink><router-link to="/">Index</router-link></SideBarLink>
        <SideBarLink><router-link to="/liste">Liste</router-link></SideBarLink>
        <SideBarLink><router-link to="/poj">POJ</router-link></SideBarLink>
      </ul>
    </nav>
  </div>
</template>

<script>
import SideBarLink from "./SideBarLink.vue";
export default {
  name: "SideBar",
  components: {SideBarLink}
}
</script>

<style scoped>

</style>
