<template>
  <TitleBar>Gestion des POJ</TitleBar>
<!--  1 bloc par periode annuelle-->
  <div class="p-2">
<!--    description de la periode -->
    <div class="p-2">
      <div class="flex space-x-2 items-center mb-2">
        <h2 class="text-2xl">Hiver 2022</h2>
        <button class="border border-blue-400 rounded bg-blue-300 text-blue-900 px-2 py-1" @click="showPlageAnnuelleForm = true" v-show="!showPlageAnnuelleForm">Edit</button>
      </div>

      <div v-if="!showPlageAnnuelleForm">
        <p>du 01/01/2022 au 30/06/2022</p>
        <p>et du 01/01/2022 au 30/06/2022</p>
      </div>

      <div v-if="showPlageAnnuelleForm">
        <form action="#">
          <div class="flex space-x-2 items-center">
            <div>
              <label>Du : </label> <input type="date" class="border rounded"> <label>Au : </label> <input type="date" class="border rounded">
            </div>
            <div>
              <button class="border border-red-400 rounded bg-red-300 text-red-900 px-2 py-0">X</button>
            </div>
          </div>
          <div>
            <button class="border border-blue-400 rounded bg-blue-300 text-blue-900 px-2 py-1">+</button>
            <button @click="showPlageAnnuelleForm = false" class="border border-amber-400 rounded bg-amber-300 text-amber-900 px-2 py-1">Annuler</button>
            <button class="border border-green-400 rounded bg-green-300 text-green-900 px-2 py-1">Valider</button>
          </div>
        </form>
      </div>
    </div>
<!--    definition de POJ -->
    <div class="flex w-full space-x-2">
<!--      GAR -->
      <div class="border border-red-600 rounded p-2 w-1/2">
        <h3 class="text-xl mb-2">Garde</h3>
        <table class="w-full">
          <thead>
          <tr>
            <td></td>
            <th colspan="2" class="border border-red-100">Semaine</th>
            <th colspan="2" class="border border-red-100">WE</th>
          </tr>
          <tr>
            <td></td>
            <th class="border border-red-100">S1</th>
            <th class="border border-red-100">S2</th>
            <th class="border border-red-100">S1</th>
            <th class="border border-red-100">S2</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th class="border border-red-100">jour</th>
            <td class="border border-red-100 text-center">3</td>
            <td class="border border-red-100 text-center">4</td>
            <td class="border border-red-100 text-center">3</td>
            <td class="border border-red-100 text-center">4</td>
          </tr>
          <tr>
            <th class="border border-red-100">Nuit</th>
            <td class="border border-red-100 text-center">0</td>
            <td class="border border-red-100 text-center">0</td>
            <td class="border border-red-100 text-center">0</td>
            <td class="border border-red-100 text-center">0</td>
          </tr>
          </tbody>
        </table>
      </div>
<!--      AST -->
      <div class="border border-blue-600 rounded p-2 w-1/2">
        <h3 class="text-xl mb-2">Astreinte</h3>
        <table class="w-full">
          <thead>
          <tr>
            <td></td>
            <th colspan="2" class="border border-blue-100">Semaine</th>
            <th colspan="2" class="border border-blue-100">WE</th>
          </tr>
          <tr>
            <td></td>
            <th class="border border-blue-100">S1</th>
            <th class="border border-blue-100">S2</th>
            <th class="border border-blue-100">S1</th>
            <th class="border border-blue-100">S2</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th class="border border-blue-100">jour</th>
            <td class="border border-blue-100 text-center">3</td>
            <td class="border border-blue-100 text-center">4</td>
            <td class="border border-blue-100 text-center">3</td>
            <td class="border border-blue-100 text-center">4</td>
          </tr>
          <tr>
            <th class="border border-blue-100">Nuit</th>
            <td class="border border-blue-100 text-center">0</td>
            <td class="border border-blue-100 text-center">0</td>
            <td class="border border-blue-100 text-center">0</td>
            <td class="border border-blue-100 text-center">0</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TitleBar from "../components/TitleBar.vue";
export default {
  name: "Poj",
  components: {TitleBar},
  data() {
    return {
      showPlageAnnuelleForm: false
    }
  }
}
</script>

<style scoped>

</style>
