<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
    <!-- usuarioLogado - Vem do usuarioMixin -->
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpfMask }}</p>
    <!-- Pode-se utilizar um encadeamento de filters -->
		<p>{{ cpf | cpfMask | invert }}</p>

    <!-- Utilizando filters com o v-bind -->
    <input type="text" :value="cpf | cpfMask">
    <hr>
    <Frutas />
	</div>
</template>

<script>

import Frutas from './Frutas'
// Importando o usuarioMixin
import usuarioMixin from './usuarioMixin'

export default {
  components: { Frutas },
  // Registrando o usuarioMixin
  mixins: [ usuarioMixin],
  // Declarando filter localmente
  filters: {
    cpfMask(valor) {
      // Criando um Array de uma string, fazendo com que cada letra seja um elemento
      const arr = valor.split('')
      // Na posição 3 do arr, sem remover nenhum elemento adicione um (.)
      arr.splice(3, 0, '.')
      // Na posição 7 do arr, sem remover nenhum elemento adicione um (.)
      arr.splice(7, 0, '.')
      // Na posição 11 do arr, sem remover nenhum elemento adicione um (-)
      arr.splice(11, 0, '-')
      // Retornando o array obtido acima convertido para string
      return arr.join('')
    }
  },
  data() {
    return {
      cpf: '11097908720'
    }
  }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
