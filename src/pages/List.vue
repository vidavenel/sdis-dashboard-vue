<template>
  <TitleBar>Titre de la page</TitleBar>
  <div>
    <table>
      <thead>
      <tr>
        <th>Maticule</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Affectation</th>
        <th>Date fin aptitude</th>
      </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";
export default {
  name: "List",
  components: {TitleBar}
}
</script>

<style scoped>

</style>
