<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <Contador v-for="c in 5" :key="c" />
  </div>
</template>

<script>
// Importanto o componente Contador para ser usado dentro do componente Contadores!
import Contador from './Contador'
export default {
  // Registrando o componente Contador de forma LOCAL!
  components: {
    Contador: Contador
  }
}
</script>

<style>

</style>